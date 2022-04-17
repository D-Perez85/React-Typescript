import { ProductButtons, ProductImg, ProductTitle } from "../components";
import { ProductCard } from "../components"; // Import para componente de estructura interna
//import ProductCard from '../components/ProductCard';//Import para HOC

import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Hola Mundo",
  img: "./coffee-mug.png",
};
const ShoppingPage = () => {
  return (
    <div>
      <h1> Shopping Store </h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {/* OPCION A - Componente de estructura INTERNA */}
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Imagen className="custom-image" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        {/* OPCION B - Componente basado en COMPONENTES */}
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImg
            className="custom-image"
            style={{
              boxShadow: "10px 10px 10px rgba(0,0,0,0.2)",
            }}
          />
          <ProductTitle title="Cafe" className="text-white text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        {/* OPCION C - Componente con Styles Atributtes */}
        <ProductCard
          product={product}
          style={{
            backgroundColor: "#70D1F8",
          }}
        >
          <ProductImg
            style={{
              boxShadow: "10px 10px 10px rgba(0,0,0,0.2)",
            }}
          />
          <ProductTitle
            title="Brownie"
            style={{
              fontWeight: "bold",
            }}
          />
          <ProductButtons
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
export default ShoppingPage;
