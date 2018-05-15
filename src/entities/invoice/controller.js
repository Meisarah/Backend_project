const invoice = require('../../services/dbOperation')('invoice');
const invoiceDetail = require('../../services/dbOperation')('invoice_detail');

module.exports = {
    addInvoice: (data = { kode, nama_pembeli, tanggal }) => invoice.insert(data),
    showInvoice: (kode = null) => kode ? invoice.selectWhere({ kode }) : invoice.select(),
    addInvoiceDetail: (data = { invoice_id, product, harga }) => invoiceDetail.insert(data),
    showInvoiceDetail: (id) => invoice.selectWhere({ id })
}