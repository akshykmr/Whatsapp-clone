
/*import React, {useState} from "react";*/
import styled from "styled-components";
import ContactListComponents from "./components/ContactListComponents";
import ChatComponents from "./components/ChatComponents";
import { useState } from "react";
const Container = styled.div`
display: flex;
flex-direction: row;
height: 100vh;
width:100%;
background-color:blue;
  `;
  const Placeholder =styled.div`
  flex:3;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-item:center;
  color:rgba(0,0,0,0.45);
  `;
  const ChatPlaceholder =styled.div`
  width:240px;
  height: 240px;
  border-radius:5%;
  object-fit:contain;
  `;
function App() {
  const [selectedChat, setChat] = useState( )
  return (
  <Container >
  <ContactListComponents/>
  {selectedChat? <contactComponent />:
  <Placeholder>
    <ChatPlaceholder src ="D:\chatapp\chat-app\public\image\welcome-placeholder.jpeg"
  <Placeholder/>}
 </Container>

  );
}

export default App;

