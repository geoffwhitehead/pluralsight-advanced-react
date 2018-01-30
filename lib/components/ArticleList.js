import React from 'react';
import Article from './Article';
const ArticleList = ({articles, authors}) => {
  console.log(articles);
  return (
    <div>
      {Object.values(articles).map((article) => (
        <Article
          key={article.id}
          article={article}
          author={authors[article.authorId]}
        />
      ))}
    </div>
  );
};

export default ArticleList;