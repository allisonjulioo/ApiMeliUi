const productsListSchema = `
  type Products {
    author: Author
    categories: [String!]
    items: [Product]
  }
`;

export { productsListSchema };

