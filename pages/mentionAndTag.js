import React from "react";
import Template from "@/components/layouts/template";
import {useState, useEffect} from 'react'
import axios from 'axios';
import { API_URL } from "@/config";

function MentionAndTag() {

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
        
    const [post, setPost] = useState([]);

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
