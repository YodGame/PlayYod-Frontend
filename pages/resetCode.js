import Template from "@/components/layouts/template";
import React from 'react'
import Row from "react-bootstrap/Row";
import tikcircle from 'public/tickcircle.png';
import Image from "next/image";

export default function ResetCode() {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <Template>
            <div style={{backgroundColor:"#E9F3FF",height:"100vh"}}>
                <container style={{backgroundColor:"#E9F3FF",width:"100%" , height:"100%",display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{width:469,height:612,backgroundColor:"white",borderRadius:35}}>
                        <Image style={{margin:50,marginBottom:30,marginLeft:"45%"}} src={tikcircle} alt="tikcircle" width={73} height={73} />
                        <Row style={{marginLeft:"20%"}}>
                            <a style={{fontSize:"25px"}}>Password reset Email sent</a>
                        </Row>
                        <Row style={{marginLeft:"20%",marginTop:"40px"}}>
                            <a>Please enter code that sent to E-mail </a>
                        </Row>
                        <Row style={{marginLeft:"35%"}}>
                            <a>ergare@gmail.com</a>
                        </Row>
                        <Row style={{marginLeft:"20%",marginBottom:10,paddingTop:"50px",gap:"18px"}}>
                            <input style={{backgroundColor:"white",width:60,height:60,borderRadius:10,fontSize:"35px",padding:"4%"}}/>
                            <input style={{backgroundColor:"white",width:60,height:60,borderRadius:10,fontSize:"35px",padding:"4%"}}/>
                            <input style={{backgroundColor:"white",width:60,height:60,borderRadius:10,fontSize:"35px",padding:"4%"}}/>
                            <input style={{backgroundColor:"white",width:60,height:60,borderRadius:10,fontSize:"35px",padding:"4%"}}/>
                        </Row>
                        <Row style={{fontSize:"12px",marginLeft:"66%"}}>
                            <a style={{color:"#185095"}} >send again?</a>
                        </Row>
                        <Row style={{marginTop:50,marginLeft:"25%"}}>
                            <form onSubmit={handleSubmit} >
                                <button onClick={() => window.location.href='newPassword'} style={{backgroundColor:"#4FA3A5",color:"white",width:205,height:38,borderRadius:20,boxShadow: "2px 2px 5px  rgba(0, 0, 0, 0.25)"}}>Confirm</button>
                            </form>
                        </Row>
                        <Row style={{marginTop:20,marginLeft:"28%"}}>
                            <button onClick={() => window.location.href='/forgotPassword'} style={{backgroundColor:"white",color:"#4FA3A5",width:205,height:38,borderRadius:20,boxShadow: "2px 2px 5px  rgba(0, 0, 0, 0.25)"}}>cancel</button>
                        </Row>
                    </div>
                </container>
            </div>
        </Template>
    )
}
