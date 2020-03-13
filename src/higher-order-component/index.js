import React,{ Component } from "react";

//a higher-order component is a function that takes a component and returns a new component.

class Test extends Component{
  
  render() {
    console.log('this.props Test',this.props);
    return (
      <div>
        {sessionStorage.getItem('aaa')}
      </div>
    )
  }
}
function withSession(Component,data){
  return class extends React.Component{

    componentDidMount(){
      sessionStorage.setItem('aaa',data['aaa'])
    }
      
    render() {
      console.log(this.props);
      return (
        <Component {...this.props}/>
      )
    } 
  }
}
let Wrapper = withSession(Test,{
  aaa: '123'
})
export default Wrapper

