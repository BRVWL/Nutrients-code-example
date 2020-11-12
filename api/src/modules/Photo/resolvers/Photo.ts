import { Photo } from "../entity/Photo";

export const photoResolver = {
  query: {
    photo: async (_, { id }) => await Photo.findOne(id, { relations: ['user'] }),
    photos: async () => await Photo.find({ relations: ['user'] }),
    getAllPhotosByUserId: async (_, { userId }) => {
      const photos = await Photo.find({ 
        where: { 
          userId: userId 
        }, 
        relations: ['user'] 
      })
      return photos;
    },
  },
  mutation: {
    addPhoto: async (_, {userId, url}) => {
      const photo = Photo.create({ userId, url })
      await photo.save();
      return photo;
    },
    updatePhoto: async (_, { id, ...rest }) => {
      try {
        await Photo.update(id, { ...rest });
      } catch (error) {
        console.warn(error)
        return false
      }
      return true
    },
    deletePhoto: async (_, { id }) => {
      try {
        await Photo.delete(id);
      } catch (error) {
        console.warn(error)
        return false
      }
      return true
    },
  }
}
