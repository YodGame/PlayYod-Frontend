import Template from "@/components/layouts/template";
import { AiOutlineEye,  AiOutlineEyeInvisible} from 'react-icons/ai';
import {useState} from "react";
import Link from "next/link";
import axios from "axios";
import {useRouter} from "next/navigation";
import qs from "qs";
import {API_URL} from "@/config";

export default function register() {

    const { push } = useRouter();

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState([]);
    const [visible, setVisible] = useState(false);

    const [canUsePassword, setCanUsePassword] = useState(true);
    const [isShownPassword, setIsShownPassword] = useState(false);
    const [isShownConfirmPassword, setIsShownConfirmPassword] = useState(false);

    //check checkOpenPassword, checkOpenConfirmPassword, iconPassword, iconConfirmPassword, typePassword, typeConfirmPassword for change format password and confirm-password
    const checkOpenPassword = () => {
        setIsShownPassword(!isShownPassword)
    }
    const checkOpenConfirmPassword = () => {
        setIsShownConfirmPassword(!isShownConfirmPassword)
    }
    const iconPassword = () => {
        if (isShownPassword) {
            return <AiOutlineEye color="#B3B3B3" size="24px" />
        } else {
            return <AiOutlineEyeInvisible color="#B3B3B3" size="24px" />
        }
    }
    const iconConfirmPassword = () => {
        if (isShownConfirmPassword) {
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

    //display of inputting confirmPassword
    const checkConfirmPassword = (confirmPassword) => {
        setCanUsePassword(confirmPassword === password)
    }
    const showConfirmPassword = () => {
        if (canUsePassword) {
            return {fontSize:"18px", color:"#185095" }
        } else {
            return {fontSize:"18px", color: "#F75435"}
        }
    }
    const showInputConfirmPassword = () => {
        if (canUsePassword) {
            return {paddingLeft:"5px", paddingRight:"50px", height:"44px", width:"384px", border: "0.5px solid #000000", borderRadius:"10px", boxShadow:"inset 2px 2px 2px rgba(0, 0, 0, 0.25)"}
        } else {
            return {paddingLeft:"5px", paddingRight:"50px", height:"44px", width:"384px", border: "2px solid #F75435", borderRadius:"10px", boxShadow:"inset 2px 2px 2px rgba(0, 0, 0, 0.25)"}
        }
    }

    //when submit
    const handleSubmit = (event) => {
        event.preventDefault();
        if (password === confirmPassword) {
            const formData = { username: username, email: email, password: password, full_name: name };
            axios.post(
                API_URL + "auth/register",
                qs.stringify(formData),
                {
                    headers: {"Content-Type": "application/x-www-form-urlencoded"}
                }
            ).then(r => {
                let data = r.data;
                if (data?.status === 'success') {
                    push('/login')
                } else {
                    setVisible(true);
                    setErrorMessage([data?.message]);
                }
                console.log(data)
            }).catch(e => {
                if (e?.response?.data?.detail) {
                    let data = e.response.data.detail;

                    let arr = []
                    data.map((item) => {
                        let msg = item.msg.replace(/value|string/gi, item.loc[1]);

                        arr.push(msg);
                    });

                    setVisible(true);
                    setErrorMessage(arr);
                }
            })
        }
    }

    return (
        <Template page="register">
            <div style={{backgroundColor:"#E9F3FF",height:"auto"}}>
                <div style={{padding:"111px 0"}}>
                    <div style={{display: "block", margin: "auto", width:"469px", backgroundColor:"#F6F6F6", borderRadius:"35px", boxShadow:"0px 4px 4px"}}>
                        <form style={{padding:"50px 40px"}}>
                            <h1 style={{textAlign:"center", fontSize:"28px"}}>Create Your <img src="https://i.ibb.co/w6cx7NZ/playyod-removebg-preview-1.png" alt="playyod"/> Account</h1>
                            {visible &&
                                <div style={{color: "red", fontSize: "16px", margin: "0"}}>
                                    <ul>
                                        {errorMessage.map((ele, i) =>
                                            <li key={i}>{ele}</li>
                                        )}
                                    </ul>
                                </div>
                            }
                            <div style={{paddingTop:"10px"}}>
                                <p style={{fontSize:"18px", color:"#185095"}}>Full name</p>
                                <input className="input" value={name} id="name" type="text" name="name" onChange={e => setName(e.target.value)} style={{padding:"5px", width:"384px", height:"44px", border: "0.5px solid #000000", borderRadius:"10px", boxShadow:"inset 2px 2px 2px rgba(0, 0, 0, 0.25)"}}/>
                            </div>
                            <div style={{paddingTop:"26px"}}>
                                <p style={{fontSize:"18px", color:"#185095"}}>Username</p>
                                <input className="input" value={username} id="username" type="text" name="username" onChange={e => {setUsername(e.target.value)}} style={{padding:"5px", width:"384px", height:"44px", border: "0.5px solid #000000", borderRadius:"10px", boxShadow:"inset 2px 2px 2px rgba(0, 0, 0, 0.25)"}}/>
                            </div>
                            <div style={{paddingTop:"26px"}}>
                                <p style={{fontSize:"18px", color:"#185095"}}>E-mail</p>
                                <input className="input" value={email} id="email" type="text" name="email" onChange={e => {setEmail(e.target.value)}} style={{padding:"5px", width:"384px", height:"44px", border: "0.5px solid #000000", borderRadius:"10px", boxShadow:"inset 2px 2px 2px rgba(0, 0, 0, 0.25)"}}/>
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
                                <p style={showConfirmPassword()}>Confirm Password</p>
                                <div style={{position:"relative"}}>
                                    <a onClick={checkOpenConfirmPassword} style={{right:"20px", position:"absolute",  paddingTop:"8px"}}>
                                        {iconConfirmPassword()}
                                    </a>
                                    <input className="input" value={confirmPassword} id="confirmPassword" type={typeConfirmPassword()} name="confirmPassword"  onChange={e => {setConfirmPassword(e.target.value); checkConfirmPassword(e.target.value)}} style={showInputConfirmPassword()}/>
                                </div>
                            </div>
                            <div style={{paddingTop:"52px", textAlign:"center"}}>
                                <button type="submit" onClick={handleSubmit} style={{fontSize:"20px", width:"205px", height:"38px", backgroundColor:"#4FA3A5", borderRadius:"20px", boxShadow:"2px 4px 6px 1px rgba(0, 0, 0, 0.5)"}}>
                                    <label>Create Account</label>
                                </button>
                            </div>
                        </form>
                        <div style={{color:"#185095", fontSize:"12px", justifyContent:"center", paddingBottom:"35px", display:"flex", paddingTop:"-5px"}}>
                            <p>Already have an Account?</p>
                            <Link href="/login">
                                <p style={{textDecoration: "underline", paddingLeft:"5px"}}>Login</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        </Template>
    )
}
