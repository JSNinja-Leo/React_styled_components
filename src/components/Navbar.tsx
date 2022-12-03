import React, { FC } from "react";
import styled from "styled-components";
import Notifications from "../assets/icons/Notification.png";
import Avatar from "../assets/images/Avatar.png";

const NavbarMenu: FC = () => {
  return (
    <>
      <Navbar>
        <Container>
          <AddButton>+ Add new</AddButton>
          <DropListField>
            <DropList name="Kanban" id="Kanban">
              <option value="volvo">Kanban</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
            </DropList>
          </DropListField>
          <DropListField>
            <DropList>
            <option value="saab">Filter</option>
              <option value="mercedes">Mercedes</option>
            </DropList>
          </DropListField>
          <SearchInput placeholder="Search..." />
          <Notification src={Notifications} />
          <UserPhoto src={Avatar}/>
        </Container>
      </Navbar>
    </>
  );
};

const Navbar = styled.nav`
  background-color: #FFFFFF;
  border-bottom: 1px solid #F3F3F3;
`;

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 15px 20px;
  display: flex;
  align-items: center;
`;

const AddButton = styled.button`
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  margin-right: 10px;
  width: 119px;
  height: 40px;
  background: #0094ff;
  border-radius: 50px;
  border: none;
  color: #ffffff;
`;

const DropListField = styled.div`
  padding: 0px 20px 0px 20px;
  margin-right: 10px;
  background: #F5F8FA;
  border-radius: 50px;
  border: none;
`;

const DropList = styled.select`
  border-radius: 50px;
  background: #F5F8FA;
  height: 40px;
  border: none;
`;

const SearchInput = styled.input`
  width: 160px;
  height: 40px;
  margin-left: auto;
  background: #F5F8FA;
  border-radius: 50px;
  border: none;
  padding-left: 14px;
`;

const Notification = styled.img`
  margin-left: 15px;
`
const UserPhoto = styled.img`
  margin-left: 10px;
`

export default NavbarMenu;
