import axios from "axios";

const API_URL = "http://localhost:3001/api/users";

export async function getUsers() {
  const response = await axios.get(API_URL);
  return response.data;
}

export async function createUser(data) {
  const response = await axios.post(
    API_URL,
    data
  );

  return response.data;
}

export async function updateUser(id, data) {
  const response = await axios.put(
    `${API_URL}/${id}`,
    data
  );

  return response.data;
}

export async function deleteUser(id) {
  const response = await axios.delete(
    `${API_URL}/${id}`
  );

  return response.data;
}