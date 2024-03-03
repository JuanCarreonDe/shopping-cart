import { createContext, useState } from "react";

// Crear contexto
export const FilterContext = createContext();

// Crear el provider, para proveer el contexto
export const FiltersProvideer = ({ children }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
