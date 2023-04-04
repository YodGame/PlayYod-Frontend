import React from 'react'

export default function Rating_table(props) {

    const columns = [
        {
            key: "name",
            label: "name",
        },
        {
            key: "review",
            label: "Review",
        },
        {
            key: "review count",
            label: "Review Count",
        },
    ];

    const data = props.data;
    // [{name: "game", review: "Positive", reviewcount: 20000},
    //             {name: "game", review: "Very Positive", reviewcount: 20000},
    //             {name: "game", review: "Mixed", reviewcount: 20000}
    //         ];

    const reviewAddColor =(level)=>{
        switch(level){
            case "Overwhelmingly Positive": 
                return{color:"#377A8F",fontSize:"16px"}
            case "Very Positive": 
                return{color:"#4FA586",fontSize:"16px"}
            case "Positive": return{color:"#4FA552",fontSize:"16px"}
            case "Mostly Positive": return{color:"#84A54F",fontSize:"16px"}
            case "Mixed": return{color:"#C4C167",fontSize:"16px"}
            case "Positive": return{color:"#FDAE58",fontSize:"16px"}
            case "Negative": return{color:"#AC0202",fontSize:"16px"}
            case "Very Negative": return{color:"#",fontSize:"16px"}
            case "Overwhelmingly Negative": return{color:"#780202",fontSize:"16px"}
            default:return{}
        }
    }


    return (
        <div style={{paddingTop:"70px"}}>
            
            <div style={{backgroundColor:"#F6F6F6", borderRadius:"10px 19px 10px 10px",paddingTop:"2%",paddingBottom:"20px"}}>

                <div style={{display:"flex"}}>
                <h5 style={{paddingLeft:"6%", width:"65%", fontSize:props.headerSize}}>name</h5>
                <h5 style={{width:"35%", textAlign:"center", fontSize:props.headerSize}}>Review</h5>
                <h5 style={{width:"40%", textAlign:"center", fontSize:props.headerSize}}>Review Count</h5>
            </div>

                {data.map((data) => (
                    <div style={{ height: "auto", width: "100%"}}>
                        {/* <div style={{paddingTop:"17px", paddingBottom:"17px"}}> */}
                            {/* {rows.map((item, index) => ( */}
                            <div style={{paddingTop:"12px", paddingRight:"4%", paddingLeft:"4%"}} >
                                <div style={{ backgroundColor:"white", borderRadius:"10px", width: "100%", display:"flex", minHeight:"80px",paddingLeft:"3%", paddingRight:"3%", height:"auto"}} >

                                    <div style={{ width:"60%", margin:"auto"}}>
                                        <h5 style={{fontSize:"16px", color:"black"}}>{data.name}</h5>{/* rank {item.name}*/}
                                    </div>

                                    <div style={{ width:"40%", margin:"auto", textAlign:"center"}}>
                                        <h5 style={reviewAddColor(data.review)}>{data.review}</h5>{/* Country {item.review}*/}
                                    </div>

                                    <div style={{ width:"30%", margin:"auto", textAlign:"center"}}>
                                        <h5 style={{fontSize:"16px", color:"black"}}>{data.all}</h5>{/* PLayer {item.review count}*/}
                                    </div>

                                </div>
                            </div>
                            {/* ))} */}
                        </div>
                    // </div>
                ))}
        </div>
    </div>
    )
    // props = rank, country, player
}
