import Head from "next/head";
import Script from "next/script";
import { useRouter } from 'next/navigation';
import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faGlobeAmericas ,faBars,faStarHalfStroke,faAt} from '@fortawesome/free-solid-svg-icons';
import {BsGraphUp} from "react-icons/bs";
import { VscGraphLine } from "react-icons/vsc";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthState, selectNameState, setAuthState, setNameState, setUsernameState } from "@/redux/slice/authSlice";
import axios from "axios";
import {useState} from "react";


export default function Template(props) {
    const authState = useSelector(selectAuthState);
    const nameState = useSelector(selectNameState);

    const dispatch = useDispatch();
    const { push } = useRouter();

    const Logout = async () => {
        let data = (await axios.get("/api/logout")).data
        if (data?.status === 'success') {
            dispatch(setAuthState(false));
            dispatch(setNameState(""));
            dispatch(setUsernameState(""));
            push("/");
        }
    }
    const [homeHovered, setHomeHovered] = useState(false);
    const [geoHovered, setGeoHovered] = useState(false);
    const [topSellerHovered, setTopSellerHovered] = useState(false);
    const [topRecordHovered, setTopRecordHovered] = useState(false);
    const [topRatingHovered, setTopRatingHovered] = useState(false);
    const [mentionAndTagHovered, setMentionAndTagHovered] = useState(false);




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
                        <li className="nav-item" style={{ backgroundColor: homeHovered ? "#E9F3FF" : "" }} onMouseEnter={() => setHomeHovered(true)} onMouseLeave={() => setHomeHovered(false)}>
                            <Link className="nav-link" href="/" style={{ color: homeHovered ? "#185095" : "#0F1C3C" }}>
                                <FontAwesomeIcon className="nav-icon" icon={faHome} style={{ color: homeHovered ? "#185095" : "#0F1C3C" }}/>
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item" style={{ backgroundColor: geoHovered ? "#E9F3FF" : "" }} onMouseEnter={() => setGeoHovered(true)} onMouseLeave={() => setGeoHovered(false)}>
                            <Link className="nav-link" href="/geoGraph" style={{ color: geoHovered ? "#185095" : "#0F1C3C" }}>
                                <FontAwesomeIcon className="nav-icon" icon={faGlobeAmericas} style={{ color: geoHovered ? "#185095" : "#0F1C3C" }}/>
                                Geography
                            </Link>
                        </li>
                        <li className="nav-item" style={{ backgroundColor: topSellerHovered ? "#E9F3FF" : "" }} onMouseEnter={() => setTopSellerHovered(true)} onMouseLeave={() => setTopSellerHovered(false)}>
                            <Link className="nav-link" href="/topSeller" style={{ color: topSellerHovered ? "#185095" : "#0F1C3C" }}>
                                <BsGraphUp className="nav-icon" icon={BsGraphUp} style={{ color: topSellerHovered ? "#185095" : "#0F1C3C" }}/>
                                Top Seller
                            </Link>
                        </li>
                        <li className="nav-item" style={{ backgroundColor: topRecordHovered ? "#E9F3FF" : "" }} onMouseEnter={() => setTopRecordHovered(true)} onMouseLeave={() => setTopRecordHovered(false)}>
                            <Link className="nav-link" href="/topRecord" style={{ color: topRecordHovered ? "#185095" : "#0F1C3C" }}>
                                <VscGraphLine className="nav-icon" icon={VscGraphLine} style={{ color: topRecordHovered ? "#185095" : "#0F1C3C" }}/>
                                Top Record
                            </Link>
                        </li>

                        <li className="nav-item" style={{ backgroundColor: topRatingHovered ? "#E9F3FF" : "" }} onMouseEnter={() => setTopRatingHovered(true)} onMouseLeave={() => setTopRatingHovered(false)}>
                            <Link className="nav-link" href="/topRating" style={{ color: geoHovered ? "#185095" : "#0F1C3C" }}>
                                <FontAwesomeIcon className="nav-icon" icon={faStarHalfStroke} style={{ color: topRatingHovered ? "#185095" : "#0F1C3C" }}/>
                                Top Rating
                            </Link>
                        </li>

                        <li className="nav-item" style={{ backgroundColor: mentionAndTagHovered ? "#E9F3FF" : "" }} onMouseEnter={() => setMentionAndTagHovered(true)} onMouseLeave={() => setMentionAndTagHovered(false)}>
                            <Link className="nav-link" href="/mentionAndTag" style={{ color: mentionAndTagHovered ? "#185095" : "#0F1C3C" }}>
                                <FontAwesomeIcon className="nav-icon" icon={faAt} style={{ color: mentionAndTagHovered ? "#185095" : "#0F1C3C"}}/>
                                Mention&Tag
                            </Link>
                        </li>

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

