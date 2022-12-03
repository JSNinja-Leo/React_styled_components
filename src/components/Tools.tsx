import React, { FC } from "react";
import styled from "styled-components";
import { ToolsData } from "./ToolsData";

const Tools: FC = () => {
  return (
    <>
      <SidebarMenu>
        <Container>
          <Header>Tools</Header>
          {ToolsData.map((item, index) => {
            return (
              <MenuItems key={index}>
                <MenuItemLinks href={item.path}>
                    <img src={item.icon} style={item.style} alt="icon"/>
                  <span style={{ marginLeft: "16px" }}>{item.title}</span>
                </MenuItemLinks>
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
  background-color: #F5F8FA;
  top: 0;
  left: 0;
  float: left;
  transition: 0.6s;
`;

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 36px;
  padding-left: 14px;
`;

const Header = styled.div`
font-size: 18px;
line-height: 21px;
margin-top: 24px;
margin-bottom: 30px;
padding-left: 2px;
`;

const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  height: 34px;
`;

const MenuItemLinks = styled.a`
  display: flex;
  align-items: center;
  font-weight: 400;
  line-height: 16px;
  text-decoration: none;
  color: #222222;

  &:hover {
    color: #0094FF;
  }
`;

export default Tools;
