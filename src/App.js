// App.js
import React, { Component } from 'react';
import logo from './img/abc.jpg';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import Create from './components/create.component';
// import Edit from './components/edit.component';
// import Index from './components/index.component';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick() {
        document.body.style.background = `url(${logo})`;
      }
    render() {
        return (
            <div>
                <div class="site-wrapper">

                    <div class="site-wrapper-inner">

                        <div class="cover-container">

                            <div class="masthead clearfix">
                                <div class="inner">
                                    {/* <h3 class="masthead-brand">Cover</h3> */}
                                    <nav>
                                        <ul class="nav masthead-nav">
                                            <li class="active"><a href="#">Home</a></li>
                                            <li><a href="#">Features</a></li>
                                            <li><a href="#">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div class="inner cover">
                                <h1 class="cover-heading">You will marry me?</h1>
                                <p class="lead">In this life we can no do great things. We can only do small things with great love</p>
                                <div class="leader">
                                <p class="leader1">
                                    <button  class="btn btn-lg btn-default" onClick={this.handleClick}>Yes</button>
                                </p>
                                <p class="leader2">
                                    <button  class="btn btn-lg" >No</button>
                                </p>
                                </div>
                            </div>

                            <div class="mastfoot">
                                <div class="inner">
                                    <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div id="shadowMeasureIt"></div><div id="divCoordMeasureIt"></div><div id="divRectangleMeasureIt"><div id="divRectangleBGMeasureIt"></div></div>
            
            
            </div>
        );
    }
}

export default App;