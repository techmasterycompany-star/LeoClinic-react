import API from "./axios";

export const loginUser = async (credentials) => {
  const response = await API.post("/auth/login", credentials);
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await API.post("/auth/register", userData);
  return response.data;
};

export const verifyEmail = async (token) => {
  const response = await API.post("/auth/verify-email", {
    token,
  });
  return response.data;
};

export const verifyOtpCode = async (token) => {
  const response = await API.post("/auth/verify-email", {
    token,
  });
  return response.data;
};

export const requestPasswordReset = async (email) => {
  const response = await API.post("/auth/forgot-password", {
    email,
  });
  return response.data;
};

export const resetPassword = async (token, password) => {
  const response = await API.post("/auth/reset-password", {
    token,
    password,
  });
  return response.data;
};