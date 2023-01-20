import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import axios from "axios";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("d");

  const fetchCocktail = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios(`${url}${searchTerm}`);
      const data = await res.data;
      const { drinks } = data;
      if (drinks) {
        const newCocktail = drinks.map((item) => {
          const {
            idDrink,
            strAlcoholic,
            strGlass,
            strDrink,
            strDrinkThumb,
          } = item;
          //give it shorter names
          return {
            id: idDrink,
            name: strDrink,
            glass: strGlass,
            info: strAlcoholic,
            image: strDrinkThumb,
          };
        });
        setCocktails(newCocktail);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  }, [searchTerm]); 

  useEffect(() => {
    fetchCocktail();
  }, [searchTerm, fetchCocktail]);

  return (
    <AppContext.Provider
      value={{
        loading,

        setSearchTerm,
        cocktails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
