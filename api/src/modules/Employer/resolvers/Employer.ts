import { Employer } from "../entity/Employer";
import { Profile } from "../../Profile/entity/Profile";

export const employerResolver = {
  query: {
    employer: async (_, { id }) => await Employer.findOne(id, { relations: ['profile'] }),
    employers: async () => await Employer.find({ relations: ['profile'] }),
  },
  mutation: {
    createEmployer: async (_, args) => {
      const profile = await Profile.create({...args.profile}).save();
      const user = Employer.create({
        ...args,
        profileId: profile.id
      });
      user.profile = profile;
      await user.save();
      return user;
    },
    updateEmployer: async (_, { id, ...rest }) => {
      try {
        await Employer.update(id, { ...rest });
      } catch (error) {
        console.warn(error);
        return false;
      }
      return true
    },
    deleteEmployer: async (_, { id }) => {
      try {
        await Employer.delete(id);
      } catch (error) {
        console.warn(error);
        return false;
      }
      return true;
    },
  }
}