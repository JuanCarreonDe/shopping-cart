// import { useFilters } from "../hooks/useFilters";
import { useCart } from "../hooks/useCart";
import "./Footer.css";

const Footer = () => {
  // const { filters } = useFilters();
  const { cart } = useCart();

  return (
    <footer className="footer">
      <p>Proyecto de Carrito de Compras con React🪐</p>
    </footer>
  );
};

export default Footer;
