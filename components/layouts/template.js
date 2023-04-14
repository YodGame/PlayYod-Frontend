import Head from "next/head";
import Script from "next/script";
import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGlobeAmericas, faBars, faStarHalfStroke, faAt, faChartLine, faChartColumn } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthState, selectNameState, setAuthState, setNameState, setUsernameState } from "@/redux/slice/authSlice";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Template(props) {
    const authState = useSelector(selectAuthState);
    const nameState = useSelector(selectNameState);

    const dispatch = useDispatch();
    //const { push, pathname } = useRouter();

    const Logout = async () => {
        let data = (await axios.get("/api/logout")).data
        if (data?.status === 'success') {
            dispatch(setAuthState(false));
            dispatch(setNameState(""));
            dispatch(setUsernameState(""));
            push("/");
        }
    }
    const [currentLink,setCurrentLink] = useState('');
    const [hoveredLink, setHoveredLink] = useState('');

    const [pathname, setpathname] = useState('');
    useEffect(() => {
        // Update the hovered link state based on the current route
        setpathname(window.location.pathname);
        setCurrentLink(pathname);
        if (pathname === '/' ) {
            setHoveredLink('home');
        } else if (pathname === '/geoGraph') {
            setHoveredLink('geography');
        } else if (pathname === '/topSeller') {
            setHoveredLink('topSeller');
        } else if (pathname === '/topRecord') {
            setHoveredLink('topRecord');
        } else if (pathname === '/topRating') {
            setHoveredLink('topRating');
        } else if (pathname === '/mentionAndTag') {
            setHoveredLink('mentionAndTag');
        }
        console.log(window.location.pathname);
    }, [pathname]);

    return (
        <>
            <Head>
                <title>PlayYod</title>
            </Head>
            <main>
                <div className="sidebar sidebar-light sidebar-fixed bg-white" id="sidebar">
                    <div className="sidebar-brand d-none d-md-block bg-gray-100">
                        <dl>
                            <div style={{ paddingTop: 10, paddingLeft: 20 }}>
                                <dt className="nav-item">
                                    <img src="https://i.ibb.co/w6cx7NZ/playyod-removebg-preview-1.png" alt="playyod-removebg-preview-1" style={{ paddingLeft: "10%" }} />
                                </dt>
                            </div>
                        </dl>
                    </div>
                    <ul className="sidebar-nav" data-coreui="navigation" data-simplebar="">
                        <div style={{ backgroundColor: currentLink === '/' ? "#E9F3FF" : "" }}>
                            <li className={`${pathname === '/' ? 'active' : ''}`} style={{ backgroundColor: hoveredLink === 'home' ? "#E9F3FF" : "" }} onMouseEnter={() => setHoveredLink("home")} onMouseLeave={() => setHoveredLink("") }>
                                <Link className="nav-link" href="/" style={{ color: hoveredLink === 'home' ? "#185095" : "#0F1C3C" }}>
                                    <FontAwesomeIcon className="nav-icon" icon={faHome} style={{ color: hoveredLink === 'home' ? "#185095" : "#0F1C3C" }}/>
                                    <span className="nav-text">Home</span>
                                </Link>
                            </li>
                        </div>
                        <div style={{ backgroundColor: currentLink === '/geoGraph' ? "#E9F3FF" : "" }}>
                            <li className={`nav-item ${pathname === '/geoGraph' ? 'active' : ''}`} style={{ backgroundColor: hoveredLink === 'geography' ? "#E9F3FF" : "" }} onMouseEnter={() => setHoveredLink('geography')} onMouseLeave={() => setHoveredLink('')}>
                                <Link className="nav-link" href="/geoGraph" style={{ color: hoveredLink === 'geography' ? "#185095" : "#0F1C3C" }}>
                                    <FontAwesomeIcon className="nav-icon" icon={faGlobeAmericas} style={{ color: hoveredLink === 'geography' ? "#185095" : "#0F1C3C" }}/>
                                    <span className="nav-link-text">Geography</span>
                                </Link>
                            </li>
                        </div>
                        <div style={{ backgroundColor: currentLink === '/topSeller' ? "#E9F3FF" : "" }}>
                            <li className={`nav-item ${pathname === '/topSeller' ? 'active' : ''}`} style={{ backgroundColor: hoveredLink === 'topSeller' ? "#E9F3FF" : "" }} onMouseEnter={() => setHoveredLink('topSeller')} onMouseLeave={() => setHoveredLink('')}>
                                <Link className="nav-link" href="/topSeller" style={{ color: hoveredLink === 'topSeller' ? "#185095" : "#0F1C3C" }}>
                                    <FontAwesomeIcon className="nav-icon" icon={faStarHalfStroke} style={{ color: hoveredLink === 'topSeller' ? "#185095" : "#0F1C3C" }}/>
                                    <span className="nav-link-text">Top Seller</span>
                                </Link>
                            </li>
                        </div>
                        <div style={{ backgroundColor: currentLink === '/topRecord' ? "#E9F3FF" : "" }}>
                            <li className={`nav-item ${pathname === '/topRecord' ? 'active' : ''}`} style={{ backgroundColor: hoveredLink === 'topRecord' ? "#E9F3FF" : "" }} onMouseEnter={() => setHoveredLink('topRecord')} onMouseLeave={() => setHoveredLink('')}>
                                <Link className="nav-link" href="/topRecord" style={{ color: hoveredLink === 'topRecord' ? "#185095" : "#0F1C3C" }}>
                                    <FontAwesomeIcon className="nav-icon" icon={faChartLine} style={{ color: hoveredLink === 'topRecord' ? "#185095" : "#0F1C3C" }}/>
                                    <span className="nav-link-text">Top Record</span>
                                </Link>
                            </li>
                        </div>
                        <div style={{ backgroundColor: currentLink === '/topRating' ? "#E9F3FF" : "" }}>
                            <li className={`nav-item ${pathname === '/topRating' ? 'active' : ''}`} style={{ backgroundColor: hoveredLink === 'topRating' ? "#E9F3FF" : "" }} onMouseEnter={() => setHoveredLink('topRating')} onMouseLeave={() => setHoveredLink('')}>
                                <Link className="nav-link" href="/topRating" style={{ color: hoveredLink === 'topRating' ? "#185095" : "#0F1C3C" }}>
                                    <FontAwesomeIcon className="nav-icon" icon={faChartColumn} style={{ color: hoveredLink === 'topRating' ? "#185095" : "#0F1C3C" }}/>
                                    <span className="nav-link-text">Top Rating</span>
                                </Link>
                            </li>
                        </div>
                        <div style={{ backgroundColor: currentLink === '/mentionAndTag' ? "#E9F3FF" : "" }}>
                            <li className={`nav-item ${pathname === '/mentionAndTag' ? 'active' : ''}`} style={{ backgroundColor: hoveredLink === 'mentionAndTag' ? "#E9F3FF" : "" }} onMouseEnter={() => setHoveredLink('mentionAndTag')} onMouseLeave={() => setHoveredLink('')}>
                                <Link className="nav-link" href="/mentionAndTag" style={{ color: hoveredLink === 'mentionAndTag' ? "#185095" : "#0F1C3C" }}>
                                    <FontAwesomeIcon className="nav-icon" icon={faAt} style={{ color: hoveredLink === 'mentionAndTag' ? "#185095" : "#0F1C3C" }} />
                                    <span className="nav-link-text">Mention &amp; Tag</span>
                                </Link>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                    <header className="header header-sticky">
                        <div className="container-fluid">
                            <ul className="header-nav ms-auto"></ul>
                            <ul className="header-nav ms-3">
                                <li className="nav-item dropdown">
                                    <a className="nav-link py-0" data-coreui-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                        <div className="avatar avatar-md">
                                            <img className="avatar-img mx-1" src="/user.png" alt="user@email.com"/>
                                        </div>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end pt-0">
                                        {authState ?
                                            <>
                                                <div className="dropdown-header bg-light py-2">
                                                    <div className="fw-semibold">{nameState}</div>
                                                </div>
                                                <Link className="dropdown-item" href="/loginHistory">Login History</Link>
                                                <a className="dropdown-item" href="#" onClick={() => Logout()}>Logout</a>
                                            </>
                                        :
                                            <>
                                                <Link className="dropdown-item" href="/register">Register</Link>
                                                <Link className="dropdown-item" href="/login">Login</Link>
                                            </>
                                        }
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

