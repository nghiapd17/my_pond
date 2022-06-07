import { axiosClient } from "../Apis";

export const authenAPIs = {
  login(data_login) {
    // {
    //     "email": "user@example.com",
    //     "password": "string"
    //   }
    const url = `auth/ `;
    return axiosClient.post(url, data_login);
  },
  signup(data_signup) {
    const url = `fish_pond`;
    return axiosClient.post(url, data_signup);
  },
  getToken() {
    // {
    //     "name": "string",
    //     "email": "user@example.com",
    //     "password": "string"
    //   }
    const url = `:bw7lt1vo/fish_pond`;
    return axiosClient.get(url);
  },
};

export default authenAPIs;
