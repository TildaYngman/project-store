import { useState, useEffect } from "react";
import { Header, ProductCard, SearchField } from "../../components";
import * as config from "../../config";



function Home(props) {
    const [ query, setQuery ] = useState("");
    const [ items, setItems ] = useState([]);
    console.log(typeof query);

    useEffect(() => {
        fetch(`${config.API_BASE_URL}/items`)
          .then((response) => {
            return response.json();
          })
          .then((result) => {
            setItems(result);
          })
          .catch((err) => {
            console.error(err);
          });
      }, [query]);

    useEffect(() => {
        fetch(`${config.API_BASE_URL}/items/${query}`)
          .then((response) => {
            return response.json();
          })
          .then((result) => {
            console.log(result)
            setItems(result);
          })
          .catch((err) => {
            console.error(err);
          });
      }, [query]);
      console.log(typeof items);

    return (
        <div id="fp-container">
            <Header />
            < SearchField setQuery = { setQuery } />
            <section className="item-list ">
                {items.length > 0 ? (
                props.items.map((props) => (
                <ProductCard
                key={props._id}
                title={props.title}
                image={props.image}
                price={props.price}
            />))
            ):(<h2>does not exist</h2>)
        }
            </section>
        </div>
    )
}

export default Home; 