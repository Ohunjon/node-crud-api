const User = require("./userModel");
const Token = require("./tokenModel");

//one to many
User.hasMany(Token);
Token.belongsTo(User);

module.exports = {
  User,
  Token,
};
