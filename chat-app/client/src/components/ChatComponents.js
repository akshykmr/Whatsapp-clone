import styled from "styled-components";
import React, {useState} from "react";
import Picker from "emoji-picker-react";
import { SearchContainer, SearchInput } from "./ContactListComponents";
import { messagesList } from "../mockData";
import httpManager from "../managers/httpManager";



const Container = styled.div`
display: flex;
flex-direction:column;
height:100%;
flex:3;
background:white;
`;
const ProfileHeader=styled.div`
 display:flex;
 flex-direction: row;
 background:#ededed;
 padding:10px;
 align-items:center;
 gap:10px;

 `;
 const ProfileImage = styled.img`
 width: 38px;
   height: 38px;
   border-radius: 50%;
   margin-left: 12px;
   object-fit: cover;
 `;
 const ChatBox = styled.div`
 display:flex;
 flex-direction:row;
 background:#f0f0f0;
 padding:10px;
 align-items:center;
bottom:0;
 `;
 const EmojiImage = styled.img`
 width:28px;
 heigth:28px;
 opacity:0.4;  
 cursor:pointer;
`;
const MessageContainer=styled.div`
display:flex;
flex-direction:column;
height:100%;
background:#e5ddd6;
overflow-y:auto;
`;
const MessageDiv = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
  margin: 5px 15px;
`;
 const Message=styled.div`
 background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
 max-width:100%;
 color:#303030;
 padding:8px 10px;
 font-size :14px;
 border-radius:5px;
  `;
const ChatComponents = (props) => {
  const {selectedChat,userInfo,refreshContactList} = props;
  const [text, setText] = useState("");
  const [pickerVisible, togglePicker] = useState(false);
  const [messageList, setMessageList] = useState([]);
  const onEmojiClick =(event,emojiObj)=>{
    setText(text + emojiObj.emoji);
    togglePicker(false);
  };

  const onEnterPress = async (event) => {
    let channelId = "";
    if (event.key === "Enter") {
      if (!messageList || !messageList.length) {
        const channelUsers = [
          {
            email: userInfo.email,
            name: userInfo.name,
            profilePic: userInfo.imageUrl,
          },
          {
            email: selectedChat.email,
            name: selectedChat.name,
            profilePic: selectedChat.profilePic,
          },
        ];
        console.log("1234",channelUsers);

   const channelResponse = await httpManager.createChannel({
    channelUsers,
        });
  console.log("1234",channelResponse);

channelId = channelResponse.data.responseData._id;
refreshContactList();
  console.log("1234",channelId);
  
      }

      const messages = [...messageList];
      const msgReqData = {
        text,
        senderEmail: userInfo.email,
        addedOn: new Date().getTime(),
      };
      const messageResponse = await httpManager.sendMessage({
        channelId,
        messages: msgReqData,
      });
      console.log("1234",{
      channelId,
      msgReqData
    });
    messages.push(msgReqData);
    setMessageList(messages);
    setText("");
  }
};
    return (
      < Container>
    <ProfileHeader>
   <ProfileImage src={selectedChat.profilePic}/>     
   
   {selectedChat.name}
    </ProfileHeader>
    <MessageContainer> 
    {messageList?.map((messageData) => (
        <MessageDiv isYours={messageData.senderEmail === 0}>
            <Message isYours={messageData.senderEmail=== 0}>
     {messageData.text}
   </Message> 
   </MessageDiv> 
    ))}    
    </MessageContainer>
    <ChatBox>
   <SearchContainer>
  {pickerVisible && (
   <Picker
              pickerStyle={{ position: "absolute", bottom: "60px" }}
    onEmojiClick={onEmojiClick}
    />
    )}
    <EmojiImage src={"/image/data.svg"} onClick={()=>togglePicker(!pickerVisible)}/>
    <SearchInput
   placeholder = "Type a message" 
   value={text} 
   onKeyDown={onEnterPress}
            onChange={(e) => setText(e.target.value)}
          />    
   </SearchContainer>      
    </ChatBox>
    </Container>
    ); 

}
export default ChatComponents; 


