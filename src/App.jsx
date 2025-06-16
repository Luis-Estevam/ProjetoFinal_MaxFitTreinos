
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import Register from "./Register";
import Home from "./Home";

const GlobalStyle = createGlobalStyle`
body{
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url(https://invexo.com.br/blog/wp-content/uploads/2022/12/smartfit-academias-na-barra-da-tijuca-rio-de-janeiro-1024x576.jpg.webp);
    background-size: cover;
    background-position: center;
    filter: blur(8px);
    z-index: -1;
  }
}    

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
`;

const Header = styled.header`
  background:rgb(38, 43, 53);
  color: white;
  text-align: center;

  @media (min-width: 408px){
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 16px 24px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header>
        <h1>MaxFit Treinos</h1>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/register">Registrar</Link>
        </Nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;

