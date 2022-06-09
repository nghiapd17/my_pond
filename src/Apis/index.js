import axios from "axios";

export const axiosClient = axios.create({
  // https://x8ki-letl-twmt.n7.xano.io/api:bw7lt1vo/fish_pond
  baseURL: "https://x8ki-letl-twmt.n7.xano.io/api:bw7lt1vo/",
  headers: {
    "Content-Type": "application/json",
    // "Authorization: Bearer YOUR_DEVELOPER_API_KEY",
  },
});

export const axiosClientAuthen = axios.create({
  baseURL: "https://x8ki-letl-twmt.n7.xano.io/api:_oC6BlqY/",
  headers: {
    "Content-Type": "application/json",
  },
});
