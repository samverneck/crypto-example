'use strict';

const Nota = require('./../modules/Nota/molecules/notaMolecule');

const CryptoJS = require("crypto-js");

module.exports = function cryptData(value) {

  let data = Nota.cnpj;
  console.log('Nota.cnpj: ', data);
  // Encrypt
  let cipherData = CryptoJS.AES.encrypt(JSON.stringify(data), '123');
  return cipherData;
  console.log('cipherData: ', cipherData);

  // Decrypt
  // let bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), '123');
  // let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  // console.log(decryptedData);

};
