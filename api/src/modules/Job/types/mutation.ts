export const userMutation = `

createUser(firstName: String!, lastName: String!, age: Int!, email: String!, profile: ProfileInput): User!
updateUser(id: Int!, firstName: String, lastName: String, age: Int, email: String): Boolean
deleteUser(id: Int!): Boolean

`;