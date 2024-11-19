
const http = require ('http');

http.createServer ((req , res) => {

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, { 'Content-Type': 'application/csv' });
    res.write('id, nombre');
    res.write('\n1, Carlos');
    res.write('\n2, Pedro');
    res.write('\n3, Pepe');
    res.write('\n4, Luis');
    res.end();
})
.listen(8080);

console.log("escuchando puerto 8080");