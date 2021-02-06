import { AuthSerive } from "./../../../services/auth.service";
import axios from "axios";

const authService = new AuthSerive();
export const LoginPageStore = {
  state: {
    isLoading: false,
    isLoginSuccess: false,
    errMess: "",
  },
  mutations: {
    LOGIN_REQUEST(state) {
      state.isLoading = true;
    },
    LOGIN_SUCCESS(state, dataLoginResponse) {
      sessionStorage.setItem("user", JSON.stringify(dataLoginResponse));
      sessionStorage.setItem("accessToken", dataLoginResponse.accessToken);
      axios.defaults.headers.common["Authorization"] =
        dataLoginResponse.accessToken;
      state.isLoading = false;
      state.isLoginSuccess = true;
    },
    LOGIN_FAILED(state, errMess) {
      state.isLoading = false;
      state.errMess = errMess;
    },
    LOGIN_NOT_ADMIN(state) {
      state.isLoading = false;
      state.errMess = "Bạn không phải là admin !!";
    },
  },
  getters: {
    isLoginSuccess: (state) => state.isLoginSuccess,
    isLoading: (state) => state.isLoading,
    errMess: (state) => state.errMess,
  },
  actions: {
    sendLoginRequest({ commit }, dataLogin) {
      const loginDataRequest = {
        taiKhoan: dataLogin.username,
        matKhau: dataLogin.password,
      };
      commit("LOGIN_REQUEST");
      authService
        .login(loginDataRequest)
        .then((res) => {
          if (res.data.maLoaiNguoiDung === "KhachHang") {
            commit("LOGIN_NOT_ADMIN");
          } else {
            commit("LOGIN_SUCCESS", res.data);
          }
        })
        .catch((err) => {
          commit("LOGIN_FAILED", err.response.data);
        });
    },
  },
};
