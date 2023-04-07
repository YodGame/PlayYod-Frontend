import React from "react";
import Template from "@/components/layouts/template";
import { BsChatRight } from "react-icons/bs";
import {BiLike} from "react-icons/bi";
import {RiUserFill} from "react-icons/ri";

function MentionAndTag() {

    const data = [
        {
            user: "GreenPandaSauce",
            game: "PUBATTLEGROUNDS",
            type: "Discussion",
            topic: "Not having a solid squad in this game is such a deal breaker. Agree or disagree?",
            image: "",
            like: 82,
            message: 56,
        },
        {
            user: "GreenPandaSauce",
            game: "PUBGConsole",
            type: "Official Post",
            topic: "Not having a solid squad in this game is such a deal breaker. Agree or disagree?",
            image: "https://editors.dexerto.com/wp-content/uploads/2022/05/20/Valorant-series.jpg",
            like: 82,
            message: 56,
        },
        {
            user: "GreenPandaSauce",
            game: "PUBATTLEGROUNDS",
            type: "Venting",
            topic: "Not having a solid squad in this game is such a deal breaker. Agree or disagree?",
            image: "https://editors.dexerto.com/wp-content/uploads/2022/05/20/Valorant-series.jpg",
            like: 82,
            message: 56,
        },
        {
            user: "GreenPandaSauce",
            game: "PUBATTLEGROUNDS",
            type: "Meta",
            topic: "Not having a solid squad in this game is such a deal breaker. Agree or disagree?",
            image: "https://editors.dexerto.com/wp-content/uploads/2022/05/20/Valorant-series.jpg",
            like: 82,
            message: 56,
        },
        {
            user: "GreenPandaSauce",
            game: "PUBATTLEGROUNDS",
            type: "Creative",
            topic: "Not having a solid squad in this game is such a deal breaker. Agree or disagree?",
            image: "https://editors.dexerto.com/wp-content/uploads/2022/05/20/Valorant-series.jpg",
            like: 82,
            message: 56,
        },
    ]

    const buttonType = (type) => {
        if (type === "Discussion") {
            return (
                <button style={{fontSize:"8px", border:"1px solid", borderRadius:"50px", borderColor:"#CE5A04", backgroundColor:"#CE5A04"}}>
                    <label style={{color:"white", padding:"3px"}}>
                        {type}
                    </label>
                </button>
            )
        } else if (type === "Official Post") {
            return (
                <button style={{fontSize:"8px", border:"1px solid", borderRadius:"50px", borderColor:"#F2A900", backgroundColor:"#F2A900"}}>
                    <label style={{color:"white", padding:"3px"}}>
                        {type}
                    </label>
                </button>
            )
        } else if (type === "Venting") {
            return (
                <button style={{fontSize:"8px", border:"1px solid", borderRadius:"50px", borderColor:"#C32640", backgroundColor:"#C32640"}}>
                    <label style={{color:"white", padding:"3px"}}>
                        {type}
                    </label>
                </button>
            )
        } else if (type === "Creative") {
            return (
                <button style={{fontSize:"8px", border:"1px solid", borderRadius:"50px", borderColor:"#7700FF", backgroundColor:"#7700FF"}}>
                    <label style={{color:"white", padding:"3px"}}>
                        {type}
                    </label>
                </button>
            )
        }   else if (type === "Meta") {
            return (
                <button style={{
                    fontSize: "8px",
                    border: "1px solid",
                    borderRadius: "50px",
                    borderColor: "#646D73",
                    backgroundColor: "#646D73",
                }}>
                    <label style={{color: "white", padding: "3px"}}>
                        {type}
                    </label>
                </button>
            )
        }
    }

    const checkImage = (image) => {
        if (image !== "") {
            return (
                <img src={image} width={"283px"} height={"283px"} style={{borderRadius:"10px"}}/>
            )
        }
    }

    return (
        <Template>
            <div style={{backgroundColor:"white"}}>
                <div style={{padding:30,color:"#185095"}}>
                    <h1 style={{paddingLeft:'4vw'}}><b>Mention&Tag</b></h1>
                        <div style={{backgroundColor:"#ECE1FE",borderRadius:30,display:"flex"}}>
                            <div style={styles.pin_container}>
                            {/*เลขหลังspan คือจุดสิ้นสุดrow akaความยาวของ box*/}
                                {data.map(data => (
                                        <div style={{...styles.card,gridRowEnd: 'span 80'}}>
                                            <div style={{padding:"15px 25px"}}>
                                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                                    <div>
                                                        <RiUserFill color={"#9C9A9A"}/>
                                                        <label style={{color:"#9C9A9A", fontSize:"13px"}}>{data.user}</label>
                                                    </div>
                                                    <div>
                                                        <button style={{fontSize:"8px", border:"1px solid", borderRadius:"50px", borderColor:"#5A81B1", backgroundColor:"white" , marginRight:"3px"}}>
                                                            <label style={{color:"#5A81B1", padding:"3px"}}>
                                                                {data.game}
                                                            </label>
                                                        </button>
                                                        {buttonType(data.type)}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h2 style={{fontSize:"25px", color:"#000000"}}>
                                                        {data.topic}
                                                    </h2>
                                                </div>
                                                <div>
                                                    {checkImage(data.image)}
                                                </div>
                                                <hr style={{border: "1px solid #B3B3B3"}} width={"289.01px"} align={"center"} color={"#B3B3B3"}/>
                                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                                    <div>
                                                        <BiLike color={"#856FF7"}/>
                                                        <label style={{paddingLeft: "3px"}}>{data.like}</label>
                                                    </div>
                                                    <div>
                                                        <BsChatRight color={"#856FF7"}/>
                                                        <label style={{paddingLeft: "3px"}}>{data.message}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )}

                            <div style={{...styles.card,gridRowEnd: 'span 50'}}>
                            </div>
                            <div style={{...styles.card,gridRowEnd: 'span 70'}}>
                            </div>
                            <div style={{...styles.card,gridRowEnd: 'span 80'}}>
                            </div>
                            <div style={{...styles.card,gridRowEnd: 'span 50'}}>
                            </div>
                            <div style={{...styles.card,gridRowEnd: 'span 70'}}>
                            </div>
                            <div style={{...styles.card,gridRowEnd: 'span 80'}}>
                            </div>
                            <div style={{...styles.card,gridRowEnd: 'span 50'}}>
                            </div>
                            <div style={{...styles.card,gridRowEnd: 'span 70'}}>
                            </div>
                            <div style={{...styles.card,gridRowEnd: 'span 80'}}>
                            </div>
                            <div style={{...styles.card,gridRowEnd: 'span 50'}}>
                            </div>
                            <div style={{...styles.card,gridRowEnd: 'span 70'}}>
                            </div>
                            <div style={{...styles.card,gridRowEnd: 'span 80'}}>
                            </div>
                            <div style={{...styles.card,gridRowEnd: 'span 50'}}>
                            </div>
                            <div style={{...styles.card,gridRowEnd: 'span 70'}}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    );
}

const styles = {
    pin_container: {
        justifyContent:"center",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 348px)",
        gridAutoRows: "10px",
        marginTop:"1%"

    },
    card: {
       margin: "15px 10px",
        padding: 0,
        borderRadius: "16px",
        backgroundColor: "white",

    }
};

export default MentionAndTag;
