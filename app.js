const Express = require('express');
const BodyParser = require('body-parser');
const Router = require('./routes/index');
const { PORT } = require('./configs/helpers');
const Logger = require('./configs/logger');

const app = Express();
app.set('view engine', 'pug');
app.set('views', 'views');
app.use(Express.static('public'));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(Router);

try {
  app.listen(PORT || 3000);
} catch (error) {
  console.log(error);
}
