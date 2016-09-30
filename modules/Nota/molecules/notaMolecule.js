const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cryptSet = require('./../../../config/crypt');

const notaSchemaMolecule = {

  numeroNota: require('./../atoms/numeroNota'),
  cnpj: {type: String, set: cryptSet}

};

module.exports = new Schema(notaSchemaMolecule);
