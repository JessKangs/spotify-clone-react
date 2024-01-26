import { Reset } from "styled-reset";
import styled from "styled-components";
import { Sidebar } from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Content>
      <Reset />
      <Sidebar />
      <Footer />
    </Content>
  );
}

const Content = styled.div`
  color: white;
  font-family: "DM Sans", sans-serif;
`

export default App;
