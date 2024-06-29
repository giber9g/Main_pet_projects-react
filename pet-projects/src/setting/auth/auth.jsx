// Modal.js
import React, { useState } from 'react';
import './style.scss'; // Импортируем стили для модального окна

const Auth = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                {children}
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form className="login100-form validate-form">
                            <span className="login100-form-title p-b-26">
                                Welcome
                            </span>
                            <span className="login100-form-title p-b-48">
                                <i className="zmdi zmdi-font"></i>
                            </span>

                            <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                                <input className="input100" type="text" name="email" />
                                <span class="focus-input100" data-placeholder="Email"></span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Enter password">
                                <span className="btn-show-pass">
                                    <i className="zmdi zmdi-eye"></i>
                                </span>
                                <input className="input100" type="password" name="pass" />
                                <span className="focus-input100" data-placeholder="Password"></span>
                            </div>

                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"></div>
                                    <button className="login100-form-btn" >
                                        login
                                    </button>
                                </div>
                            </div>

                            <div class="text-center p-t-115">
                                <span class="txt1">
                                    Don’t have an account?

                                </span>

                                <a class="txt2">
                                    Sign Up
                                </a>
                            </div>
                        </form>
                    </div>
                </div>


                <div id="dropDownSelect1"></div>
            </div>
        </div>
    );
};

export default Auth;
