
import React, {useState} from "react";
import styled from "styled-components";
import ContactListComponents from "./components/ContactListComponents";
import ChatComponents from "./components/ChatComponents";
/*import { useState } from "react";*/
const Container = styled.div`
display: flex;
flex-direction: row;
height: 100vh;
width:100%;
background-color:white;
  `;
  const Placeholder = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 10px;
  color: rgba(0, 0, 0, 0.45);
  align-item:center;
  font-size:14px;
  color:rgba(0,0,0,0.45);
  span {
    font-size: 32px;
    color: #525252;
  }
  `;
  const ChatPlaceholder =styled.img`
  width:240px;
  height: 240px;
  border-radius:50%;
  object-fit:contain;
  `;
function App(props) {
  const {userInfo}=props
  const [selectedChat, setChat] = useState();
  const [refreshContactList, toggleRefreshContactList] = useState(false);
  return (
  <Container >
  <ContactListComponents 
  setChat ={setChat} userInfo={userInfo}  refreshContactList={refreshContactList}/>
  {selectedChat? (<ChatComponents selectedChat={selectedChat} userInfo={userInfo} refreshContactList={() =>
            toggleRefreshContactList(!refreshContactList)
          }/>
  ):(
  <Placeholder>
    <ChatPlaceholder src ="/image\welcome-placeholder.jpeg"/>
    <span>Keep your phone connected</span>
          WhatsApp connects to your phone to sync messages.
  </Placeholder>
  )}
 </Container>

  );
}

export default App;

