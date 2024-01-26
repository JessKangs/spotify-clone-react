import { Reset } from "styled-reset";
import styled from "styled-components";
import { Sidebar } from "./Sidebar/Sidebar";

function App() {
  return (
    <Content>
      <Reset />
      <Sidebar />
    </Content>
  );
}

const Content = styled.div`
  color: white;
  font-family: "DM Sans", sans-serif;
`

export default App;
