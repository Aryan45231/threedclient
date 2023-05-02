import React from 'react';
import ScreenComponents from "./Components/index"
import Component from '../../Components';
import "./Authentication.css"
import useAuthViewModel from './AuthenticationViewModel';
function index(props) {
  return (
    <>
      <ScreenComponents.AuthCard>
        <ScreenComponents.signinForm/>
      </ScreenComponents.AuthCard>
    </>
  );
}

export default index;