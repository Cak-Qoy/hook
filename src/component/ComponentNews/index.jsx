import React, { useEffect, useState } from "react";

const ComponentNews = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=id&category=general&apiKey=fc25e05f7a8a4c56bbd092ac3354ad19"
    )
      .then((response) => response.json())
      .then((d) => setData(d.articles));

    // setData(berita.articles);
  };

  // console.log(data);
  return (
    <div className="container-fluid">
      <div className="row">
      {data.map((d, index) => (
        <div key={index} className="card col-md-3">
          <img src={d.urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{d.title}</h5>
            <p className="card-text">{d.description}</p>
            <a href={d.url} className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ComponentNews;
