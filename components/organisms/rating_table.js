import React from 'react'
export default function Rating_table() {


    const columns = [
        {
            key: "order",
            label: "Order",
        },
        {
            key: "country",
            label: "Country",
        },
        {
            key: "player",
            label: "Player today",
        },
        {
            key: "statusPlayer",
            label: "Status player",
        },
    ];
    const rows = [
        {
            key: "4",
            order: "4",
            country: "Country4",
            player: "Player",
            statusPlayer: "up",
        },
        {
            key: "5",
            order: "5",
            country: "Country5",
            player: "Player",
            statusPlayer: "up",
        },
        {
            key: "6",
            order: "6",
            country: "Country6",
            player: "Player",
            statusPlayer: "down",
        },
        {
            key: "7",
            order: "7",
            country: "Country7",
            player: "Player",
            statusPlayer: "up",
        },
        {
            key: "8",
            order: "8",
            country: "Country8",
            player: "Player",
            statusPlayer: "up",
        },
        {
            key: "9",
            order: "9",
            country: "Country9",
            player: "Player",
            statusPlayer: "down",
        },
        {
            key: "10",
            order: "10",
            country: "Country10",
            player: "Player",
            statusPlayer: "down",
        },
    ];

    const arrowColor = (statusPlayer) => {
        if (statusPlayer==="down") {
            return <div style={{ width:"0px", height:"px", borderLeft: "10px solid transparent", borderRight: "10px solid transparent", borderTop: "10px solid #F45D48"}}></div>
        }
        else {
            return <div style={{ width:"0px", height:"0px", borderLeft: "10px solid transparent", borderRight: "10px solid transparent", borderBottom: "10px solid #22CC13"}}></div>
        }
    }

    return (
        <div style={{paddingTop:"213px"}}>
            <div style={{ height: "auto", width: "100%", backgroundColor:"#F6F6F6", borderRadius:"10px 19px 0px 0px"}}>
                <div style={{paddingTop:"17px"}}>
                    {rows.map((item) => (
                        <div style={{paddingTop:"12px", paddingRight:"4%", paddingLeft:"4%"}}>
                            <div style={{ backgroundColor:"white", borderRadius:"10px", width: "100%", display:"flex", height:"80px",paddingLeft:"3%", paddingRight:"3%"}} >
                                <div style={{ width:"5%", margin:"auto"}}>
                                    <h5 style={{fontSize:"16px"}} key={item.key}>{item.order}</h5>
                                    {arrowColor(item.statusPlayer)}
                                </div>
                                <div style={{ width:"65%", margin:"auto", textAlign:"center"}}>
                                    <h5 style={{fontSize:"16px"}} key={item.key}>{item.country}</h5>
                                </div>
                                <div style={{ width:"30%", margin:"auto", textAlign:"center"}}>
                                    <h5 style={{fontSize:"16px"}} key={item.key}>{item.player}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
