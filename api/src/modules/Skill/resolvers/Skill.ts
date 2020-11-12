import { Job } from "../entity/Skill";

export const userResolver = {
  query: {
    job: async (_, { id }) => await Job.findOne(id, { relations: ['profile'] }),
    jobs: async () => await Job.find({ relations: ['profile'] }),
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