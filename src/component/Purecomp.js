import React, { useState } from "react";
import CustomLabel from "./CustomeLabel";

function Purecomp() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
        <CustomLabel name="Simple Counter app" number={9658741230}/>
        <p>Counter is : {counter} </p>
        <button onClick={() => setCounter(counter + 1)}>Click</button>
      </div>
  )
}

export default Purecomp