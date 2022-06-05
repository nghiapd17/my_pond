import { axiosClient } from "../Apis";

// interface IFishPond {
//     name_fish_pond: string,
//     lake_type: no,
//     Price: 0,
//     main_image: {
//       path: string,
//       name: string,
//       type: string,
//       size: 0,
//       mime: string,
//       meta: {}
//     },
//     secondary_image: [
//       {
//         path: string,
//         name: string,
//         type: string,
//         size: 0,
//         mime: string,
//         meta: {}
//       }
//     ],
//     geo_linestring: string
//   }

export const fishPondAPI = {
  getAll() {
    const url = `fish_pond`;
    return axiosClient.get(url);
  },
  addData(fish_pond_data) {
    const url = `fish_pond`;
    return axiosClient.post(url, fish_pond_data);
  },
  editData(fish_pond_id) {
    const url = `:bw7lt1vo/fish_pond`;
    return axiosClient.delete(url, fish_pond_id);
  },
  getDataById(fish_pond_id) {
    const url = `:bw7lt1vo/fish_pond`;
    return axiosClient.get(url, fish_pond_id);
  },
};

export default fishPondAPI;
