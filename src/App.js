import React from 'react';
import PropTypes from 'prop-types';  // 유효성 체크 package

// class component define

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log("hello");
  }
  // class component 를 쓰는 이유. 상태가 있음
  state = { // object
    count: 0
  };
  add = () => {
    // 새로운 state와 함께 render function이 호출되지 않음
    // this.state.count = 1;  
    this.setState(current => ({count : current.count + 1}));
  };
  minus = () => {
    // this.state.count =-1;
    // 현재 상태를 가지고 있을 수 있음(arrow function 활용)
    this.setState(current => ({count : current.count - 1}));  
  };

  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("i justed update");
  }
  render() {
    console.log("render");
    // render에서 뿌리려면 this로 접근
    return (<div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
