import React from 'react';
import crown from '../../public/crown.svg';
import Image from 'next/image'
export default function TopPlayersTable(props){

    const columns = [
        {
            key: "name",
            label: "name",
        },
        {
            key: "players",
            label: "players",
        },

    ];
    const rows = props.row;

    const orderBackground = (order) => {
        if (props.page === "topPlayersToday") {
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
        if (order==="1" && props.page==="topPlayersToday"){
            return <Image src={crown} alt="icon-crown" style={{position:"absolute", marginLeft:"-15px", marginTop:"-8px"}} />
        }
    }
    if (!rows) {
        return null
    }

    return (
        <div style={{paddingTop:"17px",paddingLeft:"5%", paddingRight:"5%", color:props.color}}>
            <div style={{display:"flex"}}>
                <h5 style={{paddingLeft:"20%", width:"55%", fontSize:props.headerSize}}>Name</h5>
                <h5 style={{paddingLeft:"23%",width:"45%", fontSize:props.headerSize}}>Peak Players</h5>
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
                                <h5 key={item.id}>{item.players.toLocaleString()}</h5>
                                {/* PLAYERS */}
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
