import React from "react";
import Logo from './logo.svg';
import './Header.css';

function Header () {

    return (

        <section className="header">
            <section className="header-sticky">
                <section className="header-logo">
                    <a href="/" className="logo">
                        <img src={Logo} alt="logo"></img>
                    </a>
                </section>

                <section className="header-remarks">
                    <button class="dropbtn"> Remarks </button>
                    <div id="dropDown" class="dropDown-content">
                        <ul class="dropDown-menu">
                            <li><span class="label label-info"> CURRENT DAY</span></li>
                            <li><span class="label label-default"> LEAVE :: TAKEN</span></li>
                            <li><span class="label label-warning"> LEAVE :: PENDING APPROVAL</span></li>
                            <li><span class="label label-success"> LEAVE :: APPROVED</span></li>
                            <li><span class="label label-danger"> PUBLIC HOLIDAY</span></li>
                        </ul>
                    </div>
                </section>
            </section>

        </section>

    )
}

export default Header;

