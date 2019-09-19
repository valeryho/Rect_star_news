import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/scss/bootstrap.scss'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './index.css';
import Api_service from './API_client/Api'
import Head from './components/head/head'
import Home from './components/home/home'
import Footer from './components/footer/footer'
class App extends React.Component
{
    API = new Api_service;
    state = {
        NewsList:''
    }
    constructor(){
        super();
        this.updateNews();
    }
    updateNews(){
        this.API.getNews('ua')
            .then((news) => {
                
                this.setState({
                    NewsList: news
                });
            })
    }
    render(){
        console.log(this.state.NewsList.articles);
        return(

            <div className="body">
            <Router>
                <Head/>
                <Switch>
                    < Route exact path = "/Home" render={()=><Home  News={this.state.NewsList.articles} />} />
                </Switch>
                <Footer/>
            </Router>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));