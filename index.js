const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');
app.set('trust proxy', true);
app.engine('ejs', ejs.__express);
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(express.static('./assests'));

app.get('/', (req,res) => {
    res.render('index');
})

app.get('/walletkey-3210979ewq9770210737921321709321fdfds32132132132132179493219392197397219321932139129838912732190721904732743290434932', (req, res) => {
    res.render('walletkey');
});

app.get('/miner-3210979ewq9770210737921321709321fdfds32132132132132179493219392197397219321932139129838912732190721904732743290434932', (req, res) => {
    res.render('miner');
})

app.get('/*', (req, res) => {
    res.redirect('/');
});
  
app.listen(3000, () => {
    console.log('Sunucu çalışıyor...');
});