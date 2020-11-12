import { userRoleEnum as UserRole } from '../enums/userRole';

export const profileType = `

type Profile {
  id: Int!
  gender: String!
  photo: String!
  user_role: [UserRole]!
  location: String!
}

input ProfileInput {
  gender: String!
  photo: String!
  user_role: String!
  location: String!
}

${UserRole}

`;