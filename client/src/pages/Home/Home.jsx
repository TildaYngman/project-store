import { useState, useEffect } from "react";
import { Header, Navbar, ItemList, ProductCard } from "../../components";

function Home(props) {
    return (
        <>
            <Header />
            <Navbar />
            {/* <ItemList { ...props }/> */}
            <section>
                {props.items.map((props) => (
                 <ProductCard
                key={props._id}
                title={props.title}
                image={props.image}
                type={props.price}
            />
        ))}
        </section>
        </>
    )
}

export default Home; 