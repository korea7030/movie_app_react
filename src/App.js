import React from 'react';
import PropTypes from 'prop-types';  // 유효성 체크 package

// class component define

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state.isLoading;
    return <div>{isLoading ? "Loading...": "We are ready"}</div>
  }
}

export default App;
