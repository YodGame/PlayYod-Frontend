import Template from "@/components/layouts/template";
import GeographyTemplate from "@/components/organisms/geography-template";
import React from 'react'
import TopThreeCountry from "@/components/molecules/top-three-country";
import Row from 'react-bootstrap/Row';
import {Col} from "react-bootstrap";
import Rating_table from "@/components/organisms/rating_table";
import SearchBar from "@/components/molecules/search-bar";

export default function Geography() {


    return (
        <Template>
            <h1 style={{fontSize: "30px"}}>Geography Search</h1>
            <SearchBar/>
            <br/>
            <GeographyTemplate/>
            <br/>
            <h1 style={{fontSize: "30px"}}>Top Geography</h1>
            <Row style={{paddingLeft:'160px'}}>
                <Col style={{marginTop:34}}>
                    <TopThreeCountry style="top1" countryName="Japan" rate="2" backgroundColor="#FDAE38" height ="146px" margin="34" img="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" />
                </Col>
                <Col>
                    <TopThreeCountry countryName="Thailand" style="top2" rate="1" backgroundColor="#F75435" height ="180px" img="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" />
                </Col>
                <Col style={{marginTop:68}}>
                    <TopThreeCountry style="top3" countryName="China" rate="3" backgroundColor="#4FA3A5" height ="112px" margin="68" img="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" />
                </Col>
            </Row>
            <div style={{paddingTop:"-100px"}}>
          <Rating_table/>
            </div>
        </Template>
    )
}
