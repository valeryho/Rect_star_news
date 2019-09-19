import React from 'react'
import { BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import Home from '../home/home';
class Footer extends React.Component
{
    render(){
        return(
            <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 line"></div>
                        </div>
                        <div className="row footer-top">
                            <div className="col-3 social">
                                Follow us:
                                <a href="#"><i className="fa fa-facebook-f"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                            </div>
                            <div className="col-6 contact">
                                Contact us:
                                <div><i className="fas fa-phone-square"></i><a href="tel:+1(044)147-0235">
                                        +1-(044)-147-0235 </a></div>
                                <div><i className="far fa-envelope"></i><a href="mailto:info@starnews.com">
                                        info@starnews.com</a></div>
                            </div>
                            <div className="col-3 login">
                                <span><Link to="/Login">Login</Link></span>
                                <span><Link to="/Login"> Sign in </Link></span >
                                <span><Link to="/Login">Forgot password?</Link></span>
                            </div>
                        </div>
                    </div>
            </footer>
        )
    }
}
export default Footer