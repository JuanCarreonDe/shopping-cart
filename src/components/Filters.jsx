import { useState, useId } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters";

const Filters = () => {
  const { filters, changeFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChange = (e) => {
    changeFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    changeFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };
  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio minimo</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1800"
          onChange={handleChange}
          value={filters.minPrice}
        />
        <span>{filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Categoria</label>
        <select
          name="category"
          id={categoryFilterId}
          onChange={handleChangeCategory}
        >
          <option value="all">Todas</option>
          <option value="smartphones">Celulares</option>
          <option value="laptops">Laptops</option>
        </select>
      </div>
    </section>
  );
};

export default Filters;
