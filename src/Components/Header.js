import React from "react";

export default function Header(props) {
  const a = props.darkMode ? "dark" : "white";
  const b = "nav--logo_text";
  const ab = `${b}${a}`;

  return (
    <nav className={props.darkMode ? "dark" : "white"}>
      <div className="header-logotxt">
        <img
          className="nav--logo_icon"
          src={
            props.darkMode
              ? "https://img.icons8.com/cotton/256/news--v1.png"
              : "https://img.icons8.com/ios-filled/256/news.png"
          }
          alt="News-Icon"
        />
        <h3 className={ab}>Top News</h3>
      </div>

      <div className="formdata">
        <form>
          <label htmlFor="selectedNews"></label>
          <br />
          <select
            id="selectedNews"
            value={props.selectedNews}
            onChange={props.handleChange}
            name="selectedNews"
          >
            <option value="everything?q=apple&from=2024-04-14&to=2024-04-14&sortBy=popularity&">
              Apple
            </option>
            <option value="everything?q=tesla&from=2024-03-15&sortBy=publishedAt&">
              Tesla
            </option>
            <option value="top-headlines?country=us&category=business&">
              Business in USA
            </option>
            <option value="top-headlines?sources=techcrunch&">
              Tech Crunch
            </option>
            <option value="everything?domains=wsj.com&">Everything WSJ</option>
          </select>
        </form>
      </div>

      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
