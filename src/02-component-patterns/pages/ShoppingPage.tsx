import { ProductButtons, ProductImg, ProductTitle } from "../components";
import { ProductCard } from "../components"; // Import para componente de estructura interna
//import ProductCard from '../components/ProductCard';//Import para HOC
import "../styles/custom-styles.css";
import { products } from "../data/products"; //IMPORT DIRECTO SIN CUSTOM HOOK

const product = products[0];

const ShoppingPage = () => {
  return (
    <div>
      <h1> Shopping Store </h1>
      <hr />
      <ProductCard
        product={product}
        className="bg-dark text-white"
        key={product.id}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}>

        {({ reset, count, increaseBy, isMaxCountReached }) => (
          <>
            <ProductImg
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}/>
            <ProductTitle
              title={product.title}
              className="text-white text-bold"/>
            <ProductButtons
              className="custom-buttons"
              style={{ display: "flex", justifyContent: "center" }}/>

            {/* {JSON.stringify(args, null, 3)} */}
            <button onClick={reset}> RESET</button>
            <button onClick={() => increaseBy(-2)}> - 2</button>
              {!isMaxCountReached && (
                <button onClick={() => increaseBy(2)}> + 2</button>
              )}
            <span>{count}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
export default ShoppingPage;
