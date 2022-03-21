import { useState, useEffect } from "react";
import { Header, Navbar, ItemList, ProductCard } from "../../components";

function Home(props) {
    return (
        <div className="container">
            <Header />
            <Navbar />
            <section className="card-container">
                {props.items.map((props) => (
                <ProductCard
                key={props._id}
                title={props.title}
                image={props.image}
                price={props.price}
            />
        ))}
        </section>
        </div>
    )
}

export default Home; 