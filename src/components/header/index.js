import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/LOGO-MORTGAGE-CALCULATOR - black.svg";
import { ReactComponent as Menu } from "../../assets/images/MENU - Black.svg";
import { useHistory } from "react-router-dom";
import { MenuIconBtn } from './style';

function Header({clsName, toggleMenu}) {
  const location = useLocation();
  const cls = clsName;
  const history = useHistory();
  const [value, setValue] = useState({
    show: false
  })

  const onClicked = () => {
    history.push("/homepage");
  }

  React.useEffect(() => {
    if(window.innerWidth<=900){
      setValue({...value, show:true})
    } else {
      setValue({...value, show:true})
    }
    function handleResize() {
      if(window.innerWidth<=900){
        setValue({...value, show:true})
      } else {
        setValue({...value, show:true})
      }
    }

    window.addEventListener("resize", handleResize);
  },[]);
  return (
    <header className={ cls }>
      <div className="BtnLogo">
        <Logo onClick={onClicked}/> 
      </div>
      {(location.pathname==='/login' || location.pathname==='/termsandcondition' || location.pathname==='/privacy') && (
        <MenuIconBtn className="menuIconSmBtn"  onClick={()=>toggleMenu({drawMenu:true})}>
          <Menu />
        </MenuIconBtn>
      )}
    </header>
  );
}

export default Header;
