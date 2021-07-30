import React, { useState } from "react";

function BtnGroup(props) {
  const { setData, id, validate, willValidation, val, valueSeond } = props;
  const [value, setValue] = useState({
    firstHome: val,
    secondHome:valueSeond
  })

  
  const toggleActive = () => {
    setValue({ ...value, firstHome: true, secondHome:false })
    setData({ [validate]: false, [id]: true,[id+`Second`]: false });    
  }

  const toggleActiveSecond = () => {
    setValue({ ...value, firstHome: false, secondHome:true })
    setData({ [validate]: false, [id+`Second`]: true, [id]: false });    
  }


  return (
    <div className="btngroup">
      <label>
        {`Type of operation* `}{" "}
        {willValidation && (
          <label className="error">{`(Please complete this field)`}</label>
        )}
      </label>
      <div className="inline">
        <button type="button" className={`btn btn-outline-danger ${value.firstHome ? `active`:``}`} onClick={() => toggleActive()}>New home</button>
        <button type="button" className={`btn btn-outline-danger ml-5 second-btn ${value.secondHome ? `active`:``}`} onClick={() => toggleActiveSecond()}>Secondary home</button>
      </div>
    </div>
  );
}

export default BtnGroup;