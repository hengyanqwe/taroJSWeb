import {Component} from 'react'
import {View} from '@tarojs/components'
import {AtButton, AtInput} from 'taro-ui'
import './item.scss'
import Taro from "@tarojs/taro";

interface isState {
  value: any,
  key: string,
}
export default class Item extends Component<any,isState> {
  constructor (props) {
    super(props)
    const tid=props.tid;
    const paramsStr=tid.split('?')[1].split('&');
    const params={
      key: "",
      value:"",
    };
    const item=paramsStr[0];
    params['key']=item.split('=')[0];
    params['value']=item.split('=')[1];
    wx.setNavigationBarTitle({
      title: '更改名字'
    })
    this.state = {
      value: params.value || '',
      key:params.key,
    }
  }


  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  handleChange (value) {
    this.setState({
      value:value
    })
  }
  onSubmit (event) {
    console.log(event,'--------------------------------')
  }
  handleBack () {

  }
  save(){
    Taro.eventCenter.trigger('onChange',{[this.state.key]:this.state.value});
    wx.navigateBack()
  }
  render () {
    return (
      <View>
        <AtInput
          name='value'
          type='text'
          placeholder='标准五个字'
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        />
        <View style={{paddingTop: '3px'}}/>
        <AtButton size={'small'} type='primary' onClick={this.save.bind(this)}>确认</AtButton>
      </View>
    )
  }
}

