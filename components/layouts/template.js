import Head from "next/head";
import Script from "next/script";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faGlobeAmericas ,faBars} from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import geographyTemplate from "@/components/organisms/geography-template";


export default function Template(props) {
    return (
        <>
            <Head>
                <title>PlayYod</title>
            </Head>
            <main>
                <div className="sidebar sidebar-white sidebar-fixed bg-white " id="sidebar" >
                    <div className="sidebar-brand d-none d-md-block bg-gray-light">
                        <dl >
                            <div style={{paddingTop:10,paddingLeft:20}}>
                            <dt className="nav-item"><FontAwesomeIcon className="nav-icon" icon={faBars}  />
                            <img src="https://i.ibb.co/w6cx7NZ/playyod-removebg-preview-1.png" alt="playyod-removebg-preview-1" style={{paddingLeft:"10%"}} />
                            </dt>
                            </div>
                        </dl>

                    </div>
                    <ul className="sidebar-nav" data-coreui="navigation" data-simplebar="">
                        <li className="nav-item">
                            <Link className="nav-link" href="/" style={{color:'gray-1'}}><FontAwesomeIcon className="nav-icon" icon={faHome} style={{color:'gray-1'}}  /> HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/geograph" style={{color:'gray-1'}} ><FontAwesomeIcon className="nav-icon" icon={faGlobeAmericas} style={{color:'gray-1'}}/> Geography</Link>
                        </li>
                    </ul>

                </div>
                <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                    <header className="header header-sticky mb-4">
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
                                        <a className="dropdown-item" href="#">Lock Account</a>
                                        <a className="dropdown-item" href="#">Logout</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </header>
                    <div className="body flex-grow-1 px-3">
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
