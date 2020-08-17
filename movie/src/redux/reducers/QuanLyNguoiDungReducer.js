import * as type from '../types/QuanLyNguoiDungType';
import { userLogin } from '../../config/setting';
const initialState = {
    nguoiDung: localStorage.getItem(userLogin) ? JSON.parse(localStorage.getItem(userLogin)) : {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case type.DANG_NHAP: {
            state.nguoiDung = action.nguoiDung;
            return {...state};
        }
        
        default:
            return {...state};
    }
}
