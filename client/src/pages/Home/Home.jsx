import { useState, useEffect } from "react";
import { Header, ProductCard, SearchField, Cart } from "../../components";
import * as config from "../../config";

function Home() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);

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
        setItems(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [query]);

  return (
    <main id="fp-container">
      <Header />
      <Cart />
      <SearchField setQuery={setQuery} />

      <div id="fp-main">
        <div className="item-list ">
          {items.length > 0 ? (
            items.map((item) => (
              <ProductCard
                key={item._id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))
          ) : (
            <h2>does not exist</h2>
          )}
        </div>
        <div className="cart-container"></div>
      </div>
    </main>
  );
}

export default Home;
