const product = require('../../services/dbOperation')('product');
const productColor = require('../../services/dbOperation')('product_color');
const productSize = require('../../services/dbOperation')('product_size');

module.exports = {
    addProduct: (data = { subcategory_id, product, harga, deskripsi, gambar }) => product.insert(data),
    editProduct: (id, data = { subcategory_id, product, harga, deskripsi, gambar }) => product.update(data, { id }),
    deleteProduct: (id) => product.delete({ id }),
    showProduct: (id = null) => id ? product.selectWhere({ id }) : product.select(),
    showProductBySubCategory: (id = null) => product.selectWhere({ subcategory_id: id }),

    addProductColor: (data = { product_id, color }) => productColor.insert(data),
    editProductColor: (id, data = { product_id, color }) => productColor.update(data, { id }),
    deleteProductColor: (id) => productColor.delete({ id }),
    showProductColor: (id = null) => id ? productColor.selectWhere({ id }) : productColor.select(),

    addProductSize: (data = { color_id, size, stock }) => productSize.insert(data),
    editProductSize: (id, data = { color_id, size, stock }) => productSize.update(data, { id }),
    deleteProductSize: (id) => productSize.delete({ id }),
    showProductSize: (id = null) => id ? productSize.selectWhere({ id }) : productSize.select()
}