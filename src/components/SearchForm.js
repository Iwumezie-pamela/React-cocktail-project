import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const searchValue = React.useRef(null);

  const { setSearchTerm } = useGlobalContext();

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="search">Search Your Favorite Cocktail</label>
          <input
            type="text"
            name="searchValue"
            id="search"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
