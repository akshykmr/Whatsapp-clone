import styled from "styled-components";
import { SearchContainer, SearchInput } from "./ContactListComponents";
import { messagesList } from "../mockData";
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
const MessageDiv=styled.div`
justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
display:flex;
margin:5px 15px;

 `;
 const Message=styled.div`
 background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
 max-width:100%;
 color:#303030;
 padding:8px 10px;
 font-size :14px;
 border-radius:5px;
 
 `;
const ChatComponents = ()=>{
    return < Container>
    <ProfileHeader>
   <ProfileImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/220px-Elon_Musk_Royal_Society_%28crop2%29.jpg"/>     
   
   Elon musk
    </ProfileHeader>
    <MessageContainer> 
    {messagesList?.map((messageData) => (
        <MessageDiv isYours={messageData.senderID === 0}>
            <Message isYours={messageData.senderID=== 0}>
     {messageData.text}
   </Message> 
   </MessageDiv> 
    ))}    
    </MessageContainer>
    <ChatBox>
   <SearchContainer>
    <EmojiImage src="https://www.pngfind.com/pngs/m/220-2207946_png-file-svg-white-emoji-icon-png-transparent.png"/>
    <SearchInput
   placeholder = "Type a message"/>     
   </SearchContainer>      
    </ChatBox>
    </Container>;

}
export default ChatComponents; 


/*Note : start video from 49:53 */