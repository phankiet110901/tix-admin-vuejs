import { APIService } from "./api.service";

export class MovieService extends APIService {
  getAllMovie() {
    return this.get("QuanLyPhim/LayDanhSachPhim");
  }

  getMoviePagination(currentPage, limit = 10) {
    return this.get(
      `QuanLyPhim/LayDanhSachPhimPhanTrang?MaNhom=GP01&soTrang=${currentPage}&soPhanTuTrenTrang=${limit}`
    );
  }
}
