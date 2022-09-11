import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTNhODM3NDc1ZGU3N2M5Y2QzOWVlZjdlZjVjZTViOSIsInN1YiI6IjYzMWQ2Y2UxMGJiMDc2MDA3Yjc5NDljOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IfzKs9K2N7vGn-G0e5GdFy3e1RB57-X8uDC4qSY9a-s";

export const apiKey = "493a837475de77c9cd39eef7ef5ce5b9";

export default function request(payload: any) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return new Promise((resolve, reject) => {
    axios({
      method: payload.method,
      url: payload.url,
      data: payload.body,
      params: payload.params,
      headers: payload.headers,
    })
      .then((response: any) => {
        return resolve(response.data);
      })
      .catch((error) => reject(error));
  });
}

export const imageRequest = (path: any) => {
  return `https://image.tmdb.org/t/p/w500/${path}`;
};
