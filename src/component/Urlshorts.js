import { React, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";

function Urlshorts() {
  const [shortenedLink, setShortenedLink] = useState("");
  const [userInput, setUserInput] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${userInput}`
      );
      setShortenedLink(response.data.result.full_short_link);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className=" container h-screen flex justify-center items-center">
      <div className=" text-center">
        <h1 className=" text-2xl font-medium text-blue-500 mb-4">
          Our <span className=" text-yellow-400">URL Shortener</span>
        </h1>
        <div className="container col-5">
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Enter link to be shortened"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          />
          <button
            className=" btn btn-warning text-white px-8 py-3 ml-4 rounded-md"
            onClick={() => {
              fetchData();
            }}
          >
            Submit URL
          </button>
          <div className=" mt-3">
            {shortenedLink}
            <CopyToClipboard text={shortenedLink}>
              <button className="btn btn-primary">
                Copy URL 
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Urlshorts;
