import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const Speectotext = () => {
  const [textvalue, setTextvalue] = useState("");
  const { speak } = useSpeechSynthesis();
  return (
    <div className="container text-center ">
      <h2>Text to Speech </h2>
      <div>
        <textarea
          value={textvalue}
          onChange={(e) => setTextvalue(e.target.value)}
          rows="5"
          placeholder="Enter your text to listen"
        ></textarea>
      </div>
      <div className="submit_text my-4">
        <button onClick={() => speak({ text: textvalue })}>Speech</button>
      </div>
    </div>
  );
};
export default Speectotext;
