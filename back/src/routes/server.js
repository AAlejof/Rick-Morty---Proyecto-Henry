const http = require('http');
const characters = require('../utils/data');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')

    if(req.url.includes('rickandmorty/character')){
        let id = req.url.split('/').at(-1);

        //let characterFilter = characters.filter(char => char.id === Number(id)) //devuelve un array
        let characterFilter = characters.find(char =>  char.id === Number(id)) // devuelve directamente el objeto

        res
        .writeHead(200, {"Content-type": "application/json"})
        .end(JSON.stringify(characterFilter))
    }

    

}).listen(3001, 'localhost')