export const photoMutation = `

addPhoto(userId: Int!, url: String!): Photo!
updatePhoto(id: Int!, url: String): Boolean
deletePhoto(id: Int!): Boolean

`;