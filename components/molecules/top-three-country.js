import React from "react";

function TopThreeCountry (props) {

        return (
            <div>
                <h5 style={{backgroundColor:props.backgroundColor ,height:props.height,position:"absolute"}} className={"boxBackground"}>
                    <img className={"img"} src={props.img} />
                    <div className={props.img}>
                        <h3 className={"ratingNumber"} style={{marginTop:props.margin}}>{props.rate}</h3>
                        <h3 className={"country"}>{props.countryName}</h3>
                    </div>
                </h5>
        </div>
        );
    }
// props = backgroundColor / height / img / margin / rate / countryName


export default TopThreeCountry;
