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

  console.log(data);
  return (
    <div class="container-fluid">
      <div class="row">
      {data.map((d) => (
        <div class="card col-md-3">
          <img src={d.urlToImage} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{d.title}</h5>
            <p class="card-text">{d.description}</p>
            <a href={d.url} class="btn btn-primary">
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
