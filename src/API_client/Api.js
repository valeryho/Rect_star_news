// import React from 'react';
// import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import ReactDOM from 'react-dom';

class APIService{

      url = "https://newsapi.org/v2/top-headlines?country=";
      country = "ua";
      api_key = "&apiKey=18f1c87e444741aca30db0a569bba999";
      async Request(country) {
          const res = await fetch(`${this.url}${country}${this.api_key}`)
          return res.json()
      }
        async getNews(country) {
            const news = await this.Request(country)
            return news
        }
      
}
export default APIService 