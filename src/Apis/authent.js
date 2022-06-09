import { axiosClientAuthen } from "../Apis";



export const authentAPI = {
    
  init(redirect_uri) {
    const url = `oauth/google/init?${redirect_uri}`;
    return axiosClientAuthen.get(url);
  },
  continue(fish_pond_data) {
    const url = `fish_pond`;
    return axiosClientAuthen.post(url, fish_pond_data);
  },
  login(fish_pond_id) {
    const url = `:bw7lt1vo/fish_pond`;
    return axiosClientAuthen.delete(url, fish_pond_id);
  },
  signin(token, name,email) {
    const url = `oauth/google/signup?redirect_uri=/`;
    return axiosClientAuthen.get(url, {
        token, name,email
    });
  },
};

export default authentAPI;
