import React from 'react'
import Article from '../articles/articleshor'
class Home extends React.Component
{
    render(){
        console.log(this.props.News)
            let Articles
            if (this.props.News)
            Articles=this.props.News.map((item)=>{
                 return (<Article author={item.author} title={item.title} description={item.description} urlToImage={item.urlToImage}/>)
                // console.log(item.description);
            })
        return(
            <main>
                 <div className="container mainBody">
                    <div className="row blocks">
             {Articles}
                    </div>
                </div>
            </main>
        )
    }
}
export default Home