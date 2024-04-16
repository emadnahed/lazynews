import React, { useEffect } from "react";

import Card from "./Components/Card";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [NewsData, setNewsData] = React.useState([]);
  const [darkMode, setDarkMode] = React.useState(false);
  const [formData, setFormData] = React.useState({
    selectedNews:
      "everything?q=apple&from=2024-04-14&to=2024-04-14&sortBy=popularity&",
  });
  const mapKey = uuidv4();  
  

  const APIurl = `https://newsapi.org/v2/${formData.selectedNews}apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

  function handleChange(event) {
    const { value } = event.target;
    setFormData((prevFormData) => {
      return {
        selectedNews: value,
      };
    });
  }

  // side effects
  useEffect(
    function () {
      setNewsData([]);
      fetch(APIurl)
        .then((res) => res.json())
        .then((data) => setNewsData(data.articles));
    },
    [formData.selectedNews, APIurl]
  );

  console.log(formData.selectedNews, "Is form Data");

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  let currentMode = darkMode ? "dark" : "white";
  let combination = `all ${currentMode}`;

  const CardElements = NewsData.map((news) => {
    return (
      <Card
        className="card"
        key={news.source.id && mapKey}
        currentMode={currentMode}
        Author={news.author}
        NewsTitle={news.title}
        NewsContent={news.description}
        url={news.url}
        NewsDate={news.publishedAt}
        NewsImage={news.urlToImage}
      />
    );
  });

  return (
    <div className={combination}>
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        currentMode={currentMode}
        handleChange={handleChange}
        selectedNews={formData.selectedNews}
      />

      <main className="dea">
        {NewsData.length < 1 ? "Loading..." : CardElements}
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}
