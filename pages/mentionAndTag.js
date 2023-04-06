import React from "react";
import Template from "@/components/layouts/template";

function MentionAndTag() {

    return (
        <Template>
            <div style={{backgroundColor:"white"}}>
                <div style={{padding:30,color:"#185095"}}>
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
