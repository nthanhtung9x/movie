import React from 'react';
import {Route} from 'react-router-dom';
import Header from '../../components/Layout/Headers/Header';

const HomeComponent = (props) => {
    return (
        <>
            <Header/>
            {props.children}
        </>
    )
}

export const HomeTemplate = ({Component, ...rest}) => {
    return <Route {...rest} render={(props) => {
        return <HomeComponent>
            <Component {...props}/>
        </HomeComponent>
    }}/>
}