import React from 'react';
import crown from '../../public/crown.svg';
import Image from 'next/image';
import moment from 'moment';

export default function LoginHistoryTable(props){

    const columns = [
        {
            key: "date",
            label: "date",
        },
        {
            key: "time",
            label: "time",
        },
        {
            key: "browser",
            label: "Browsers",
        },
        {
            key: "ipaddress",
            label: "IPAddress",
        },
    ];
    const rows = props.row;

    return (
        <div style={{paddingTop:"17px",paddingLeft:"5%", paddingRight:"5%", color:props.color,marginBottom:"10px"}}>
            <div style={{display:"flex"}}>
                <h3 style={{paddingLeft:"3%", width:"25%", fontSize:props.headerSize}}>date</h3>
                <h3 style={{width:"25%", textAlign:"center", fontSize:props.headerSize}}>time</h3>
                <h3 style={{width:"25%", textAlign:"center", fontSize:props.headerSize}}>Browser</h3>
                <h3 style={{width:"25%", textAlign:"center", fontSize:props.headerSize}}>IP Address</h3>
            </div>
            <div style={{backgroundColor:"white", borderRadius:"20px", width: "100%", height:"150px",paddingLeft:"3%", paddingRight:"3%",marginBottom:"10px"}}>
                <div style={{display:"flex",paddingTop:"3%",}}>
                    <h4 style={{paddingLeft:"0%", width:"25%", fontSize:props.headerSize}}>22/03/2023</h4>
                    <h4 style={{width:"24%", textAlign:"center", fontSize:props.headerSize}}>05:23 <br/><br/> 08:59</h4>
                    <h4 style={{width:"25%", textAlign:"center", fontSize:props.headerSize}}>safari <br/><br/> safari</h4>
                    <h4 style={{paddingLeft:"5%",width:"25%", textAlign:"center", fontSize:props.headerSize}}>49.229.200.145 <br/><br/>49.229.200.145 </h4>
                </div>
            </div>
            <div style={{backgroundColor:"white", borderRadius:"20px", width: "100%", height:"150px",paddingLeft:"3%", paddingRight:"3%",marginBottom:"10px"}}>
                <div style={{display:"flex",paddingTop:"3%",}}>
                    <h4 style={{paddingLeft:"0%", width:"25%", fontSize:props.headerSize}}>23/03/2023</h4>
                    <h4 style={{width:"24%", textAlign:"center", fontSize:props.headerSize}}>05:23 <br/><br/> 08:59</h4>
                    <h4 style={{width:"25%", textAlign:"center", fontSize:props.headerSize}}>safari <br/><br/> safari</h4>
                    <h4 style={{paddingLeft:"5%",width:"25%", textAlign:"center", fontSize:props.headerSize}}>49.229.200.145 <br/><br/>49.229.200.145 </h4>
                </div>
            </div>
            <div style={{backgroundColor:"white", borderRadius:"20px", width: "100%", height:"150px",paddingLeft:"3%", paddingRight:"3%",marginBottom:"10px"}}>
                <div style={{display:"flex",paddingTop:"3%",}}>
                    <h4 style={{paddingLeft:"0%", width:"25%", fontSize:props.headerSize}}>24/03/2023</h4>
                    <h4 style={{width:"24%", textAlign:"center", fontSize:props.headerSize}}>05:23 <br/><br/> 08:59</h4>
                    <h4 style={{width:"25%", textAlign:"center", fontSize:props.headerSize}}>safari <br/><br/> safari</h4>
                    <h4 style={{paddingLeft:"5%",width:"25%", textAlign:"center", fontSize:props.headerSize}}>49.229.200.145 <br/><br/>49.229.200.145 </h4>
                </div>
            </div>
            <div style={{backgroundColor:"white", borderRadius:"20px", width: "100%", height:"150px",paddingLeft:"3%", paddingRight:"3%",marginBottom:"10px"}}>
                <div style={{display:"flex",paddingTop:"3%",}}>
                    <h4 style={{paddingLeft:"0%", width:"25%", fontSize:props.headerSize}}>25/03/2023</h4>
                    <h4 style={{width:"24%", textAlign:"center", fontSize:props.headerSize}}>05:23 <br/><br/> 08:59</h4>
                    <h4 style={{width:"25%", textAlign:"center", fontSize:props.headerSize}}>safari <br/><br/> safari</h4>
                    <h4 style={{paddingLeft:"5%",width:"25%", textAlign:"center", fontSize:props.headerSize}}>49.229.200.145 <br/><br/>49.229.200.145 </h4>
                </div>
            </div>
        </div>
    )
}
