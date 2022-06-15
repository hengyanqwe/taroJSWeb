import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtForm, AtInput, AtButton, AtCheckbox,AtCard  } from 'taro-ui'
import './index.scss'
export default class Index extends Component {
  checkboxOption: ({ value: string; label: string; desc: string; disabled?: undefined } | { value: string; label: string; desc?: undefined; disabled?: undefined } | { value: string; label: string; desc: string; disabled: boolean })[]
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      checkedList:['list1']
    }
    this.checkboxOption = [{
      value: 'list1',
      label: 'iPhone X',
    },{
      value: 'list2',
      label: 'HUAWEI P20'
    },{
      value: 'list3',
      label: 'OPPO Find X',
    },{
      value: 'list4',
      label: 'vivo NEX',
  }]
  }

 
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  handleChange (value) {
    this.setState({
      value:'zjam'
    })
  }
  onSubmit (event) {
    console.log(event,'--------------------------------')
  }
  onReset (event) {
    this.setState({
      value: '',
    })
  }
  handleClick (event) {
    this.setState({
      value: '顫三',
    })
  }
  handleChangeCheck (value) {
    this.setState({
      checkedList: value
    })
  }
  render () {
    return (
      <View>
          <AtForm
          onSubmit={this.onSubmit.bind(this)}
          onReset={this.onReset.bind(this)}
          className='fr'
          >
            <View className='tou'>
              <AtInput 
                required
                border={false}  
                title='标题' 
                type='text' 
                maxlength ='20' 
                editable
                placeholder='最多20个长度' 
                value={this.state.value}  />
              <AtInput 
                border={false}  
                title='说明' 
                type='text' 
                maxlength ='20' 
                editable
                placeholder='最多20个长度' 
                value={this.state.value}  />
              </View>
              <AtCard
                title='这是个标题'
                thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
              >
                <AtCheckbox
                options={this.checkboxOption}
                selectedList={this.state.checkedList}
                onChange={this.handleChangeCheck.bind(this)}
              />
               <AtButton  size='small'>删除</AtButton >
               <AtButton  size='small'>编辑</AtButton >
               <AtButton  size='small'>上移</AtButton >
               <AtButton  size='small'>下移</AtButton >
              </AtCard>
              
              <AtButton  formType="submit" onClick={this.onSubmit}>提交</AtButton >
              <AtButton  formType="reset">重置</AtButton >
          </AtForm>
        </View>
    )
  }
}

                                                         