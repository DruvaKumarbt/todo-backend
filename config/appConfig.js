let appConfig = {};
let nodeMailer = {};

appConfig.port = process.env.PORT || 3000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    uri: '<mongodb uri/dbName>'
  }
appConfig.apiVersion = '/api/v1';

nodeMailer.email="<your email>";
nodeMailer.password = "<your password>";

module.exports = {
    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    environment: appConfig.env,
    db :appConfig.db,
    apiVersion : appConfig.apiVersion,
    email: nodeMailer.email,
    password: nodeMailer.password
};
