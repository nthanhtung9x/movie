import * as type from '../types/QuanLyNguoiDungType';
const initialState = {
    nguoiDung: {}
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
