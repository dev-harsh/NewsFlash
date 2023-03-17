import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class NewsSection extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  async componentDidMount()
  {
    let url="https://newsapi.org/v2/top-headlines?country=in&from=2023-03-16&to=2023-03-16&sortBy=popularity&apiKey=0a7d9c97dfe24b69b7f57e13359a63d9";
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState(
      {articles:parsedData.articles}
    )
  }

  render() {
    return (
      <div className="container my-4">
        <h2>Latest Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem
                key={element.url}
                title={element.title}
                description={element.description}
                image={element.urlToImage}
                newsurl={element.url}
              />
            </div>;
          })}
        </div>
      </div>
    );
  }
}

export default NewsSection;
