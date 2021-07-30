import React from "react";
import {useHistory} from 'react-router-dom'

function Check(props) {
  const { label, setData, value, id, validate, willValidation } = props;
  const history = useHistory()
  const setValue = (val) => {
    if (val) {
      setData({ [validate]: false, [id]: val });
    } else {
      setData({ [validate]: true, [id]: val });
    }
  };

  const goTerms = () => {
    history.push('/termsandcondition')
  }

  return (
    <div className="checkbox">
      {/* <div className="checkbox"> */}
      <div>
        <input
          type="checkbox"
          checked={value}
          className={`input_checkbox ${willValidation ? `error` : ``}`}
          onChange={(e) => setValue(e.target.checked)}
        ></input>
      </div>
      <div className="checkbox_description">
        <p className={`form-check-label ${willValidation ? `error-text` : ``}`}>
          By clicking the submit button below, I hereby agree to and accept the
          following terms and conditions. Visit <a style={{textDecoration:'underline', fontFamily:'AvenirNext Medium', cursor:'pointer'}} onClick={goTerms}>{` Terms and Conditions`}</a> page if
          needed.
        </p>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Check;
