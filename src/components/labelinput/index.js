import React from "react";
import Dinero from "dinero.js";

function LabelInput(props) {
  const {
    label,
    setData,
    value,
    id,
    validate,
    willValidation,
    placeHolder,
    type,
  } = props;


  const setValue = (val) => {
    // console.log(val);
    if (type === "numberic") {
      const re = /^[0-9.,\b]+$/;
      let value = val
          .replace(",", "")
          .replace(",", "")
          .replace(",", "")
          .replace(",", "")
          .replace(".", "");

      if (re.test(val)) {        
        setData({ [validate]: false, [id]: parseInt(value) });
      } else if (!parseInt(value)) {
        setData({ [validate]: false, [id]: 0 });
      }
    } else if (type === "credit") {
      const re = /^[0-9\b]+$/;
      if (re.test(val)&&val.length<=3) {        
        setData({ [validate]: false, [id]: parseInt(val) });
      } else if (!val) {
        setData({ [validate]: false, [id]: "" });
      }
    } else {
      if (val) {
        setData({ [validate]: false, [id]: val });
      } else {
        setData({ [validate]: true, [id]: val });
      }
    }
  };

  return (
    <div className="label_input">
      <label>
        {`${label} `}{" "}
        {willValidation && (
          <label className="error">{`(Please complete this field)`}</label>
        )}
      </label>
      {type === "numberic" || type === "password" ? (
        type === "numberic" ? (
          <input
          value={value?Dinero({ amount: parseInt(value) }).toFormat("0,0.00"):''}
          placeholder={placeHolder}
          className={`input-box form-control`}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        ):(
          <input
            value={value}
            placeholder={placeHolder}
            className={`input-box form-control`}
            onChange={(e) => setValue(e.target.value)}
            type="password"
          ></input>
        )
        
      ) : (
        <input
          value={value}
          placeholder={placeHolder}
          className={`input-box form-control`}
          onChange={(e) => setValue(e.target.value)}
        ></input>
      )}
    </div>
  );
}

export default LabelInput;
