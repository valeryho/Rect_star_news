import React from 'react';
import { BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import ReactDOM from 'react-dom';
import Search from '../search/search'

class Head extends React.Component
{
    render(){

        return(

        <div className="container-fluid ">
            <div className="container ">

                <div className="row header-top">

                    <div className="col-6 logo">
                        <h1 className="main-text"><i className="fa fa-star-half"></i>STAR NEWS</h1>
                    </div>
                    <div className="col-6 search">
                        <Search/>
                    </div>
                </div>
                <div className="row">

                    <div className="col navigation">
                        <nav>
                            <ul className="main-nav">
                                <li><Link to ="/Home">Home</Link></li>
                                <li><Link to="/About">About</Link></li>
                                <li><Link to="/Categories">Categories</Link></li>
                                <li><Link to="/Lifestyle">Lifestyle</Link></li>
                                <li><Link to="/Posts">Posts</Link></li>
                                <li><Link to="/Video">Video</Link></li>
                                <li><Link to="/Blog">Blog</Link></li>
                                <li><Link to="/Events">Events</Link></li>
                                <li><Link to="/FAQ">FAQ</Link></li>
                                <li><Link to="/Get in touch">Get in touch</Link></li>
                                <li><Link to="/Login">Login</Link></li>
                            </ul>
                        </nav>

                    </div>
                </div>

            </div>
        </div>
        )
    }
}

export default Head