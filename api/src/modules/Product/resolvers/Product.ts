import { Product } from "../entity/Product";

export const productResolver = {
  query: {
    product: async (_, { id }) => await Product.findOne(id, { relations: ['category'] }),
    products: async () => await Product.find({ relations: ['category'] }),
  },
  mutation: {
    createProduct: async (_, args) => {
      const product = await Product.create({...args});
      await product.save();
      return product;
    },
    updateProduct: async (_, { id, ...rest }) => {
      try {
        const product = await Product.update(id, { ...rest });
        return product
      } catch (error) {
        console.warn(error);
      }
    },
    deleteProduct: async (_, { id }) => {
      try {
        await Product.delete(id);
      } catch (error) {
        console.warn(error);
        return false;
      }
      return true;
    },
  }
}