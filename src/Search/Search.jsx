import React from "react";
function Search(){
    return(<>
        <div className="Search-container place-items-center">
            <input type="text" className="Input w-32"></input><div className="SearchButton ">Search</div>
        </div>
        <div className="Items">No Items For Now</div>
    </>)
}
export default Search