import { request } from 'graphql-request';

const endpoint = 'http://localhost:4000';

// QUERIES
export const getCategoies = async () => {
  const getCategoiesQuery = `query {
    categories {
      id
      name
      products{
        id
        name
      }
    }
  }`;
  const categoies = await request(endpoint, getCategoiesQuery);
  return categoies;
};
