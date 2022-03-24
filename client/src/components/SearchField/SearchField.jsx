import { HiShoppingCart } from "react-icons/hi";
import { useState } from "react";

const SearchField = ({ setQuery }) => {
    const [searchInput, setSearchInput ] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(searchInput);
        setSearchInput("");
    };

    const handelOnChange = (e) => {
        setSearchInput(e.target.value);
    }

  return (
    <form onSubmit = { handleSubmit }>
        <label htmlFor ="search"></label>
        <input
        onChange = { handelOnChange }
        type = "text"
        id = "search"
        placeholder ="Search"
        name ="search"
        value = {searchInput}
        />
        <button type = "submit">
            search
        </button>
    </form>
  )
}

export default SearchField;