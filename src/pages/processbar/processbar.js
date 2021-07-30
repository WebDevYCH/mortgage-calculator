import React, { useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";
import {css} from '@emotion/core'
import {useHistory} from 'react-router-dom'
/*
* fill color body background
*/

const fillbodypaint = () => {
  var ele = document.getElementsByTagName('body');
  ele[0].style.backgroundColor = '#F61067';
}
const override = css`
  // display: block;
  border-radius: 5px;
`;
function ProcessBar() {
  fillbodypaint();
  const history = useHistory()

  useEffect(()=>{
    const timer = setTimeout(() => {
      history.push('/homepage')
    }, 10000);
    return () => clearTimeout(timer);
  },[])

  return (    
    <div className='processbarcontainer'>
      <div className="description">
         <p className="success_text">Thanks for submiting your request. Check your email, you’ll get proposal soon.</p>
         <div className="progress">
         <BarLoader
          css={override}
          height="5px"
          width={250}
          color={"#37383C"}
          loading={true}
        />
         </div>
      </div> 
    </div>
  );
}

export default ProcessBar;
