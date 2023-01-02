import React,{memo} from "react";

const CustomLabel=({ name ,number}) => {
  return (
    <>
      {console.log("CustomLabel component render")}
      <label>
        <b>{name}</b>
        <p>{number}</p>
      </label>
    </>
  );
};

export default memo(CustomLabel);