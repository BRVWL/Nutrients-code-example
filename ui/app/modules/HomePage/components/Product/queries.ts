import { request } from 'graphql-request';

const endpoint = 'http://localhost:4000';

// QUERIES

export const getProduct = async (id: number) => {
  const getProductQuery = `query {
    product(id: ${id}) {
      id
      name
      calories
      carbs
      protein
      fat
      categoryId
      category {
        id
        name
      }
    }
  }`;

  const product = await request(endpoint, getProductQuery);
  return product;
};

export const getProducts = async () => {
  const getProductsQuery = `query {
    products {
      id
      name
      calories
      carbs
      protein
      fat
      categoryId
      category {
        id
        name
      }
    }
  }`;

  const products = await request(endpoint, getProductsQuery);
  return products;
};

// MUTATIONS
export const createProduct = async (
  categoryId: number,
  name: string,
  calories: number,
  carbs: number,
  protein: number,
  fat: number,
) => {
  const createProductMutation = `mutation {
    createProduct(categoryId: ${categoryId}, name: "${name}", calories: ${calories}, carbs: ${carbs}, protein: ${protein}, fat: ${fat}) {
      id
      name
    }
  }`;

  const product = await request(endpoint, createProductMutation);
  return product;
};
