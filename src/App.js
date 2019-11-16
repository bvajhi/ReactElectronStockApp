import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import CONST from './constants'
import * as demoActions from './demoActions'
import {Root} from './components/Root';
import Home from './components/Home';

const mapStateToProps= (state) =>({
  name: state.demo.name
});

const mapDispatchToProps =  (dispatch) => ({
  demoActions2:  (name) => dispatch({
    type: CONST.TEST_ACTION,
    payload: {name}
  }),
  demoActions: bindActionCreators(demoActions, dispatch)
})

class App extends React.Component {

  constructor(props){
    super(props);
    // this.props.demoActions.changeName('Bilal');
  }

  render(){
    const {name} = this.props;
    const nameFromRedux = !!name? name : 'empty'
    return (
      <Root>
        <Home></Home>
      </Root>
    
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
