import axios from "axios";

const baseUrl = "http://localhost:8080/api/users"; // Ensure this matches your backend API

// Register a new user
const registerUser = async (user) => {
  try {
    const response = await axios.post(`${baseUrl}/register`, user, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true, // Ensures cookies/session handling if needed
    });
    return response.data;
  } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    throw error.response?.data || new Error("Registration failed");
  }
};

// Login user
const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, credentials, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error.response?.data || new Error("Login failed");
  }
};

// Export all services
const sendOtp = async(email)=>{
  try {
    const response = await axios.post(`${baseUrl}/sendOtp`, { email }, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Send OTP error:", error.response?.data || error.message);
    throw error.response?.data || new Error("Send OTP failed");
  }
}
const verifyOtp = async(email,otp)=>{
  try {
    const response = await axios.get(`${baseUrl}/verifyOtp?email=${email}&otp=${otp}`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Verify OTP error:", error.response?.data || error.message);
    throw error.response?.data || new Error("Verify OTP failed");
  }
}
const changePassword = async(email,newPassword)=>{
  try {
    const response=await axios.post(`${baseUrl}/changePassword`,{email,newPassword}, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    } );
    return response.data;
  } catch (error) {
    console.error("Change Password error:", error.response?.data || error.message);
    throw error.response?.data || new Error("Change Password failed");
  }
}
const UserServices = {
  registerUser,
  loginUser,
  sendOtp,
  verifyOtp,
  changePassword
};

export default UserServices;
