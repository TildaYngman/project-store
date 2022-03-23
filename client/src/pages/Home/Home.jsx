import { useState, useEffect } from "react";
import { Header, ProductCard } from "../../components";

function Home(props) {
    return (
        <div id="fp-container">
            <Header />
            <section className="item-list ">
                {props.items.map((props) => (
                <ProductCard
                key={props._id}
                title={props.title}
                image={props.image}
                price={props.price}
            />))}
            </section>
        </div>
    )
}

export default Home; 