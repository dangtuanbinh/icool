import request from "../../api"

export const connectMovieApi = (params: any) => {
    return request({
      url: `/movie/now_playing`,
      method: "GET",
      params: params,
    });
  };