import Head from "next/head";
import Script from "next/script";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

export default function Template(props) {
    return (
        <>
            <Head>
                <title>PlayYod</title>
            </Head>
            <main>
                <div className="sidebar sidebar-dark sidebar-fixed" id="sidebar">
                    <div className="sidebar-brand d-none d-md-flex">

                    </div>
                    <ul className="sidebar-nav" data-coreui="navigation" data-simplebar="">
                        <li className="nav-title">Theme</li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/"><FontAwesomeIcon className="nav-icon" icon={faHome} /> Colors</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/a"><FontAwesomeIcon className="nav-icon" icon={faHome} /> Colors1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/b"><FontAwesomeIcon className="nav-icon" icon={faHome} /> Colors2</Link>
                        </li>
                        <li className="nav-group"><a className="nav-link nav-group-toggle" href="#">
                            <FontAwesomeIcon className="nav-icon" icon={faHome} /> Buttons</a>
                            <ul className="nav-group-items">
                                <li className="nav-item"><Link className="nav-link" href="/c"><FontAwesomeIcon className="nav-icon" icon={faHome} /> Buttons</Link></li>
                                <li className="nav-item"><Link className="nav-link" href="/d"><FontAwesomeIcon className="nav-icon" icon={faHome} /> Buttons Group</Link></li>
                                <li className="nav-item"><Link className="nav-link" href="/e"><FontAwesomeIcon className="nav-icon" icon={faHome} /> Dropdowns</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <button className="sidebar-toggler" type="button" data-coreui-toggle="unfoldable"></button>
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
