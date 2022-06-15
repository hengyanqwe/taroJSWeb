import { Component } from 'react'
import { AtTabBar }  from 'taro-ui'
import Information from '../user/Information'
import {Text, View} from "@tarojs/components";
interface IState{
  current:number
}
export default class Index extends Component<any,IState> {
  constructor () {
    // @ts-ignore
    super()
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    switch (value){
      case 0:
        // 首页
        // 跳转到目的页面，在当前页面打开
        /*Taro.navigateTo({
          url: '/pages/page/path/name'
        })*/
        wx.setNavigationBarTitle({
          title: '首页'
        })
        break
      case 1:
        // 个人信息
        // 跳转到目的页面，在当前页面打开
        /*Taro.navigateTo({
          url: '/pages/main/user/information'
        })*/
        wx.setNavigationBarTitle({
          title: '个人信息'
        })
        break
    }
    this.setState({
      current: value
    })
  }
  NowTab=()=>{
    switch (this.state.current){
      case 0:
        return <Text>页面待开发</Text>
      case 1:
        return <Information/>
    }
    return <Text>404</Text>
  }
  render () {
    const NowTab=this.NowTab;
    return (
      <View>
        <NowTab/>
          <AtTabBar
            fixed
            tabList={[
              { title: '首页', iconType: 'home', text: 'new', },
              { title: '个人信息', iconType: 'user', },
            ]}
            onClick={this.handleClick.bind(this)}
            current={this.state.current}
          />

      </View>
    )
  }
}
