import axios from "axios";
import { config } from "./../common/config";

export class APIService {
  get(path) {
    const url = `${config.baseUrl}/${path}`;
    return axios({
      url,
      method: "GET",
    });
  }

  post(path, data) {
    const url = `${config.baseUrl}/${path}`;
    return axios({
      url,
      data,
      method: "POST",
    });
  }

  put(path, data) {
    const url = `${config.baseUrl}/${path}`;
    return axios({
      url,
      data,
      method: "PUT",
    });
  }

  delete(path) {
    const url = `${config.baseUrl}/${path}`;
    return axios({
      url,
      method: "DELETE",
    });
  }
}
