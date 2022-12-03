import React, { FC } from "react";
import styled from "styled-components";
import BordioLogo from "../assets/images/bordio-logo.svg";
import UserImg from "../assets/images/Avatar.png";
import { SidebarData } from "./SidebarData";

const Sidebar: FC = () => {
  const [subNavArray, setSubNavArray] = React.useState<Boolean[]>([false, false, false]);

  React.useEffect(()=>{
    let showNavArray = [];
    for(let i = 0; i < SidebarData.length; i++){
      showNavArray.push(false);
    }
    setSubNavArray(showNavArray);
  },[]);

  const showSubnav = (turn: number) => {
    let otherArray: Boolean[] = [];
    let tempArray = subNavArray;
    tempArray?.forEach((value, index)=>{
        if(index === turn) {
          otherArray.push(!value);
        } else otherArray.push(value);
    })
    setSubNavArray(otherArray);
  }
  
  return (
    <>
      <SidebarMenu>
        <Container>
          <Logo src={BordioLogo} />
          <SearchInput placeholder="Search..."/>
          <AvatarField>
            <Avatar src={UserImg} />
            <AvatarFieldText>My workspace</AvatarFieldText>
          </AvatarField>
            {SidebarData.map((item, index) => {
              return (
                <MenuItems key={index}>
                  <MenuItemLinks onClick={(e)=>showSubnav(index)}>
                  <div style={{marginRight: "13px"}}>
                    {subNavArray[index]? item.iconOpened : item.iconClosed}
                  </div>
                  <MenuLabel>{item.title}</MenuLabel>
                  </MenuItemLinks>
                  <DropdownField>
                    {subNavArray[index] && item.subNav?.map((item, index) => {
                      return (
                          <DropdownLink href={item.path} key={index}><MenuLabel style={{color: 'grey'}}>{item.title}</MenuLabel></DropdownLink>
                      )
                    })}
                  </DropdownField>
                </MenuItems>
              );
          })}
        </Container>
      </SidebarMenu>
    </>
    );
  };
  

const SidebarMenu = styled.div`
  height: 100vh;
  background-color: #0f1d40;
  top: 0;
  left: 0;
  float: left;
  transition: 0.6s;
`;

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  display: block;
`;

const Logo = styled.img`
  display: block;
  margin-top: 26px;
  margin-left: 16px;
`;

const SearchInput = styled.input`
  width: 177px;
  height: 32px;
  margin: 20px 16px 12px 16px;
  background: #2D4071;
  background-image: url(../assets/images/Search.png) no-repeat 7px;
  border-radius: 4px;
  border: none;
  padding-left: 10px;
`;

const AvatarField = styled.div`
  background: #2D4071;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px 16px;
  margin-top: 5px;
`;

const Avatar = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 5px;
`;

const AvatarFieldText = styled.p`
  color: white;
`;

const MenuItems = styled.li`
  list-style: none;
  display: block;
  align-items: center;
  margin: 5px 16px;
`;

const MenuItemLinks = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  line-height: 16px;
  text-decoration: none;
  color: #ffffff;
  border-radius: 3px;

  &:hover {
    background-color: #2d4071;
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;

const MenuLabel = styled.li`
  font-size: 14px;
  padding: 10px 0px;
`;

const DropdownLink = styled.a`
  color: white;
  text-decoration-line: none;
  margin-bottom: 20px;
`;

const DropdownField = styled.a`
  display: block;
`;

export default Sidebar;
