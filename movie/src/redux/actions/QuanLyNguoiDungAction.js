import axios from 'axios';
import * as type from '../types/QuanLyNguoiDungType';

// Action ajax
export const dangNhapAction = ({ taiKhoan, matKhau }) => {
    return dispatch => {
        return axios({
            url:'http://movie0706.cybersoft.edu.vn/api/quanlynguoidung/dangnhap',
            method:'POST',
            data: {
                taiKhoan,
                matKhau
            }
        }).then(res => {
            dispatch({
                type:type.DANG_NHAP,
                nguoiDung: res.data
            })
        }).catch(err => console.log(err.response.data));
   }
};

// Action thường