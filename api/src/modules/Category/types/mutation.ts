export const categoryMutation = `

createCategory(name: String!): Category!
updateCategory(id: Int!, name: String): Category!
deleteCategory(id: Int!): Boolean

`;
