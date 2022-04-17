 import {ProductCard,  ProductButtons, ProductImg, ProductTitle } from '../components'; 

 const product ={
        id: '1', 
        title: 'Coffe-Card',
        img: './coffee-mug.png'
  }
const ShoppingPage = () => {
  return (
    <div>
          <h1> Shopping Store  </h1>
          <hr />
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          
              {/* OPCION A */}
            <ProductCard product={product}>
                      <ProductCard.Image/>
                      <ProductCard.Title/>
                      <ProductCard.Buttons />
            </ProductCard>

              {/* OPCION B */}
              <ProductCard product={product}>
                      <ProductImg/>
                      <ProductTitle title='Cafe'/>
                      <ProductButtons />
            </ProductCard>
        </div>
    </div>
  )
}
export default ShoppingPage