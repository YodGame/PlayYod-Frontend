import Template from "@/components/layouts/template";
import React from "react";
import Link from "next/link";
import LoginHistoryTable from "@/components/organisms/login-history-table";


export default function loginHistory() {
    return (
        <Template>
            <h1 style={{fontSize:"30px",color:"black", paddingLeft:"5%", paddingTop:"23px"}}>Login History</h1>
            <div style={{padding:30}}>
                <div style={{width:"100%",color:"black",height:"100%",paddingLeft:"10px"}}>
                    <div style={{backgroundColor:"#E9F3FF", borderRadius:"30px", paddingBottom:"15px"}}>
                        <LoginHistoryTable/>
                        <div style={{ textAlign:"center", paddingTop:"13px"}}>
                            <Link href="/loginHistory">
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    )
}
