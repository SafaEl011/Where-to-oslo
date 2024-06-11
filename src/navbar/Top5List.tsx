import React, { useState } from "react";

const articles = [
  { id: 1, title: "Article 1" },
  { id: 2, title: "Article 2" },
  { id: 3, title: "Article 3" },
];

export const Top5List = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleSelectArticle = (article: any) => {
    setSelectedArticle(article);
    setIsOverlayVisible(false);
  };

  const handleShowOverlay = () => {
    setIsOverlayVisible(true);
  };

  const ArticleOverlay = () => {
    return (
      <div className="article-overlay">
        <ul>
          {articles.map((article) => (
            <li key={article.id} onClick={() => handleSelectArticle(article)}>
              {article.title}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <div className="top5IconContainer"  onClick={handleShowOverlay}>
        <img
          src="/WhereToOslo/images/top5Pin.svg"
          alt="Top 5 Icon"
          className="Top5Icon"
               />
        {isOverlayVisible && <ArticleOverlay />}
        {selectedArticle && (
          <div>Selected Article: {selectedArticle.title}</div>
        )}
      </div>
    </div>
  );
};
