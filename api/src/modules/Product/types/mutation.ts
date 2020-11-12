export const productMutation = `

createProduct(categoryId: Int!, name: String!, calories: Int!, carbs: Float!, protein: Float! fat: Float!,): Product!
updateProduct(id: Int!, name: String, calories: Int, fat: Float, carbs: Float, protein: Float, categoryId: Int): Product!
deleteProduct(id: Int!): Boolean

`;
