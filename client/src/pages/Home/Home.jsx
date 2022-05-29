import { useState, useEffect } from "react";
import { Header, ProductCard, SearchField, Cart } from "../../components";
import { fetchAllItems, fetchQueryItems } from "../../scripts/api";

function Home() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchQueryItems(query, setItems);
  }, [query]);

  return (
    <main id="fp-container">
      <Header />
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
      <SearchField setQuery={setQuery} />

      <div id="fp-main">
        <div className="item-list ">
          {items.length > 0 ? (
            items.map((item) => (
              <ProductCard
                cartItems={cartItems}
                setCartItems={setCartItems}
                item={item}
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
