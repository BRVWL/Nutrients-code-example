import { User } from "../entity/User";
import { Profile } from "../../Profile/entity/Profile";

export const userResolver = {
  query: {
    user: async (_, { id }) => await User.findOne(id, { relations: ['profile'] }),
    users: async () => await User.find({ relations: ['profile'] }),
  },
  mutation: {
    createUser: async (_, args) => {
      const profile = await Profile.create({...args.profile}).save();
      const user = User.create({
        ...args,
        profileId: profile.id
      });
      user.profile = profile;
      await user.save();
      return user;
    },
    updateUser: async (_, { id, ...rest }) => {
      try {
        await User.update(id, { ...rest });
      } catch (error) {
        console.warn(error);
        return false;
      }
      return true
    },
    deleteUser: async (_, { id }) => {
      try {
        await User.delete(id);
      } catch (error) {
        console.warn(error);
        return false;
      }
      return true;
    },
  }
}