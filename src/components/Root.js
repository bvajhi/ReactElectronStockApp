import React, { Component } from 'react';

import { Header } from './Header';

export class Root extends Component{

    render(){
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row"> 
                    <div className="col-xs-10 col-xs-offset-1">
                        {this.props.children}
                    </div>
                </div>
        
            </div>
        )


    }



}