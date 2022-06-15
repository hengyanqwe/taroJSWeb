import { Component } from 'react'
import { View , Picker } from '@tarojs/components'
import { AtButton,AtInput, AtForm,AtList, AtListItem,AtNavBar  } from 'taro-ui'
import './user.scss'
interface Istate {
  selector: ['软件部', '人事部', '财务部', '后勤保障部'],
  selectorChecked: '软件部',
  value1:'',
  value2:'',
  value3:'',
  value4:'',
  value5:'',
  value6:''
}
export default class user extends Component<any,Istate> {
  constructor(props:any){
    super(props)
    this.state ={
      selector: ['软件部', '人事部', '财务部', '后勤保障部'],
      selectorChecked: '软件部',
      value1:'',
      value2:'',
      value3:'',
      value4:'',
      value5:'',
      value6:''
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  handleChange1 (value1) {
    this.setState({
      value1
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value1
  }
  handleChange2 (value2) {
    this.setState({
      value2
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value2
  }
  handleChange3 (value3) {
    this.setState({
      value3
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value3
  }
  handleChange4 (value4) {
    this.setState({
      value4
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value4
  }
  handleChange5 (value5) {
    this.setState({
      value5
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value5
  }
  handleChange6 (value6) {
    this.setState({
      value6
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value6
  }
  onChange = e => {
    this.setState({
      selectorChecked : this.state.selector[e.detail.value]
    })
  }
  render () {
    return (
      <View class="pageContainer">
        <View className='top' style={{width:"100%",height:"180px",backgroundColor:"#4175FF",alignItems:"center",display:"flex",color:"#FFFFFF",fontSize:"24px"}}>
        {/* <AtNavBar
          onClickRgIconSt={this.handleClick}
          onClickRgIconNd={this.handleClick}
          onClickLeftIcon={this.handleClick}
          color='#000'
          title='NavBar 导航栏示例'
          leftText='返回'
          rightFirstIconType='bullet-list'
          rightSecondIconType='user'
        /> */}
        个人信息</View>
        <View style={{backgroundColor:"#FFFFFF",width:"90%",height:"350px",marginTop:"-30px",marginLeft:"auto",marginRight:"auto",borderRadius:"10px"}}>
            <View style={{height:"20px"}}></View>
          <AtForm>
            <AtInput
              name='value1'
              title='姓名'
              type='text'
              placeholder='请输入你的姓名'
              value={this.state.value1}
              onChange={this.handleChange1.bind(this)}
            />
            <AtInput
              name='value6'
              border={false}
              title='手机号码'
              type='phone'
              placeholder='请输入你的手机号码'
              value={this.state.value6}
              onChange={this.handleChange6.bind(this)}
            />
            <AtInput
              name='value2'
              title='工号'
              type='text'
              placeholder='请输入你的工号'
              value={this.state.value2}
              onChange={this.handleChange2.bind(this)}
            />
            <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
                <AtList>
                  <AtListItem
                    title='部门'
                    extraText={this.state.selectorChecked}
                  />
                </AtList>
            </Picker>
            <AtInput
              name='value4'
              title='家庭地址'
              type='idcard'
              placeholder='请输入你的家庭地址'
              value={this.state.value4}
              onChange={this.handleChange4.bind(this)}
            />
          </AtForm>
        </View>
        <View style={{width:'70%',marginLeft:"auto",marginRight:"auto",marginTop:'50px'}}>
        <AtButton type='primary' style={{borderRadius:'5px'}} size='small'>保存</AtButton>
        {/* <van-button type='primary' loading loading-text='ing'>Button</van-button> */}
        </View>
      </View>
    )
  }
}
