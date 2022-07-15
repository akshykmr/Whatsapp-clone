 import axios from "axios";
const API_BASE_URL="http://localhost:3005";


const createUser = async (userData) => {
    return await axios.post(`${API_BASE_URL}/user`, userData);
  };
  
  const searchUser = async (email) => {
    return await axios.get(`${API_BASE_URL}/search-user?email=${email}`);
  };
  export const httpManager = {
    createUser,
    searchUser,

};
export default httpManager;