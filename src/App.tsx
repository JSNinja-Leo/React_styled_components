import React from 'react'

import Sidebar from './components/Sidebar'
import Tools from './components/Tools'
import styled from "styled-components";
import { GlobalStyle } from './styles/global';
import NavbarMenu from './components/Navbar';
import Schedule from './components/Schedule';

const App: React.FunctionComponent = () => {
  return (
    <>
    <GlobalStyle />
        <Container>
          <Sidebar />
          <Tools />
          <Box>
            <NavbarMenu />
            <Schedule />
          </Box>
        </Container>
    </>
  )
}

const Box = styled.div`
  height: 100vh;
`
const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
`

export default App
