import axios from 'axios';
import Qs from 'qs';
import Cookies from 'js-cookie';

const myAxios = axios.create({
    //全局基准路径
    // baseURL:'/peas',
    timeout: 10000,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    // headers: {'Content-Type': 'application/json;charset=utf-8'},
    // headers: {'Content-Type': 'application/x-www-form-urlencode;charset=utf-8'},
});

myAxios.interceptors.request.use(config => {
    console.log('axios config before ', config);
    //保存csrf防御token
    const token = Cookies.get("CSRFToken");
    Cookies.set("CSRFDefense", token);
    //处理不同表单提交类型
    if (config.method === 'post' || config.method === 'put') {
        //若调用时未配置请求类型则用此处配置;文件上传时需手动配置headers['Content-Type']
        if (!config.headers['Content-Type']) {
            if (config.data) {
                //后台接受的参数Content-Type
                if (config.data['__isFormType']) {
                    delete config.data.__isFormType;
                    // 默认application/x-www-form-urlencode;charset=utf-8,对应spring注解：@RequestParam,用字段__isFormType标明
                    config.data = Qs.stringify({...config.data});
                } else {
                    // application/json;对应spring注解：@RequestBody
                    config.data = JSON.stringify(config.data);
                    config.headers['Content-Type'] = 'application/json;charset=utf-8';
                }
            }
        }
    } else if (!config.headers['Content-Type']) {
        console.log(4)
        config.headers['Content-Type'] = 'application/x-www-form-urlencode;charset=utf-8';
    }
    //发送前添加access_token
    let accessToken = localStorage.getItem('access_token');
    // eslint-disable-next-line eqeqeq
    if(accessToken != null){
        config.headers['Authorization'] = accessToken;
    }
    console.log('******axios config  after***', config);
    return config;
}, error => {
    console.log('axios request error');
    return Promise.reject(error);
});

myAxios.interceptors.response.use(response => {
    try {
        const status = response.status;
        if ((status >= 200 && status < 300) || status === 304) {
            //发送后添加access_token
            let accessToken = response.headers['access_token'];
            console.log("response accessToken",accessToken);
            // eslint-disable-next-line eqeqeq
            if(accessToken != null){
                localStorage.setItem('access_token',accessToken);
            }
            return response.data;
        }
    } catch (e) {
        const errorMessage = '请求错误：2001009 in myAxios.js r49';
        //Message.warning(errorMessage);
        return null;
    }
}, error => {
    console.log('------axios response error---', error);
    try {
        const status = error.response ? error.response.status : '';
        const message = error.response ? error.response.data : '网络错误，请刷新重试';
        // const isAuth = localStorage.getItem('_isAuthorised');
        if (status && (status === 401)) {
            const hash = window.location.hash;
            if (hash && (hash.indexOf('#/login') > -1)) {

            } else {
                // isAuth && Message.warning(message);
                setTimeout(()=>{
                    window.location.replace('#/login');
                },1000)
            }
        } else if (status && (status === 400)) {
            // Message.error(error.response ? error.response.data : '错误的请求，请检查地址和参数');
            return Promise.reject(error.response ? error.response.data : '错误的请求，请检查地址和参数')
        } else if (status && (status === 307)) {
            //Message.warning(message);
            window.location.replace('#/password-change');
        } else if (status && (status >= 500)) {
            // window.location.replace("#/error");
            // Modal.error({title: '错误提示', content: message + ':' + status});
            return Promise.reject(message);
        } else {
            return Promise.reject(message);
        }
    } catch (e) {
        const errorMessage = '请求错误：4001009 in myAxios.js r78';
        //Message.warning(errorMessage);
        return Promise.reject(errorMessage);
    }
});

export default myAxios;
