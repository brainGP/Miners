import axios from "axios";

const API_URL = "http://localhost:8080";

export const signup = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/userSignup`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/userLogin`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
