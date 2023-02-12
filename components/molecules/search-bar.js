import React, {useState} from 'react'
export default function SearchBar() {

    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        console.log(searchInput)
    };


    return (
        <div style={{paddingLeft:"2%", paddingRight:"2%"}}>
                <div style={{padding:"19px 85px 0px 18px"}}>
                    <input style={{width:"100%", height:"41px", paddingLeft:"10%", borderRadius:"20.5px", background:"#F6F6F6", boxShadow:"1px 4px 6px rgba(0, 0, 0, 0.25)", color:"black"}}
                           type="text"
                           placeholder="what geography would you like to see?"
                           onChange={handleChange}
                           value={searchInput} />
                </div>
         </div>
    )
}
