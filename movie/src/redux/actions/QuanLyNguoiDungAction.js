import axios from 'axios';
import * as type from '../types/QuanLyNguoiDungType';
import { userLogin, accessToken, domain } from '../../config/setting';

// Action ajax
export const dangNhapAction = ({ taiKhoan, matKhau }) => {
    return dispatch => {
        return axios({
            url:`${domain}/api/quanlynguoidung/dangnhap`,
            method:'POST',
            data: {
                taiKhoan,
                matKhau
            }
        }).then(res => {
            // Luu thong tin dang nhap vao localStorage
            localStorage.setItem(userLogin, JSON.stringify(res.data));
            // Lưu thông tin token vào localStorage
            localStorage.setItem(accessToken,res.data.accessToken);
            dispatch({
                type:type.DANG_NHAP,
                nguoiDung: res.data
            })
        }).catch(err => console.log(err.response.data));
   }
};

// Action thường