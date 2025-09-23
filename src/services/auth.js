import axios from "axios";

export async function login(email, password) {
  const res = await axios.post("http://localhost:3000/login", { email, password });
  localStorage.setItem("token", res.data.token);
  return res.data.token;
}

export async function register(fullname, email, password) {
  const res = await axios.post("http://localhost:3000/register", { fullname, email, password });
  return res.data;
}