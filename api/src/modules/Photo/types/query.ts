export const photoQuery = `

photo(id: Int!): Photo!
photos: [Photo!]!
getAllPhotosByUserId(userId: Int): [Photo!]

`;