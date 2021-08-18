import React, { Component } from 'react';
import {connect} from 'react-redux'
import { increase, decrease } from "./actions/action";
class App extends Component {

    state = {
      count: 0
    }
    increase = ()=>{
      this.setState({
        count : this.state.count + 1
      })
    }
    decrease = ()=>{
      this.setState({
        count: this.state.count - 1
      })
    }
render(){
  console.log(this.props);
  return (
    <div className="App">

      <button onClick={this.props.increase}> + </button>
      <div>{this.props.count}</div>
      <button onClick={this.props.decrease}> - </button>
    </div>
  );
  }
}

//هات الاستيت من لارديوسر وباصيها ك بروبس لل اب
function mapStateToProps (state){
  return{
    count: state.count
  }
}


function mapDispatchToProps (dispatch){
  return {
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
