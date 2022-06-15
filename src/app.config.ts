export default defineAppConfig({
  pages: [
    'pages/main/main',
    'pages/user/item/item'
    //'pages/user/Information'
    //'pages/user/user',
    //'pages/user/information',

  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  usingComponents: {
    // 定义需要引入的第三方组件
    // 1. key 值指定第三方组件名字，以小写开头
    // // 2. value 值指定第三方组件 js 文件的相对路径
    // 'ec-canvas': '../../components/ec-canvas/ec-canvas',
    'van-button': "@vant/dist/button/index",
    //'information':'pages/user/Information',
  },
  /*tabBar :{
    list:[
      {
        pagePath:'pages/index/index',
        text: '首页',
        iconPath:'',
        selectedIconPath:''
      },{
        pagePath: 'pages/user/information',
        text: '我的',
        iconPath:'icon/user.png',
        selectedIconPath:'icon/user.png'
      }
    ]
  }*/
})
