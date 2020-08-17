import React from 'react';
import Child from './Child';
import Modal from './Modal';
import Login from '../../pages/Login/Login';
import modalHOC from './ModalHOC';

let WrappedModal = modalHOC(Login, 'Login Form');

const DemoHOC = () => {
    return (
        <div>
            <h3>Demo HOC</h3>
            <Child 
                // com={() => { return <div>abc</div> }}
            >
                <div>abc</div>
            </Child>
            <WrappedModal />
            {/* <Modal 
                render={(title) => {
                    return <p style={{color:'red'}}>{title}</p>
                }}
                component={Login}
            /> */}
        </div>
    )
}

export default DemoHOC;
