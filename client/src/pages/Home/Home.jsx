import { useState, useEffect } from "react";
import { Header, Navbar, ItemList } from "../../components";

function Home(props) {
    return (
        <>
            <Header />
            <Navbar />
            <ItemList { ...props }/>
        </>
    )
}

export default Home; 