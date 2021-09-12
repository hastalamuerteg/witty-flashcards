import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "https://witty-flashcards.glitch.me"
    : "https://witty-flashcards.glitch.me";

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export async function getDataFromServer(url) {
  const { data } = await AxiosInstance.get(url);
  return data;
}

export async function deleteDataFromServer(url) {
  await AxiosInstance.delete(url);
}

export async function createDataOnServer(url, dataObj) {
  const { data } = await AxiosInstance.post(url, dataObj);
  return data;
}

export async function editDataOnServer(url, dataObj) {
  const { data } = await AxiosInstance.put(url, dataObj);
  return data;
}
