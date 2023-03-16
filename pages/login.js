import Template from "@/components/layouts/template";
import React, {useState} from 'react'
import Row from "react-bootstrap/Row";

export default function Geography() {
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [visible] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("username :" ,username)
        console.log("password :" ,password)

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
                            {visible &&  <a>Incorrect username or password</a>}
                        </Row>
                        <Row style={{marginLeft:"8%",marginBottom:30}}>
                            <input style={{backgroundColor:"#F0F1F1",width:384,height:44,borderRadius:10}}
                                   placeholder={"username or E-mail"} type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </Row>
                        <Row style={{marginLeft:"8%"}}>
                            <input style={{backgroundColor:"#F0F1F1",width:384,height:44,borderRadius:10}}
                                placeholder={"password"} type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </Row>
                        <Row style={{fontSize:"12px",marginLeft:"66%"}}>
                            <a style={{color:"#185095"}}>Forgot Password?</a>
                        </Row>
                        <Row style={{marginTop:30,marginLeft:"25%"}}>
                            <form onSubmit={handleSubmit} >
                                <button style={{backgroundColor:"#185095",color:"white",width:205,height:38,borderRadius:20}}> Login </button>
                            </form>
                        </Row>
                        <Row style={{marginLeft:"45%" ,color:"#185095",marginTop:15,marginBottom:15,fontSize:"15px"}}>
                            <label>Or</label>
                        </Row>
                        <Row style={{color:"#185095",marginLeft:"35%"}}>
                            <label><u>Create Account</u></label>
                        </Row>
                    </div>
                </container>
            </div>
        </Template>
    )
}
