import React from 'react'

const Register = ({ history }) => {
    return (
        <div>
            register
            <button onClick={() => {
                // xử lý 
                // thuộc tính history của thẻ route truyền cho component
                // push(): Phương thức chuyển hướng trang sau khi xử lý 
                history.push('/');
                // history.replace(): thay đổi trang sau khi xử lý.
                history.replace('/')
            }}>Trở về</button>
        </div>
    )
}

export default Register
