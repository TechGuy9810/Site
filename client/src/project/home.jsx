import React from "react";
import SearchBar from "./searchBar";
import Featured from "./featured";
import Country from './country.js';
const Home = ()=>{
return(
    <>
        <div class="body">
    <div class="landing">
<SearchBar/>
<Featured/>
<Country/>
</div>
</div>
    </>
);
}
export default Home;