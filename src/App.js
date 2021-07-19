// import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { GlobalStyles } from "./GlobalStyles.js";



function App() {
  return (
    <Router>
      <GlobalStyles/>
        <Header/>
        <Sidebar/>
    </Router>
  );
}

export default App;
