const opreation = require('../../services/dbOperation')('subcategory');

module.exports = {
    addSubCategory: (data = { season_id, subcategory }) => opreation.insert(data),
    editSubCategory: (id, data = { season_id, subcategory }) => opreation.update(data, { id }),
    deleteSubCategory: (id) => opreation.delete({ id }),
    showSubCategory: (id = null) => id ? opreation.selectWhere({ id }) : opreation.select(),
    showSubCategoryBySeason: (season_id) => opreation.selectWhere({ season_id })
}