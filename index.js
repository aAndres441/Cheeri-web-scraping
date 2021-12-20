const cheerio = require('cheerio');
const request = require('request');

async function inicial (){ 
    const url = 'https://quotes.toscrape.com/';
    const responde = await request(url);
    console.log(`Respuesta: ${responde.json}`);
}

inicial(); //llamada
