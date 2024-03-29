import Template from "@/components/layouts/template";
import React, {useState} from 'react'
import Row from "react-bootstrap/Row";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import axios from "axios";
import { setAuthState, setUsernameState, setNameState } from "@/redux/slice/authSlice";
import { useDispatch } from "react-redux";

export default function Geography() {
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [visible, setVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isShownPassword, setIsShownPassword] = useState(false);

    const dispatch = useDispatch();
    const { push } = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        let data = (await axios.post("/api/login", {
            username: username,
            password: password
        })).data;

        if (data.status === "success") {
            dispatch(setAuthState(true));
            dispatch(setUsernameState(data.user.username));
            dispatch(setNameState(data.user.full_name));

            push('/');
        } else {
            setVisible(true);
            setErrorMessage(data.message);
        }
    }
    const checkOpenPassword = () => {
        setIsShownPassword(!isShownPassword)
    }

    const typePassword = () => {
        if (isShownPassword) {
            return "text"
        } else {
            return "password"
        }
    }

    const iconPassword = () => {
        if (isShownPassword) {
            return <AiOutlineEye color="#B3B3B3" size="24px" />
        } else {
            return <AiOutlineEyeInvisible color="#B3B3B3" size="24px" />
        }
    }

    return (
        <Template>
            <div style={{backgroundColor:"#E9F3FF",height:"100vh"}}>
                <container style={{backgroundColor:"#E9F3FF",width:"100%" , height:"100%",display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{width:469,height:612,backgroundColor:"white",borderRadius:35}}>
                            <img style={{margin:50,marginBottom:30,marginLeft:"40%"}} src="https://i.ibb.co/w6cx7NZ/playyod-removebg-preview-1.png" alt="playyod-removebg-preview-1" width={110} height={60} />
                        <Row style={{marginLeft:"32%"}}>
                            <a style={{color:"#4FA3A5"}}>Welcome To PlayYod</a>
                        </Row>
                        <Row style={{color:"red" ,fontSize:"12px",marginLeft:"6%",marginTop:60,marginBottom:5}}>
                            {visible && errorMessage}
                        </Row>
                        <Row style={{marginLeft:"8%",marginBottom:30}}>
                            <input style={{backgroundColor:"#F0F1F1",width:384,height:44,borderRadius:10,color:"black"}}
                                   placeholder={"username or E-mail"}  type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </Row>
                        <form style={{marginLeft:"2%"}}>
                             <div style={{position:"relative"}}>
                                    <a onClick={checkOpenPassword} style={{right:"80px", position:"absolute",paddingTop:"8px"}}>
                                        {iconPassword()}
                                    </a>
                                    <Row>
                                        <input placeholder={"password"} className="input" value={password} id="password" type={typePassword()} name="password"  onChange={e => setPassword(e.target.value)} style={{backgroundColor:"#F0F1F1",color:"black",width:384,height:44,borderRadius:10,marginLeft:"8%"}}/>
                                    </Row>
                             </div>
                        </form>
                        <Row style={{fontSize:"12px",marginLeft:"66%"}}>
                            <a style={{color:"#185095"}} onClick={() => window.location.href='/forgotPassword'}>Forgot Password?</a>
                        </Row>
                        <Row style={{marginTop:30,marginLeft:"25%"}}>
                            <form onSubmit={handleSubmit} >
                                <button style={{backgroundColor:"#185095",color:"white",width:205,height:38,borderRadius:20}}>Login</button>
                            </form>
                        </Row>
                        <Row style={{marginLeft:"45%" ,color:"#185095",marginTop:15,marginBottom:15,fontSize:"15px"}}>
                            <label>Or</label>
                        </Row>
                        <Link href="/register">
                            <Row style={{color:"#185095",marginLeft:"35%"}}>
                                <label><u>Create Account</u></label>
                            </Row>
                        </Link>
                    </div>
                </container>
            </div>
        </Template>
    )
}
