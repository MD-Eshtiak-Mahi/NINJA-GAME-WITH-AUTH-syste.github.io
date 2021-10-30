// module.exports = {
//     MongoURI:'mongodb+srv://usersystemnode:EshtiakMahi@cluster0.wcm2l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//  };

dbPassword =
  "mongodb+srv://usersystemnode:" +
  encodeURIComponent("EshtiakMahi") +
  "@cluster0.wcm2l.mongodb.net/myFirstDatabase?retryWrites=true";

module.exports = {
  mongoURI: dbPassword,
};
