import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { ReactComponent as Logo } from "../../assets/images/MCUS-LOGO.svg";
import { ReactComponent as CloseBtn } from "../../assets/images/closebtn.svg";
import { SiderBarHeader, SiderBarBody } from "./style";
import { ReactComponent as AvatarFirst } from "../../assets/images/MORTGAGE.svg";
import { ReactComponent as AvatarSecond } from "../../assets/images/REFINANCING.svg";
import { CircleIcon } from "./style";

const useStyles = makeStyles({
  main: {
    zIndex: 6000,
  },
  list: {
    width: "449px",

    "@media (max-width: 650px)": {
      width: window.innerWidth,
    },
  },
  fullList: {
    width: "auto",
  },
});

export default function SwipeableTemporaryDrawer({ value, toggleMenu }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: value,
  });

  useEffect(() => {
    setState({ ...state, right: value });
  }, [value]);

  const toggleDrawer = (anchor, open) => (event) => {
    var ele = document.getElementsByClassName("menuIconSmBtn");
    if (ele.length) {
      ele[0].style.opacity = 1;
    }
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    toggleMenu({ drawMenu: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <SiderBarHeader>
        {/* <Logo className="logoImg" /> */}
        <CloseBtn className="closeBtn" onClick={toggleDrawer(anchor, false)} />
      </SiderBarHeader>
      <SiderBarBody>
        <div
          className="block"
          id="firstblock"
          onClick={toggleDrawer(anchor, false)}
        >
          <CircleIcon>
            <AvatarFirst style={{ width: "25px", height: "25px" }} />
          </CircleIcon>
          <div className="title">Online Mortgage Experience.</div>
          <div className="content">
            Get the best proposal for your mortgage through Mortgage Calculator,
            100% online. You will receive your proposal through the best partner
            that suits your needs.
          </div>
        </div>
        <div
          className="block"
          id="secondblock"
          onClick={toggleDrawer(anchor, false)}
        >
          <CircleIcon>
            <AvatarSecond style={{ width: "25px", height: "25px" }} />
          </CircleIcon>
          <div className="title">Online Refinancing Experience.</div>
          <div className="content">
            Get the best proposal for refinancing through Mortgage Calculator,
            100% online. You will receive your proposal through the best partner
            that suits your needs.
          </div>
        </div>
      </SiderBarBody>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
