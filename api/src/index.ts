import "reflect-metadata";
import { createConnection } from "typeorm";
import { GraphQLServer } from 'graphql-yoga'
import { ResolverMap } from "./types/resolvers";

// GraphQl types
import { userType } from "./modules/User/types/User";
import { profileType } from "./modules/Profile/types/Profile";
import { photoType } from "./modules/Photo/types/Photo";
import { categoryType } from "./modules/Category/types/Category";
import { productType } from "./modules/Product/types/Product";

// GraphQl queries
import { userQuery } from "./modules/User/types/query";
import { photoQuery } from "./modules/Photo/types/query";
import { categoryQuery } from "./modules/Category/types/query";
import { productQuery } from "./modules/Product/types/query";

// GraphQl mutations
import { userMutation } from "./modules/User/types/mutation";
import { photoMutation } from "./modules/Photo/types/mutation";
import { categoryMutation } from "./modules/Category/types/mutation";
import { productMutation } from "./modules/Product/types/mutation";

// GraphQl resolvers
import { userResolver } from "./modules/User/resolvers/User";
import { photoResolver } from "./modules/Photo/resolvers/Photo";
import { categoryResolver } from "./modules/Category/resolvers/Category";
import { productResolver } from "./modules/Product/resolvers/Product";

const typeDefs = `
  ${userType}
  ${profileType}
  ${photoType}
  ${categoryType}
  ${productType}

  type Query {
    ${userQuery}
    ${photoQuery}
    ${categoryQuery}
    ${productQuery}
  }
  
  type Mutation {
    ${userMutation}
    ${photoMutation}
    ${categoryMutation}
    ${productMutation}
  }
`

const resolvers: ResolverMap = {
  Query: {
    ...userResolver.query,
    ...photoResolver.query,
    ...categoryResolver.query,
    ...productResolver.query
  },
  Mutation: {
    ...userResolver.mutation,
    ...photoResolver.mutation,
    ...categoryResolver.mutation,
    ...productResolver.mutation,
  }
}

// Create server
const server = new GraphQLServer({ typeDefs, resolvers })

const opts = {
  port: 4000,
  cors: {
    credentials: true,
    origin: ["http://localhost:3000"] // your frontend url.
  }
};

// Connection to pg db
createConnection().then(async connection => {
  server.start(opts, () => console.log('Server is running on localhost:4000'))    
}).catch(error => console.log(error));
