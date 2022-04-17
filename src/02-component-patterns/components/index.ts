import {ProductCard as ProductCardHOC} from './ProductCard';
import { ProductImg } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';
import { ProductCardHOCProps } from '../interfaces/interfaces';
export { ProductButtons } from './ProductButtons';
export { ProductImg } from './ProductImage';
export { ProductTitle } from './ProductTitle';


export const ProductCard : ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImg,
    Buttons: ProductButtons
})

