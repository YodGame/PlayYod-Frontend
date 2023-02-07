import React, {useState} from 'react'
import { Table } from "@nextui-org/react";

class SearchBar extends React.Component {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        console.log(searchInput)
    };

    const columns = [
        {
            key: "order",
            label: "Order",
        },
        {
            key: "country",
            label: "Country",
        },
        {
            key: "player",
            label: "Player today",
        },
        {
            key: "statusPlayer",
            label: "Status player",
        },
    ];
    const rows = [
        {
            key: "4",
            order: "4",
            country: "Country4",
            player: "Player",
            statusPlayer: "up",
        },
        {
            key: "5",
            order: "5",
            country: "Country5",
            player: "Player",
            statusPlayer: "up",
        },
        {
            key: "6",
            order: "6",
            country: "Country6",
            player: "Player",
            statusPlayer: "down",
        },
        {
            key: "7",
            order: "7",
            country: "Country7",
            player: "Player",
            statusPlayer: "up",
        },
        {
            key: "8",
            order: "8",
            country: "Country8",
            player: "Player",
            statusPlayer: "up",
        },
        {
            key: "9",
            order: "9",
            country: "Country9",
            player: "Player",
            statusPlayer: "down",
        },
        {
            key: "10",
            order: "10",
            country: "Country10",
            player: "Player",
            statusPlayer: "down",
        },
    ];

    const arrowColor = () => {
         if (rows.statusPlayer==="down") {
            return <div style={{ width:"0px", height:"0px", borderLeft: "10px solid transparent", borderRight: "10px solid transparent", borderTop: "10px solid #F45D48"}}></div>
        }
        else {
            return <div style={{ width:"0px", height:"0px", borderLeft: "10px solid transparent", borderRight: "10px solid transparent", borderBottom: "10px solid #22CC13"}}></div>
        }
    }

    return (
        <Template>
            <div style={{paddingLeft:"2%", paddingRight:"2%"}}>
                <h1 style={{fontSize: "30px"}}>Geography Search</h1>
                <div style={{padding:"19px 85px 0px 18px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6" style={{width:"63px", height:"40px", paddingLeft:"2%", paddingTop:"2px", position:"absolute"}}>
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                    </svg>

                    <input style={{width:"100%", height:"41px", paddingLeft:"10%", borderRadius:"20.5px", background:"#F6F6F6", boxShadow:"1px 4px 6px rgba(0, 0, 0, 0.25)"}}
                           type="text"
                           placeholder="what geography would you like to see?"
                           onChange={handleChange}
                           value={searchInput} />
                </div>
                <h1 style={{fontSize: "30px", paddingTop:"48px"}}>Top Geography</h1>

                <div style={{paddingLeft:"70%"}}>
                    <div style={{ position:"absolute", paddingTop:"153px"}}>
                        <h5 style={{backgroundColor:"#4FA3A5", width:"250px", height:"112px", paddingTop:"77px", fontSize:"16px", textAlign:"center", color:"white"}}>Country</h5>
                    </div>
                    <h3 style={{position:"absolute", padding:"219px 0px 0px 28.5px", fontSize:"32px", color:"white"}}>3</h3>
                    <div style={{paddingTop:"29px", display:"flex", padding:"49px 0px 0px 40.5px", position:"absolute"}}>
                        <img src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" height="170px" width="170px" style={{borderRadius: "100%"}}/>
                    </div>
                </div>

                <div style={{paddingLeft:"22%"}}>
                    <div style={{ position:"absolute", paddingTop:"118px"}}>
                        <h5 style={{backgroundColor:"#FDAE38", width:"250px", height:"146px", paddingTop:"106px", fontSize:"16px", textAlign:"center", color:"white"}}>Country</h5>
                    </div>
                    <h3 style={{position:"absolute", padding:"211px 0px 0px 206px", fontSize:"40px", color:"white"}}>2</h3>
                    <div style={{paddingTop:"29px", display:"flex", padding:"33px 0px 0px 42px", position:"absolute"}}>
                        <img src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" height="170px" width="170px" style={{borderRadius: "100%"}}/>
                    </div>
                </div>

                <div style={{paddingLeft:"46%"}}>
                    <div style={{ position:"absolute", paddingTop:"84px"}}>
                        <h5 style={{backgroundColor:"#F75435", width:"250px", height:"180px", paddingTop:"139px", fontSize:"16px", textAlign:"center", color:"white"}}>Country</h5>
                    </div>
                    <h3 style={{position:"absolute", padding:"206px 0px 0px 38px", fontSize:"42px", color:"white"}}>1</h3>
                    <div style={{paddingTop:"29px", display:"flex", padding:"29px 0px 0px 40px", position:"absolute"}}>
                        <img src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" height="170px" width="170px" style={{borderRadius: "100%"}}/>
                    </div>
                </div>
                <div style={{paddingTop:"264px"}}>
                    <Table
                        aria-label="top geography"
                        selectionMode="single"
                        lined={true}
                        lineWeight={'light'}
                        css={{
                            height: "auto",
                            minWidth: "100%",
                            paddingTop: "28px",
                        }}>
                        <Table.Header columns={columns}>
                            <Table.Column key="order" width={5} css={{textAlign:"center"}}>Order</Table.Column>
                            <Table.Column key="country" width={720} css={{textAlign:"center"}}>Country</Table.Column>
                            <Table.Column key="player" css={{textAlign:"center"}} >Player today</Table.Column>
                        </Table.Header>
                        <Table.Body items={rows}>
                            {(item) => (
                                <Table.Row key={item.key}  css={{backgroundColor:"$white", borderRadius:"10px", height:"80px", width:"100%"}}>
                                    <Table.Cell>
                                        {item.order}
                                        {arrowColor()}
                                    </Table.Cell>
                                    <Table.Cell css={{textAlign:"center"}}>
                                        {item.country}
                                    </Table.Cell>
                                    <Table.Cell css={{textAlign:"center"}}>
                                        {item.player}
                                    </Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                        </Table>
                </div>
            </div>
)
}


export default SearchBar;
