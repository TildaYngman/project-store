import { useState, useEffect } from "react";
import { Header, ProductCard } from "../../components";

function Home(props) {
    return (
        <div className="fp-container">
            <Header />
            <section className="fp-container__card-container">
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