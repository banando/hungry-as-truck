var _ = require('lodash');
require('dotenv').load();

var localEnvVars = {
  TITLE:       'hungry-as-truck-app',
  SAFE_TITLE:  'hungry-as-truck-app',
  MONGO_URI:   'mongodb://localhost/hungry-as-truck-app',
  FB_OAUTH_CB: 'http://localhost:3000/auth/facebook'
};

if (process.env.NODE_ENV === 'production') {
  localEnvVars.MONGO_URI = "mongodb://" + process.env.MONGO_USERNAME + ":"
                                        + process.env.MONGO_PASSWORD +
                                        "@ds057944.mongolab.com:57944/hungry-as-truck";
  localEnvVars.FB_OAUTH_CB = 'https://hungry-as-truck.herokuapp.com/auth/facebook'
}

var env = _.extend(process.env, localEnvVars);

// console.log(env)

// Merge all environmental variables into one object.
module.exports = env;
