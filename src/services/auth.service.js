import { APIService } from "./api.service";

export class AuthSerive extends APIService {
  login(dataLogin) {
    return this.post("QuanLyNguoiDung/DangNhap", dataLogin);
  }
}
