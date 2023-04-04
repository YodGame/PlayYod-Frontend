import Template from "@/components/layouts/template";
import React, {useState} from 'react'
import Row from "react-bootstrap/Row";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("email :" ,email)
    }
    return (
        <Template>
            <div style={{backgroundColor:"#E9F3FF",height:"100vh"}}>
                <container style={{backgroundColor:"#E9F3FF",width:"100%" , height:"100%",display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{width:469,height:612,backgroundColor:"white",borderRadius:35}}>
                        <img style={{margin:50,marginBottom:30,marginLeft:"40%"}} src="https://i.ibb.co/w6cx7NZ/playyod-removebg-preview-1.png" alt="playyod-removebg-preview-1" width={110} height={50} />
                        <Row style={{marginLeft:"25%"}}>
                            <a style={{fontSize:"25px"}}>Forgot Your Password</a>
                        </Row>
                        <Row style={{marginLeft:"25%",marginTop:"40px"}}>
                            <a>Please enter your email address </a>
                        </Row>
                        <Row style={{marginLeft:"12%"}}>
                            <a>and we will send code to reset your password</a>
                        </Row>
                        <Row style={{marginLeft:"8%",marginBottom:30,paddingTop:"40px"}}>
                            <a style={{color:"#185095"}} >E-mail address</a>
                            <input style={{backgroundColor:"white",width:384,height:44,borderRadius:10}}
                                   type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </Row>

                        <Row style={{marginTop:50,marginLeft:"25%"}}>
                            <form onSubmit={handleSubmit} >
                                <button onClick={() => window.location.href='/resetCode'} style={{backgroundColor:"#4FA3A5",color:"white",width:205,height:38,borderRadius:20,boxShadow: "2px 2px 5px  rgba(0, 0, 0, 0.25)"}}>Submit</button>
                            </form>
                        </Row>
                        <Row style={{marginTop:20,marginLeft:"28%"}}>
                            <button onClick={() => window.location.href='/login'} style={{backgroundColor:"white",color:"#4FA3A5",width:205,height:38,borderRadius:20,boxShadow: "2px 2px 5px  rgba(0, 0, 0, 0.25)"}}>cancel</button>
                        </Row>
                    </div>
                </container>
            </div>
        </Template>
    )
}
