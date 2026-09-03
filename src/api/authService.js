import API from "./axios";

export const loginUser = async (credentials) => {
  const response = await API.post("/auth/login", credentials);
  return response.data;
};

export const registerUser = async (userData) => {
  // Matches typical register endpoint (adjust string if Postman specifies /auth/signup or /auth/register)
  const response = await API.post("/auth/register", userData);
  return response.data;
};

export const resetPassword = async (email, otp, newPassword) => {
  const response = await API.post("/auth/reset-password", {
    email,
    otp,
    password: newPassword,
  });
  return response.data;
};