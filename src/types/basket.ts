import IProduct from "./product";
export interface IBasketItem  {
    product: IProduct;
    count: number;
}
type IBasket = IBasketItem[];
export default IBasket;
