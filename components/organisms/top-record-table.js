import React from 'react';
import crown from '../../public/crown.svg';
import Image from 'next/image'
export default function TopRecordTable(){

    const columns = [
        {
            key: "GameName",
            label: "name",
        },
        {
            key: "PeakPlayer",
            label: "Peak Players",
        },
        {
            key: "Time",
            label: "Time",
        },
    ];
    const rows = [
        {
            key: "1",
            GameName: "PUBG",
            PeakPlayer: "3,236,027",
            Time: "Jan 2018"
        },
        {
            key: "2",
            GameName: "Lost Ark",
            PeakPlayer: "1,324,761",
            Time: "Feb 2022"
        },
        {
            key: "3",
            GameName: "Counter-Strike",
            PeakPlayer: "1,305,714",
            Time: "Apr 2020"
        },
        {
            key: "4",
            GameName: "Dota2",
            PeakPlayer: "1,291,328",
            Time: "Mar 2016"
        },
        {
            key: "5",
            GameName: "ELDEN RING",
            PeakPlayer: "952,523",
            Time: "Mar 2022"
        },
        {
            key: "6",
            GameName: "Game Name",
            PeakPlayer: "952,523",
            Time: "Mar 2022"
        },
        {
            key: "7",
            GameName: "Game Name",
            PeakPlayer: "952,523",
            Time: "Mar 2022"
        },
        {
            key: "8",
            GameName: "Game Name",
            PeakPlayer: "952,523",
            Time: "Mar 2022"
        },
        {
            key: "9",
            GameName: "Game Name",
            PeakPlayer: "952,523",
            Time: "Mar 2022"
        },
        {
            key: "10",
            GameName: "Game Name",
            PeakPlayer: "952,523",
            Time: "Mar 2022"
        },
    ];

    const orderBackground = (order) => {
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

    const numberOne = (order) => {
        if (order==="1"){
            return <Image src={crown} alt="icon-crown" style={{position:"absolute", marginLeft:"-15px", marginTop:"-8px"}} />
        }
    }

    return (
        <div style={{paddingTop:"17px",paddingLeft:"5%", paddingRight:"5%"}}>
            <div style={{display:"flex"}}>
                <h5 style={{paddingLeft:"6%", width:"45%", fontSize:"25px"}}>name</h5>
                <h5 style={{width:"30%", fontSize:"25px", textAlign:"center"}}>Peak Player</h5>
                <h5 style={{width:"25%", fontSize:"25px", textAlign:"center"}}>Time</h5>
            </div>
            {rows.map((item) => (
                <div>
                    {numberOne(item.key)}
                    <div style={{paddingTop:"18px"}}>
                        <div style={orderBackground(item.key)}>
                            <div style={{ width:"5%", margin:"auto"}}>
                                <h5 style={{fontSize:"35px"}} key={item.key}>{item.key}. </h5>
                            </div>
                            <div style={{ width:"45%", margin:"auto"}}>
                                <h5 style={{fontSize:"35px"}} key={item.key}>{item.GameName}</h5>
                            </div>
                            <div style={{ width:"30%", margin:"auto", textAlign:"center"}}>
                                <h5 style={{fontSize:"35px"}} key={item.key}>{item.PeakPlayer}</h5>
                            </div>
                            <div style={{ width:"25%", margin:"auto", textAlign:"center"}}>
                                <h5 style={{fontSize:"35px"}} key={item.key}>{item.Time}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}