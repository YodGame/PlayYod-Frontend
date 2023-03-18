import Template from "@/components/layouts/template";
import React, {useState} from 'react'
import Row from "react-bootstrap/Row";
import lock from 'public/lock1.png';

import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import Image from "next/image";

export default function NewPassword() {

    const [newpassword, setNewPassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");

    const [isShownPassword, setIsShownPassword] = useState(false);
    const [isShownConfirmPassword, setIsShownConfirmPassword] = useState(false);
    const checkOpenPassword = () => {
        setIsShownPassword(!isShownPassword)
    }

    const checkOpenConfirmPassword = () => {
        setIsShownConfirmPassword(!isShownConfirmPassword)
    }

    const iconConfirmPassword = () => {
        if (isShownConfirmPassword) {
            return <AiOutlineEye color="#B3B3B3" size="24px" />
        } else {
            return <AiOutlineEyeInvisible color="#B3B3B3" size="24px" />
        }
    }

    const iconPassword = () => {
        if (isShownPassword) {
            return <AiOutlineEye color="#B3B3B3" size="24px" />
        } else {
            return <AiOutlineEyeInvisible color="#B3B3B3" size="24px" />
        }
    }

    const typePassword = () => {
        if (isShownPassword) {
            return "text"
        } else {
            return "password"
        }
    }

    const typeConfirmPassword = () => {
        if (isShownConfirmPassword) {
            return "text"
        } else {
            return "password"
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("newpassword :" ,newpassword)
        console.log("confirmpassword :" ,confirmpassword)

    }

    return (
        <Template>
            <div style={{backgroundColor:"#E9F3FF",height:"100vh"}}>
                <container style={{backgroundColor:"#E9F3FF",width:"100%" , height:"100%",display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{width:469,height:612,backgroundColor:"white",borderRadius:35}}>
                        <Image style={{margin:50,marginBottom:30,marginLeft:"45%"}} src={lock} alt="lock" width={73} height={73} />
                        <Row style={{marginLeft:"25%"}}>
                            <a style={{fontSize:"25px"}}>Create new password</a>
                        </Row>

                        <form style={{marginLeft:"5%"}}>
                            <a style={{color:"#185095",marginLeft:"8%"}}>New Password</a>
                            <div style={{position:"relative"}}>
                                <a onClick={checkOpenPassword} style={{right:"60px", position:"absolute",  paddingTop:"8px"}}>
                                    {iconPassword()}
                                </a>
                                <Row>
                                    <input className="input" value={newpassword} id="newpassword" type={typePassword()} name="newpassword"  onChange={e => setNewPassword(e.target.value)} style={{width:384,height:44,borderRadius:10,marginLeft:"8%"}}/>
                                </Row>
                            </div>
                        </form>
                        <form style={{marginLeft:"5%"}}>
                            <a style={{color:"#185095",marginLeft:"8%"}}>Confirm Password</a>
                            <div style={{position:"relative"}}>
                                <a onClick={checkOpenConfirmPassword} style={{right:"60px", position:"absolute",  paddingTop:"8px"}}>
                                    {iconConfirmPassword()}
                                </a>
                                <Row>
                                    <input className="input" value={confirmpassword} id="confirmPassword" type={typeConfirmPassword()} name="confirmpassword"  onChange={e => setconfirmpassword(e.target.value)} style={{width:384,height:44,borderRadius:10,marginLeft:"8%"}}/>
                                </Row>
                            </div>
                        </form>
                        <Row style={{marginTop:50,marginLeft:"25%"}}>
                            <form onSubmit={handleSubmit} >
                                <button  onClick={() => window.location.href=''} style={{backgroundColor:"#4FA3A5",color:"white",width:205,height:38,borderRadius:20,boxShadow: "2px 2px 5px  rgba(0, 0, 0, 0.25)"}}>Confirm</button>
                            </form>
                        </Row>
                        <Row style={{marginTop:20,marginLeft:"28%"}}>
                            <button onClick={() => window.location.href='/resetCode'} style={{backgroundColor:"white",color:"#4FA3A5",width:205,height:38,borderRadius:20,boxShadow: "2px 2px 5px  rgba(0, 0, 0, 0.25)"}}>cancel</button>
                        </Row>
                    </div>
                </container>
            </div>
        </Template>
    )
}
