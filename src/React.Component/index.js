import React,{Component} from 'react'

export default class TestComponent extends Component{
  constructor(props){
    super(props)
    console.log(123);
    this.state = {
      count: 0
    }
    console.log('this',this);
  }
  //不常用  derived [dɪ'raɪv] 派生的
  static getDerivedStateFromProps(props, state){
    console.log('getDerivedStateFromProps props state',props,state);
    return null
  }
  //不常用
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate nextProps nextState',nextProps,nextState);
    return true
  }
  //不常用  snapshot ['snæp.ʃɒt] 快照
  getSnapshotBeforeUpdate(prevProps, prevState){
    //此生命周期的任何返回值将作为参数传递给 componentDidUpdate()
    console.log('getSnapshotBeforeUpdate prevProps prevState',prevProps,prevState);
    return true
  }
  //即将过时
  // componentWillMount(){
  //   console.log('componentWillMount');
  // }
  componentDidMount(){
    console.log('componentDidMount');
  }
  //过时
  // componentWillUpdate(){
  //   console.log('componentWillUpdate');
  // }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  componentDidCatch(){
    //仅捕获组件树中以下组件中的错误,本身的错误无法捕获
    console.log('componentDidCatch');
  }
  static getDerivedStateFromError(error){
    console.log('getDerivedStateFromError error',error);
  }
  //过时
  // componentWillReceiveProps(){
  //   console.log('componentWillReceiveProps');
  // }
  componentWillUnmount(){
    console.log('componentWillReceiveProps');
  }
  
  render(){
    console.log('render');
    return <div>
      TestComponent
      
      <span>{this.state.count}</span>

      <TestChildren/>
    </div>
  }
}
function TestChildren(){
  function add(){
    throw new SyntaxError('报错啦!')
  }
  return <div>
    <button onClick={()=>add()}>add</button>
  </div>
}