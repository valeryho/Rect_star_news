import React from 'react'

class Home extends React.Component
{
    render(){
        return(
            
            
                        <div className="block1">
                            <div className="newsTitle">{this.props.title}</div>
                            <img src={this.props.urlToImage}className="newsImg" alt="альтернативный текст"/>
                            <div className="newsArticle">{this.props.description}</div>
                            <div className="newsAuthor">{this.props.author}</div>
                        </div>
         
        )
    }
}
export default Home