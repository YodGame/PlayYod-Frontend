import React from "react";

class TopThreeCountry extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div>
                <h5 style={{backgroundColor:this.props.backgroundColor ,height:this.props.height,position:"absolute"}} className={"boxBackground"}>
                    <img className={"img"} src={this.props.img} />
                    <div className={this.props.style}>
                        <h3 className={"ratingNumber"} style={{marginTop:this.props.margin}}>{this.props.rate}</h3>
                        <h3 className={"country"}>{this.props.countryName}</h3>
                    </div>
                </h5>
        </div>
        );
    }
}



export default TopThreeCountry;
