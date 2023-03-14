import Image from "next/image";
import crown from "@/public/crown.svg";
import React from "react";

export default function TopSellerTable(props){

    const columns = [
        {
            key: "GameName",
            label: "Rank",
        },
    ];

    const rows = props.row;

    const orderBackground = (order) => {
        if (props.page === "topSeller") {
            switch (order) {
                case 1:
                    return { backgroundColor:"#F75435", borderRadius:"10px", width: "100%", display:"flex", height:"81px",paddingLeft:"3%", paddingRight:"3%"}
                case 2:
                    return { backgroundColor:"#FDAE38", borderRadius:"10px", width: "100%", display:"flex", height:"81px",paddingLeft:"3%", paddingRight:"3%"}
                case 3:
                    return { backgroundColor:"#4FA3A5", borderRadius:"10px", width: "100%", display:"flex", height:"81px",paddingLeft:"3%", paddingRight:"3%"}
                default:
                    return { backgroundColor:"white", borderRadius:"10px", width: "100%", display:"flex", height:"81px",paddingLeft:"3%", paddingRight:"3%"}
            }
        }
        else {
            return { borderRadius:"10px", width: "100%", display:"flex", height:"30px",paddingLeft:"3%", paddingRight:"3%"}
        }
    }

    const numberOne = (order) => {
        if (order=="1" && props.page=="topSeller"){
            return <Image src={crown} alt="icon-crown" style={{position:"absolute", marginLeft:"-15px", marginTop:"-8px"}} />
        }
    }

    if(props.row == null){
        return null;
    }
    
    return (
        <div style={{paddingTop:"17px",paddingLeft:"5%", paddingRight:"5%", color:props.color}}>
            <div style={{display:"flex"}}>
                {columns.map((item) => (
                    <h5 style={{paddingLeft:"6%", width:"40%", fontSize:props.headerSize}}>{item.label}</h5>
                ))}
            </div>
            {rows.map((item, index ) => (
                <div key={index}>
                    {numberOne(item.id)}
                    <div style={{paddingTop:"18px", fontSize:props.fontSize}}>
                        <div style={orderBackground(item.id)}>
                            <div style={{ width:"10%", margin:"auto"}}>
                                <h5 key={item.id}>{item.id}. </h5>
                                {/* index */}
                            </div>
                            <div style={{ width:"95%", margin:"auto"}}>
                                <h5 key={item.key}>{item.name}</h5>
                                {/* Rank */}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
