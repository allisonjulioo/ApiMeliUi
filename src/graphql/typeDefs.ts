import { authorSchema } from './author/schema';
import { priceSchema } from './price/schema';
import { productSchema } from './product/schema';
import { productDetailSchema } from './productDetail/schema';
import { productsListSchema } from './productsList/schema';
import { stateSchema } from './state/schema';

const querysSchema = `
  type Query {
    productsList(search: String): Products!
    productDetail(id: String): ProductDetails!
  }
`;

const typeDefs = [
  querysSchema,
  productsListSchema,
  productDetailSchema,
  productSchema,
  authorSchema,
  priceSchema,
  stateSchema,
];

export { typeDefs };

