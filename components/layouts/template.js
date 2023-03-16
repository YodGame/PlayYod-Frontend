import Head from "next/head";
import Script from "next/script";
import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faGlobeAmericas ,faBars} from '@fortawesome/free-solid-svg-icons';
import {BsGraphUp} from "react-icons/bs";
import { VscGraphLine } from "react-icons/vsc";
import Link from "next/link";

function BootstrapIcon(props) {
    return null;
}


export default function Template(props) {
    return (
        <>
            <Head>
                <title>PlayYod</title>
            </Head>
            <main>
                <div className="sidebar sidebar-light sidebar-fixed bg-white " id="sidebar" >
                    <div className="sidebar-brand d-none d-md-block bg-gray-100">
                        <dl >
                            <div style={{paddingTop:10,paddingLeft:20}}>
                            <dt className="nav-item"><FontAwesomeIcon className="nav-icon" icon={faBars} style={{color:"#0F1C3C"}}  />
                            <img src="https://i.ibb.co/w6cx7NZ/playyod-removebg-preview-1.png" alt="playyod-removebg-preview-1" style={{paddingLeft:"10%"}} />
                            </dt>
                            </div>
                        </dl>

                    </div>
                    <ul className="sidebar-nav" data-coreui="navigation" data-simplebar="">
                        <li className="nav-item">
                            <Link className="nav-link" href="/" style={{color:"#0F1C3C"}}><FontAwesomeIcon className="nav-icon" icon={faHome} style={{color:"#0F1C3C"}}  /> HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/geoGraph" style={{color:"#0F1C3C",}} ><FontAwesomeIcon className="nav-icon" icon={faGlobeAmericas} style={{color:"#0F1C3C"}}/> Geography</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/topSeller" style={{color:"#0F1C3C",}} ><BsGraphUp className="nav-icon" icon={BsGraphUp} style={{color:"#0F1C3C"}}/> Top Seller</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/topRecord" style={{color:"#0F1C3C",}} ><VscGraphLine className="nav-icon" icon={VscGraphLine} style={{color:"#0F1C3C"}}/> Top Record</Link>
                        </li>
                    </ul>

                </div>
                <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                    <header className="header header-sticky">
                        <div className="container-fluid">
                            <ul className="header-nav ms-auto">
                            </ul>
                            <ul className="header-nav ms-3">
                                <li className="nav-item dropdown">
                                    <a className="nav-link py-0" data-coreui-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                        <div className="avatar avatar-md"><img className="avatar-img" src="assets/img/avatars/8.jpg" alt="user@email.com"/></div>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end pt-0">
                                        <div className="dropdown-header bg-light py-2">
                                            <div className="fw-semibold">Account</div>
                                        </div>
                                        <a className="dropdown-item" href="/login">Login</a>
                                        <a className="dropdown-item" href="#">Logout</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </header>
                    <div className="body flex-grow-1">
                        {props.children}
                    </div>
                    <footer className="footer">
                        <div className="ms-auto">
                            © 2023 PlayYod.
                        </div>
                    </footer>
                </div>
            </main>
            <Script src="/js/coreui.bundle.min.js" />
            <Script src="/js/simplebar.min.js" />
        </>

    )

}

