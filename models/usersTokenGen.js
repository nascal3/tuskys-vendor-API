const jwt = require('jsonwebtoken');
const config = require('config');

const generateAuthToken = (id, vendorNo, fullName, email, phone, level) => {
   return jwt.sign({
      id: id,
      vendorNo: vendorNo,
      fullName: fullName,
      email: email,
      phone: phone,
      level: level
   },
       config.get('jwtPrivateKey') );
};

module.exports = generateAuthToken;
