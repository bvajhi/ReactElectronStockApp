import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import logo from '../logo.svg';
import '../App.css';
import CONST from '../constants'
import * as demoActions from '../demoActions'
  

const mapStateToProps= (state) =>({
  name: state.demo.name
});

const mapDispatchToProps =  (dispatch) => ({
  demoActions:  (name) => dispatch({
    type: CONST.TEST_ACTION,
    payload: {name}
  })

})

class Home extends React.Component {

  constructor(props){
    super(props);
    this.props.demoActions('Bilal');
  }

  render(){
    const {name} = this.props;
    const nameFromRedux = !!name? name : 'empty'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            The name in the redux is: {nameFromRedux}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
