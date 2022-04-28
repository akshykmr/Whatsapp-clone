import styled from "styled-components";
import ContactListComponents from "./components/ContactListComponents";
import ChatComponents from "./components/ChatComponents";
const Container = styled.div`
display: flex;
flex-direction: row;
height: 100vh;
width:100%;
background-color:blue;
  `
function App() {
  return (
  <Container >
  <ContactListComponents/>
  <ChatComponents/>
 </Container>

  );
}

export default App;

