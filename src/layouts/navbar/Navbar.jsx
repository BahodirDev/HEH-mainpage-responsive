import React from 'react';
import './navbar.css';
import './responsive/navbar_responsive.css'
import png from '../../assets/logo.png'

function Navbar(props) {
    return (


        <nav className="navbar navbar-expand-lg  ">
            <div className='res_pos'>
                <a className="navbar-brand" href="#">

                    <img src={png} className="logo" alt="logo" />
                    <h6 className='under_logo_text'>HEH</h6></a>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">For investors <span className="sr-only"></span></a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">HEH news</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">HEH foundation</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav_btn " href="#"> <span> Received invention</span></a>
                    </li>
                </ul>

            </div>
        </nav>

        // <nav class="navbar navbar-expand-lg ">
        //     <div class="container-fluid">
        //         <a class="navbar-brand" href="#">
        //             <img src={png} className="logo" alt="logo" />
        //             <h6 className='under_logo_text'>HEH</h6>
        //         </a>
        //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav mr-auto">
        //                 <li className="nav-item active">
        //                     <a className="nav-link" href="#">For investors <span className="sr-only"></span></a>
        //                 </li>

        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">HEH news</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link " href="#">HEH foundation</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link nav_btn " href="#"> <span> Received invention</span></a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    );
}

export default Navbar;