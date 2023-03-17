import Template from "@/components/layouts/template";
import { AiOutlineEye,  AiOutlineEyeInvisible} from 'react-icons/ai';
import {useState} from "react";

export default function register() {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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

    return (
        <Template page="register">
            <div style={{padding:"111px 0"}}>
                <div style={{display: "block", margin: "auto", width:"469px", backgroundColor:"#F6F6F6", borderRadius:"35px", boxShadow:"0px 4px 4px"}}>
                    <form style={{padding:"50px 40px"}}>
                        <h1 style={{textAlign:"center", fontSize:"28px"}}>Create Your <img src="https://i.ibb.co/w6cx7NZ/playyod-removebg-preview-1.png" alt="playyod"/> Account</h1>
                        <div style={{paddingTop:"34px"}}>
                            <p style={{fontSize:"18px", color:"#185095"}}>Full name</p>
                            <input className="input" value={name} id="name" type="text" name="name" onChange={e => setName(e.target.value)} style={{padding:"5px", width:"384px", height:"44px", border: "0.5px solid #000000", borderRadius:"10px", boxShadow:"inset 2px 2px 2px rgba(0, 0, 0, 0.25)"}}/>
                        </div>
                        <div style={{paddingTop:"26px"}}>
                            <p style={{fontSize:"18px", color:"#185095"}}>Username</p>
                            <input className="input" value={username} id="username" type="text" name="username" onChange={e => setUsername(e.target.value)} style={{padding:"5px", width:"384px", height:"44px", border: "0.5px solid #000000", borderRadius:"10px", boxShadow:"inset 2px 2px 2px rgba(0, 0, 0, 0.25)"}}/>
                        </div>
                        <div style={{paddingTop:"26px"}}>
                            <p style={{fontSize:"18px", color:"#185095"}}>E-mail</p>
                            <input className="input" value={email} id="email" type="text" name="email" onChange={e => setEmail(e.target.value)} style={{padding:"5px", width:"384px", height:"44px", border: "0.5px solid #000000", borderRadius:"10px", boxShadow:"inset 2px 2px 2px rgba(0, 0, 0, 0.25)"}}/>
                        </div>
                        <div style={{paddingTop:"26px"}}>
                            <p style={{fontSize:"18px", color:"#185095"}}>Password</p>
                            <div style={{position:"relative"}}>
                                <a onClick={checkOpenPassword} style={{right:"20px", position:"absolute",  paddingTop:"8px"}}>
                                    {iconPassword()}
                                </a>
                                <input className="input" value={password} id="password" type={typePassword()} name="password"  onChange={e => setPassword(e.target.value)} style={{paddingLeft:"5px", paddingRight:"50px", height:"44px", width:"384px", border: "0.5px solid #000000", borderRadius:"10px", boxShadow:"inset 2px 2px 2px rgba(0, 0, 0, 0.25)"}}/>
                            </div>
                        </div>
                        <div style={{paddingTop:"26px"}}>
                            <p style={{fontSize:"18px", color:"#185095"}}>Confirm Password</p>
                            <div style={{position:"relative"}}>
                                <a onClick={checkOpenConfirmPassword} style={{right:"20px", position:"absolute",  paddingTop:"8px"}}>
                                    {iconConfirmPassword()}
                                </a>
                                <input className="input" value={confirmPassword} id="confirmPassword" type={typeConfirmPassword()} name="confirmPassword"  onChange={e => setConfirmPassword(e.target.value)} style={{paddingLeft:"5px", paddingRight:"50px", height:"44px", width:"384px", border: "0.5px solid #000000", borderRadius:"10px", boxShadow:"inset 2px 2px 2px rgba(0, 0, 0, 0.25)"}}/>
                            </div>
                        </div>
                        <div style={{paddingTop:"52px", textAlign:"center"}}>
                            <button type="submit" style={{fontSize:"20px", width:"205px", height:"38px", backgroundColor:"#4FA3A5", borderRadius:"20px", boxShadow:"2px 4px 6px 1px rgba(0, 0, 0, 0.5)"}}>
                                <label>Create Account</label>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </Template>
    )
}