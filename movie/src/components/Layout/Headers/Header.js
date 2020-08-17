import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
    // Kết nối đến QuanLyNguoiDungReducer lấy về state.nguoiDung
    const nguoiDung = useSelector(state => state.QuanLyNguoiDungReducer.nguoiDung);


    return (
        <div>
            <nav className="nav justify-content-center bg-light">
                <NavLink className="nav-link" activeClassName="active" to="/home">Home</NavLink>
                {
                    nguoiDung.taiKhoan ? 
                        <NavLink className="nav-link" activeClassName="active" to="/profile">Hello! {nguoiDung.taiKhoan}</NavLink>
                    : 
                        <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
                }
                <NavLink className="nav-link" activeClassName="active" to="/register">Register</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/hoc">HOC</NavLink>

            </nav>
        </div>
    )
}

export default Header;

