import { database } from "firebase";
import React from "react";

function Select(props) {
  const { label, setData, value, id, validate, willValidation, data } = props;

  const setValue = (val) => {
    if (val !== "0") {
      // console.log(val);
      setData({ [validate]: false, [id]: val });
    } else {
      // console.log(val)
      setData({ [validate]: true, [id]: val });
    }
  };

  return (
    <div className="select">
      <label>{`${label} ` } {willValidation&&<label className="error">{`(Please complete this field)`}</label>}</label> 
      <div className="select-box">
      <select
        className={`form-control`}
        id="sel1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option selected value={0}>
          {props.option}
        </option>{" "}
        {data.map((item, index)=>(
          <option value={item.item} key={index}> {item.item}</option>      
        ))}
        
      </select>
      </div>
    </div>
    
  );
}

export default Select;
