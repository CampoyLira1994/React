import React from 'react';
import Navbar from './Navbar';

function Layout(props){
    //  const children = props.children;
    return (
        <div>
            <Navbar></Navbar>
            {props.children}
        </div>
        );
}


export default Layout;