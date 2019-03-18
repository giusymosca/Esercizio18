const express = require ('express');
const app = express();

app.set('views', __dirname );
app.set('view engine','ejs');

app.get('/:nome',function(req, res){
  const nome =req.params.nome;
res.render('html', {
  name:nome
});


});

app.listen(process.env.PORT || 3000);
