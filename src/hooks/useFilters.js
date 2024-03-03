import { useContext } from "react";
import { FilterContext } from "../context/filters";
export const useFilters = () => {
    const {filters, setFilters} = useContext(FilterContext)
  
    const filterProducts = (products) => {
      return products.filter((product) => {
        return (
          product.price >= filters.minPrice &&
          (filters.category === "all" || product.category === filters.category)
        );
      });
    };
  
    const changeFilters = (filters) => {
      setFilters(filters) 
    }
    return { filters, filterProducts, changeFilters };
  };