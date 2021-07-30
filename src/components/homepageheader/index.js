import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/LOGO-MORTGAGE-CALCULATOR.svg";
import { ReactComponent as Menu } from "../../assets/images/MENU.svg";
import { MenuIconBtn } from './style';
import { useHistory } from "react-router-dom";

function Header({toggleMenu}) {
  const location = useLocation();
  const history = useHistory();
  const [value, setValue] = useState({
    show: false
  })
  const onClicked = () => {
    history.push("/homepage");
  }
  window.addEventListener('scroll', (event) => {
    var x = document.getElementsByClassName('homepageheader');
    if(x[0]){
      if(window.scrollY > 150){
        x[0].style.backgroundColor = "rgba(0, 0, 0, 0.45)";
      }
      else if(window.scrollY < 150){
        x[0].style.backgroundColor = "rgba(0, 0, 0, 0)";
      }
    }
  });
  React.useEffect(() => {
    var x = document.getElementsByClassName('homepageheader');
    if(x[0]){
      x[0].style.boxShadow = "none";
      x[0].style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  },[]);
  return (
    <header className="homepageheader">
        <div className="BtnLogo">
          <Logo onClick={onClicked}/>
        </div>
        <MenuIconBtn className="menuIconSmBtn" onClick={()=>toggleMenu({drawMenu:true})}>
          <Menu />
        </MenuIconBtn>
      {/* </div> */}
    </header>
  );
}

export default Header;
