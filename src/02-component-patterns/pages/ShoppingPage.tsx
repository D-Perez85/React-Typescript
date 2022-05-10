import { ProductButtons, ProductImg, ProductTitle } from "../components";
import { ProductCard } from "../components"; // Import para componente de estructura interna
//import ProductCard from '../components/ProductCard';//Import para HOC

import "../styles/custom-styles.css";

import { useShoppingCart } from "../hooks/useShoppingCart";

// import { products } from "../data/products"; //IMPORT DIRECTO SIN CUSTOM HOOK

const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange, products } = useShoppingCart();
  return (
    <div>
      <h1> Shopping Store </h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            key={product.id}
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}>
              <ProductImg className="custom-image" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}/>
              <ProductTitle title={product.title} className="text-white text-bold"/>
              <ProductButtons 
              className="custom-buttons" 
              style={{ display: "flex", justifyContent: "center" }}
              />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            key={key}
            value={product.count}
            onChange={onProductCountChange}>
              <ProductImg className="custom-image" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}/>
              <ProductButtons 
              className="custom-buttons" 
              style={{ display: "flex", justifyContent: "center" }}
              />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
export default ShoppingPage;
