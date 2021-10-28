import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {Link, navigate} from "gatsby";
import * as styles from "../../../styles/layout-style/header.module.css";

const NavWrapper = styled.div`
 display: flex;
 background: #2b2b2b;
 width: 100%;
 justify-content: space-between;
 align-items: center;
 min-height: 45px;
 position: fixed;
 z-index: 2;
 top: 0;
 left: 0;
`;

const Holder = styled.div`
 min-height: 53px;
`;

const SideBarWrapper = styled.div`
 height: ${({sideBarStatus}) => (sideBarStatus ? "100%" : "0")};
 width: 100%;
 background: white;
 transition: 400ms;
 background: white;
 position: fixed;
 z-index: 999999999999;
 top: 45.4px;
 overflow: hidden;
 left: 0;
`;
const LinkContainer = styled.div`
 padding: 8px 3px 0 3px;
 height: 93%;
 width: 100%;
 overflow: scroll;
`;

const SideBarElement = styled.div`
 transition: 200ms;
 display: flex;
 padding: 10px;
 justify-content: space-between;
 background: ${({selected}) => (selected ? "#2b2b2b" : "none")};
 color: ${({selected}) => (selected ? "white" : "#2b2b2b")};
 font-weight: 600;
 font-size: 13px;
`;

const SideBarMenuIconWrapper = styled.div`
 display: flex;
 align-items: center;
 font-size: 25px;
 justify-content: center;
 flex: 0.5;
 background: #2b2b2b;
 max-width: 50px;
`;

const ItemProfile = styled.div`
 display: flex;
 flex: 0.6;
 max-width: 120px;
 position: relative;
 background-color: #f7f7f7;
`;

const InnerGeneralWrapper = styled.div`
 width: 100%;
 margin-bottom: 10px;
`;
//-------------------------

const SubLinks = styled.ul`
 height: ${({selected, factor}) => (selected ? factor * 38 + "px" : "0")};
 transition: 300ms;
 background: #2b2b2b;
 margin-botttom: 5px;
 overflow: hidden;
 margin: 0;
 padding: 0;
`;

const SubLinkItem = styled.li`
 &:hover a {
  background: #fec618;
 }
`;
const IconDropDown = styled.span``;
//-----------------------

const InnerItemText = styled.span`
 font-size: 15px;
 margin-right: 4px;
 text-align: center;
 text-transform: capitalize;
`;

const ResponsiveNav = ({subMenu}) => {
 const [sideBarStatus, setSideBarStatus] = useState(false);
 if (typeof window != "undefined") {
  if (sideBarStatus) document.body.style.overflowY = "hidden";
  else document.body.style.overflowY = "scroll";
 }

 return (
  <div className={styles.ResponsiveNav}>
   <Holder />

   <NavWrapper>
    <SideBarMenuIconWrapper
     onClick={() => setSideBarStatus(prevState => !prevState)}
    >
     <i style={{color: "#FEC618"}} className='fas fa-bars'></i>
    </SideBarMenuIconWrapper>

    <img
     onClick={() => {
      navigate("/");
     }}
     src='/richmond_logo.jpg'
     style={{
      width: "95px",
     }}
    ></img>
    <div
     className={styles.contact_buttons_item}
     style={{padding: 0, marginRight: 8}}
    >
     <Link
      to='/contact-us'
      className={styles.linkHref}
      style={{color: "#464660", padding: "7px 9px"}}
     >
      <span style={{marginRight: 6, fontSize: 11}}>Contact Us</span>
      <i class='fas fa-paper-plane'></i>
     </Link>
    </div>
   </NavWrapper>

   <SideBar
    sideBarStatus={sideBarStatus}
    subMenu={subMenu}
    setSideBarStatus={setSideBarStatus}
   />
  </div>
 );
};

const SideBar = ({sideBarStatus, subMenu, setSideBarStatus}) => {
 const [subLinks, setSubLinks] = useState([]);

 const onClickSubLink = index => {
  subLinks.includes(index)
   ? setSubLinks(prevState => prevState.filter(item => item !== index))
   : setSubLinks(prevState => prevState.concat(index));
 };

 useEffect(() => {
  if (!sideBarStatus) setSubLinks([]); //here we rest the array , when sideBar is closed
 }, [sideBarStatus]);

 return (
  <SideBarWrapper sideBarStatus={sideBarStatus}>
   <LinkContainer>
    {subMenu.map((item, index) => {
     return (
      <InnerGeneralWrapper key={index}>
       <SideBarElement
        selected={subLinks.includes(index)}
        onClick={() => onClickSubLink(index)}
        style={{padding: item.props ? "10px" : "0px"}}
       >
        {item.props ? (
         <span>{item.type}</span>
        ) : (
         <Link
          onClick={() => {
           setSideBarStatus(false);
          }}
          style={{
           width: "100%",
           height: "100%",
           textDecoration: "none",
           padding: 10,
          }}
          to={item.link}
         >
          {item.type}
         </Link>
        )}

        {item.props && (
         <IconDropDown selected={subLinks.includes(index)}>
          {" "}
          <i
           style={{
            transform: subLinks.includes(index)
             ? "rotate(-180deg)"
             : "rotate(0)",
            transition: "300ms",
           }}
           className='fas fa-caret-down'
          ></i>{" "}
         </IconDropDown>
        )}
       </SideBarElement>

       {item.props && (
        <SubLinks
         selected={subLinks.includes(index)}
         factor={item.props.length}
        >
         {item.props.map((subItem, index) => {
          return (
           <SubLinkItem key={index}>
            <Link
             onClick={() => {
              setSideBarStatus(false);
             }}
             to={"/" + subItem.link}
             style={{
              display: "block",
              width: "100%",
              height: "100%",
              color: "white",
              padding: "7px  11px",
              textDecoration: "none",
             }}
            >
             {subItem.title}
            </Link>
           </SubLinkItem>
          );
         })}
        </SubLinks>
       )}
      </InnerGeneralWrapper>
     );
    })}
   </LinkContainer>
  </SideBarWrapper>
 );
};

export default ResponsiveNav;
