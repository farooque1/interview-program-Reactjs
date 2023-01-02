import CryptoJS from 'crypto-js';

let key='abc1234';

const Encryptt = word => {
  return CryptoJS.AES.encrypt(word, key).toString();
};

const Decrypt = word => {
  return CryptoJS.AES.decrypt(word, key).toString(CryptoJS.enc.Utf8);
};

export { Encryptt, Decrypt };