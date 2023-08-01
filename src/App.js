import { useEffect, useState } from "react";
import "./App.css";
import { quotes } from "./quote";

function App() {
  const [rnNum, setRnNum] = useState(Math.floor(Math.random() * 4746));
  const getRandomQuote = () => {
    setRnNum(Math.floor(Math.random() * 4746));
  };
  return (
    <div
      className="App"
      class="flex items-center font-mono justify-center p-10 bg-base h-screen"
    >
      <div id="quote-box" class="p-5 rounded-md bg-text max-w-lg md:min-w-lg">
        <h2 class="text-2xl text-center font-bold mb-5">Quote of the day</h2>{" "}
        <p id="text" class="text-center mb-3">
          <i class="nf nf-fa-quote_left"></i> {" " + quotes[rnNum].Quote + " "}
          <i class="nf nf-fa-quote_right"> </i>{" "}
        </p>
        <div class="flex justify-end mb-3">
          <span id="author" class="bg-rose right-0 ">
            - {quotes[rnNum].Author}
          </span>
        </div>
        <hr />
        <div id="buttons" class="flex justify-between mt-3">
          <button
            id="new-quote"
            onClick={getRandomQuote}
            class="bg-iris px-3 py-1 rounded-xl"
          >
            New Quote
          </button>

          <a
            id="tweet-quote"
            href={
              "https://twitter.com/intent/tweet?text=" + quotes[rnNum].Quote
            }
            class="bg-[#1DA1F2] rounded-xl px-3 py-1 text-text"
            target="_blank"
          >
            <i class="nf nf-cod-twitter"></i> Tweet
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
