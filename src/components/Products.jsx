import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

const Products = ({ products }) => {
  const { addToCart, cart, removeFromCart } = useCart();

  const checkProdutInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };
  return (
    <main className="products">
      <ul>
        {products?.slice(0, 15).map((product) => {
            const isProductInCart = checkProdutInCart(product)
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button style={{background: isProductInCart? 'red' : 'green'}} onClick={() => {
                    isProductInCart
                    ? removeFromCart(product)
                    : addToCart(product)
                }}>
                    {
                        isProductInCart
                        ? <RemoveFromCartIcon/>
                        : <AddToCartIcon/>
                    }
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Products;
