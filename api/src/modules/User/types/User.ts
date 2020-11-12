export const userType = `

type User {
  id: Int!
  firstName: String!
  lastName: String!
  age: Int!
  email: String!
  profileId: Int!
  profile: Profile
  photos: [Photo!]
}

`;