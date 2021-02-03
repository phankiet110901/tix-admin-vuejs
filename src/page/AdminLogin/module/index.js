import axios from "axios";
import { config } from "../../../common/config";

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
    LOGIN_SUCCESS(state, dataLogin) {
      sessionStorage.setItem("user", JSON.stringify(dataLogin));
      sessionStorage.setItem("accessToken", dataLogin.accessToken);
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
      commit("LOGIN_REQUEST");
      axios({
        url: `${config.baseUrl}/QuanLyNguoiDung/DangNhap`,
        data: {
          taiKhoan: dataLogin.username,
          matKhau: dataLogin.password,
        },
        method: "POST",
      })
        .then((res) => {
          if ((res.data.maLoaiNguoiDung === "KhachHang")) {
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
