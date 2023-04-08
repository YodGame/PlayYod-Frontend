import React from "react";
import Template from "@/components/layouts/template";
import {useState, useEffect} from 'react'
import axios from 'axios';
import { API_URL } from "@/config";
import {RiUserFill} from "react-icons/ri";
import {BiLike} from "react-icons/bi";
import {BsChatRight} from "react-icons/bs";

function MentionAndTag() {

    const [data, setData] = useState([]);
    const [post, setPost] = useState([]);


    function search() {
        var inputdata = document.getElementById('searchbar').value;
        console.log(inputdata);
        axios.get(API_URL + "mentions/search?keyword=" + inputdata)
            .then(response => {
                const newData = response.data.map((item, index) => {
                    return {
                        id: index + 1,
                        ...item
                    };
                });
                setPost(newData);
                console.log(post);
            })
            .catch(error => console.log(error));
    }
        
    

    useEffect(() => {
        axios.get(API_URL + "mentions/search?keyword=game|gaming")
            .then(response => {
                const newData = response.data.map((item, index) => {
                    return {
                        id: index + 1,
                        ...item
                    };
                });
                setPost(newData);
                console.log(post);
            })
            .catch(error => console.log(error));
    }, []);


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
        if (image !== null) {
            return (
                <img src={image} width={"283px"} height={"283px"} style={{borderRadius:"10px"}}/>
            )
        }
    }

    return (
        <Template>
            <div style={{backgroundColor:"white"}}>
                <div style={{padding:30,color:" #185095"}}>

                    <div style={{float:"right"}}>
                        <input id="searchbar" type="text" placeholder="Search.."/>
                        <button onClick={()=>search()} type="submit">Submit</button>
                    </div>

                    <h1 style={{paddingLeft:'4vw'}}><b>Mention&Tag</b></h1>
                    
                    <div style={{backgroundColor:"#ECE1FE",borderRadius:30,display:"flex"}}>
                        <div style={styles.pin_container}>
                        {/*เลขหลังspan คือจุดสิ้นสุดrow akaความยาวของ box*/}
                            {post.map(data => (
                                    <div style={{...styles.card,gridRowEnd: 'span 80'}}>
                                        {/* For open new tan when click since at top box to image*/}
                                        <div style={{padding:"15px 25px"}} onClick={()=> window.open(data.url, "_blank")}>
                                            <div style={{display:"flex", justifyContent:"space-between"}} >
                                                <div>
                                                    {/* author */}
                                                    <RiUserFill color={"#9C9A9A"}/>
                                                    <label style={{color:"#9C9A9A", fontSize:"13px"}}>{data.author}</label>
                                                </div>
                                                <div>
                                                    {/* subreddit */}
                                                    <button style={{fontSize:"8px", border:"1px solid", borderRadius:"50px", borderColor:"#5A81B1", backgroundColor:"white" , marginRight:"3px"}}>
                                                        <label style={{color:"#5A81B1", padding:"3px"}}>
                                                            {data.subreddit}
                                                        </label>
                                                    </button>
                                                    {/* flair_name */}
                                                    {buttonType(data.flair_name)}
                                                </div>
                                            </div>

                                            <div>
                                                {/* title */}
                                                <h2 style={{fontSize:"20px", color:"#000000", width:'285px'}}>
                                                    {data.title}
                                                </h2>
                                            </div>
                                            <div>
                                                {/* thumbnail  */}
                                                {checkImage(data.thumbnail)}
                                            </div>

                                            <hr style={{border: "1px solid #B3B3B3"}} width={"289.01px"} align={"center"} color={"#B3B3B3"}/>
                                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                                <div>
                                                    {/* ups */}
                                                    <BiLike color={"#856FF7"}/>
                                                    <label style={{paddingLeft: "3px"}}>{data.ups}</label>
                                                </div>
                                                <div>
                                                    {/* num_comments */}
                                                    <BsChatRight color={"#856FF7"}/>
                                                    <label style={{paddingLeft: "3px"}}>{data.num_comments}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                       
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
