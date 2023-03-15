import React from 'react';
import crown from '../../public/crown.svg';
import Image from 'next/image'
export default function TopRecordTable(props){

    const columns = [
        {
            key: "name",
            label: "name",
        },
        {
            key: "players",
            label: "Peak Players",
        },
        {
            key: "time",
            label: "Time",
        },
    ];
    const rows = props.row;

    const orderBackground = (order) => {
        if (props.page == "topRecord") {
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
            return {borderRadius:"10px", width: "100%", display:"flex", height:"30px",paddingLeft:"3%", paddingRight:"3%"}
        }
    }

    const numberOne = (order) => {
        if (order=="1" && props.page=="topRecord"){
            return <Image src={crown} alt="icon-crown" style={{position:"absolute", marginLeft:"-15px", marginTop:"-8px"}} />
        }
    }
    if (!rows) {
        return null
    }

    return (
        <div style={{paddingTop:"17px",paddingLeft:"5%", paddingRight:"5%", color:props.color}}>
            <div style={{display:"flex"}}>
                <h5 style={{paddingLeft:"12%", width:"55%", fontSize:props.headerSize}}>name</h5>
                <h5 style={{width:"20%", textAlign:"center", fontSize:props.headerSize}}>Peak Player</h5>
                <h5 style={{width:"20%", textAlign:"center", fontSize:props.headerSize}}>Time</h5>
            </div>

            {rows.map((item) => (
                <div key={item.id}>
                    {numberOne(item.id)}
                    <div style={{paddingTop:"18px", fontSize:props.fontSize}}>
                        <div style={orderBackground(item.id)}>
                            <div style={{ width:"10%", margin:"auto"}}>
                                <h5 key={item.id}>{item.id}. </h5>
                                {/* INDEX */}
                            </div>
                            <div style={{ width:"50%", margin:"auto"}}>
                                <h5 key={item.id}>{item.name}</h5>
                                {/* NAME */}
                            </div>
                            <div style={{ width:"25%", margin:"auto", textAlign:"center"}}>
                                <h5 key={item.id}>{item.players.toLocaleString('en-US')}</h5>
                                {/* PLAYERS */}
                            </div>
                            <div style={{ width:"25%", margin:"auto", textAlign:"center"}}>
                                <h5 key={item.id}>{item.time}</h5>
                                {/* TIME */}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
