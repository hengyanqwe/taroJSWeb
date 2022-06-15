import { Component } from 'react'
import {View, } from '@tarojs/components'
import {  AtListItem  } from 'taro-ui'
import './information.scss'
import Taro from "@tarojs/taro";
import myAxios from "../../common/myAxios";
interface IValues{
  name:string
  phoneNumber:string
  workCode:string
  unit:string
}
interface Istate {
  values:IValues,
}
interface ItemUpdateParams {
  key:string,
}
const Information=class user extends Component<any,Istate> {
  constructor(props:any){
    super(props);
    wx.request({
      url: 'www.baidu.com',
      success: function (response) {
        console.log("success");
      },
      fail:function(e){
        debugger;
        console.log("fail");
      },
      complete: function () {
        console.log("complete");
      }
    })
    /*myAxios.get('www.baidu.com').then(res=>{
      debugger;
    }).catch(error=>{
      debugger;
    })*/
    Taro.eventCenter.on('onChange',(param)=>{
      const values=this.state.values;
      this.setState({values:Object.assign({},values,param)});
    });

    this.state ={
      values:{name:'张三',phoneNumber:'18538928333',workCode:'F000',unit:'软件部'}
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  itemUpdate(params:ItemUpdateParams){
    const {key}=params;
    const value=this.state.values[key];
    Taro.navigateTo({
      url: `/pages/user/item/item?${key}=${value}`,
    })

  }

  render () {
    return (
      <View>
        <AtListItem title='姓名' arrow='right' extraText={this.state.values.name} onClick={()=>this.itemUpdate({key:'name'})}/>
        <AtListItem title='手机号' arrow='right' extraText={this.state.values.phoneNumber} onClick={()=>this.itemUpdate({key:'phoneNumber'})}/>
        <AtListItem title='工号' arrow='right' extraText={this.state.values.workCode} onClick={()=>this.itemUpdate({key:'workCode'})}/>
        <AtListItem title='部门' arrow='right' extraText={this.state.values.unit} onClick={()=>this.itemUpdate({key:'unit'})}/>
      </View>
    )
  }
}


export default Information;
