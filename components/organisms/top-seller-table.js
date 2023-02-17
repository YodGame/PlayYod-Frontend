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

    const rows = [
        {
            key: "1",
            Rank: "PUBG",
        },
        {
            key: "2",
            Rank: "Lost Ark",
        },
        {
            key: "3",
            Rank: "Counter-Strike",
        },
        {
            key: "4",
            Rank: "Dota2",
        },
        {
            key: "5",
            Rank: "ELDEN RING",
        },
        {
            key: "6",
            Rank: "Game Name",
        },
        {
            key: "7",
            Rank: "Game Name",
        },
        {
            key: "8",
            Rank: "Game Name",
        },
        {
            key: "9",
            Rank: "Game Name",
        },
        {
            key: "10",
            Rank: "Game Name",
        },
    ];

    const orderBackground = (order) => {
        if (props.page === "topSeller") {
            switch (order) {
                case "1":
                    return { backgroundColor:"#F75435", borderRadius:"10px", width: "100%", display:"flex", height:"81px",paddingLeft:"3%", paddingRight:"3%"}
                case "2":
                    return { backgroundColor:"#FDAE38", borderRadius:"10px", width: "100%", display:"flex", height:"81px",paddingLeft:"3%", paddingRight:"3%"}
                case "3":
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
        if (order==="1" && props.page==="topSeller"){
            return <Image src={crown} alt="icon-crown" style={{position:"absolute", marginLeft:"-15px", marginTop:"-8px"}} />
        }
    }

    return (
        <div style={{paddingTop:"17px",paddingLeft:"5%", paddingRight:"5%", color:props.color}}>
            <div style={{display:"flex"}}>
                {columns.map((item) => (
                    <h5 style={{paddingLeft:"6%", width:"40%", fontSize:props.headerSize}}>{item.label}</h5>
                ))}
            </div>
            {rows.map((item, index) => (
                <div key={index}>
                    {numberOne(item.key)}
                    <div style={{paddingTop:"18px", fontSize:props.fontSize}}>
                        <div style={orderBackground(item.key)}>
                            <div style={{ width:"10%", margin:"auto"}}>
                                <h5 key={item.key}>{item.key}. </h5>
                            </div>
                            <div style={{ width:"95%", margin:"auto"}}>
                                <h5 key={item.key}>{item.Rank}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
