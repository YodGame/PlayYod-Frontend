import Template from "@/components/layouts/template";
import React from "react";
import TopRecordTable from "@/components/organisms/top-record-table";
import Link from "next/link";
import {Button} from "react-bootstrap";
import {BsArrowRight} from "react-icons/bs";
import LoginHistoryTable from "@/components/organisms/login-history-table";


export default function loginHistory() {
    return (
        <Template>
            <h1 style={{fontSize:"30px", paddingLeft:"5%", paddingTop:"23px"}}>Login History</h1>
            <div style={{padding:30}}>
                <div style={{width:"100%",height:"100%",paddingLeft:"10px"}}>
                    <div style={{backgroundColor:"#E9F3FF", borderRadius:"30px", paddingBottom:"15px"}}>
                        <LoginHistoryTable></LoginHistoryTable>
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
