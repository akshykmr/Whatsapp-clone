 import UserModel from "../models/users";
 import ChannelModel from "../models/channels";
 import {sendResponse, sendError} from "../../utility";

 module.exports={
     createUser : async (req, res)=>{
        const userObj =new UserModel(req.body);
         await userObj.saveData();
         sendResponse(res, userObj,"User added successfully", true, 200);

     },
     loginUser : async (req, res)=>{
    const requestData = req.body;
    const isUserExist = await UserModel.findOneData({
        phoneNumber: requestData.phoneNumber,
        password: requestData.password,
    });   
    if(!userExist) return sendError(res, {}, "Invalid credentials");
    sendResponse(res,isUserExist, "User logged in successfully", true,200);
    },
    createChannel: async (req, res)=>{
          
    },
    getChannelList: async (req, res)=>{
         
    },
    searchUser : async (req, res)=>{
         
    },
    sendMessage : async (req, res)=>{
         
    },
 }