import { Category } from "../entity/Category";

export const categoryResolver = {
  query: {
    category: async (_, { id }) => await Category.findOne(id, { relations: ['products'] }),
    categories: async () => await Category.find({ relations: ['products'] }),
  },
  mutation: {
    createCategory: async (_, args) => {
      const category = await Category.create({...args}).save();
      await category.save();
      return category;
    },
    updateCategory: async (_, { id, ...rest }) => {
      try {
        const category = await Category.update(id, { ...rest });
        return category
      } catch (error) {
        console.warn(error);
      }
    },
    deleteCategory: async (_, { id }) => {
      try {
        await Category.delete(id);
      } catch (error) {
        console.warn(error);
        return false;
      }
      return true;
    },
  }
}