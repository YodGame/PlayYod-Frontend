import Template from "@/components/layouts/template";
import GeographyTemplate from "@/components/molecules/geography-template";
import React,{useState, useEffect} from 'react'
import TopThreeCountry from "@/components/molecules/top-three-country";
import Row from 'react-bootstrap/Row';
import {Col} from "react-bootstrap";
import Rating_table from "@/components/organisms/rating_table";
import { API_URL } from "@/config";
import axios from 'axios';

export default function Geography() {

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(API_URL + "geo/players")
      .then(response => {
        const newData = response.data.map((item, index) => {

          return {
            id: index,
            ...item

          };
//item is object in API ---> id is index of object ---> mapping to add in object
        });
        newData.sort((a, b) => b.users - a.users)
        setData(newData);
      }
    );
  }, []);

if (!data) {
  return <div>Loading...</div>;
} //Loading for fetching data finish

  const subArray = data.slice(3); //create for maping to add component in website
const checkFlag = (country) => {
  return '/nation-flag/' + country +'.svg'
}

console.log(data);
    return (

        <Template>
            <h1 style={{fontSize: "30px", color:"black"}}>Steam Active Players</h1>
            <br/>
            <GeographyTemplate data={data}/>
            <br/>
            <h1 style={{fontSize: "30px", color:"black"}}>Top Geography</h1>
            <Row style={{paddingLeft:'160px'}}>
                <Col style={{marginTop:34}}>
                    <TopThreeCountry style="top2" countryName={data[1].name} rate="2" backgroundColor="#FDAE38" height ="146px" margin="auto" img={checkFlag(data[1].name)} />
                </Col>
                <Col>
                    <TopThreeCountry countryName={data[0].name} style="top1" rate="1" backgroundColor="#F75435" height ="180px" img={checkFlag(data[0].name)} />
                </Col>
                <Col style={{marginTop:68}}>
                    <TopThreeCountry style="top3" countryName={data[2].name} rate="3" backgroundColor="#4FA3A5" height ="112px" margin="68" img={checkFlag(data[2].name)} />
                </Col>
            </Row>
            <Rating_table data={subArray}/>
        </Template>
    )
}
