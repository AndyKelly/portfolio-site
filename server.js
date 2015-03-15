var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic("/root/dev/node/site/side-team-member-bio")).listen(80);
