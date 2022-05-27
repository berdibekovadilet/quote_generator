import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Main.scss";

const Main = () => {
  const [quote, setQuote] = useState({
    anime: null,
    quote: null,
    character: null,
  });

  // const fetchQuote = async () => {
  //   return await fetch("https://animechan.vercel.app/api/random").then(
  //     (response) => response.json()
  //   );
  // };

  useEffect(() => {
    axios
      .get("https://animechan.vercel.app/api/random")
      .then((res) => {
        console.log(res);
        setQuote(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main">
      <div className="main_container">
        <div className="anime">{quote.anime}</div>
        <div className="quote">{quote.quote}</div>
        <div className="character">{quote.character}</div>
      </div>
      <button className="btn">Generate New Quote</button>
    </main>
  );
};

export default Main;
