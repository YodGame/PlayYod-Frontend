import React from 'react'
export default function Rating_table(props) {

    const arrowColor = (statusPlayer) => {
        if (statusPlayer==="down") {
            return <div style={{ width:"0px", height:"px", borderLeft: "10px solid transparent", borderRight: "10px solid transparent", borderTop: "10px solid #F45D48"}}></div>
        }
        else {
            return <div style={{ width:"0px", height:"0px", borderLeft: "10px solid transparent", borderRight: "10px solid transparent", borderBottom: "10px solid #22CC13"}}></div>
        }
    }
    const formatNumber = (number) => {
        return number.toLocaleString()
    }

    return (
        <div style={{paddingTop:"213px"}}>
            <div style={{backgroundColor:"#F6F6F6", borderRadius:"10px 19px 0px 0px"}}>
                {props.data.map((data, index) => (
                    <div style={{ height: "auto", width: "100%"}}>
                        <div style={{paddingTop:"17px", paddingBottom:"17px"}}>
                            {/* {rows.map((item, index) => ( */}
                            <div style={{paddingTop:"12px", paddingRight:"4%", paddingLeft:"4%"}} >
                                <div style={{ backgroundColor:"white", borderRadius:"10px", width: "100%", display:"flex", minHeight:"80px",paddingLeft:"3%", paddingRight:"3%", height:"auto"}} >

                                    <div style={{ width:"5%", margin:"auto"}}>
                                        <h5 style={{fontSize:"16px", color:"black"}}>{index+4}</h5>{/* rank {item.order}*/}
                                        {arrowColor("up")}
                                    </div>

                                    <div style={{ width:"65%", margin:"auto", textAlign:"center"}}>
                                        <h5 style={{fontSize:"16px", color:"black"}}>{data.name}</h5>{/* Country {item.country}*/}
                                    </div>

                                    <div style={{ width:"30%", margin:"auto", textAlign:"center"}}>
                                        <h5 style={{fontSize:"16px", color:"black"}}>{formatNumber(data.users)}</h5>{/* PLayer {item.player}*/}
                                    </div>

                                </div>
                            </div>
                            {/* ))} */}
                        </div>
                    </div>
                ))}
        </div>
    </div>
    )
    // props = rank, country, player
}
