import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as action from '../../redux/actions/QuanLyNguoiDungAction';
// useSelector: thay thế mapStateToProps.
// useDispatch: thay thế mapDispatchToProps.


// Nơi khai báo các biến không cần thiết load lại khi setState (useState Hook)

const Login = () => {
    // Nơi khai báo các biến hàm cần load lại mỗi khi thay đổi state, props.
    let [state, setState] = useState({
        values: {
            taiKhoan: "",
            matKhau: ""
        },
        errors: {
            taiKhoan: "",
            matKhau: ""
        }
    })

    let dispatch = useDispatch(); // ứng với this.props.dispatch
    let propNguoiDung = useSelector(state => state.QuanLyNguoiDungReducer.nguoiDung); // ứng với mapStateToProps;

    const handleChange = (e) => {
        let { name, value} = e.target;
        setState({
            values: {
                ...state.values,
                [name]: value
            }
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(action.dangNhapAction(state.values))
    }

    return (
        <div className="container">
            <h3>Login</h3>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <span>Tài Khoản:</span>
                    <input name="taiKhoan" className="form-control" value={state.values.taiKhoan} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <span>Mật Khẩu:</span>
                    <input name="matKhau" className="form-control" type="password" value={state.values.matKhau} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-success">Đăng nhập</button>
                </div>
            </form>
            <h3>{propNguoiDung.taiKhoan}</h3>
        </div>
    )
}

export default Login
