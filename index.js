const PORT = process.env.PORT || 3000;
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
        <figure>
            <img src="https://images.pexels.com/photos/5711814/pexels-photo-5711814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style="width:600px">
        </figure>
        <p>Source: <a href="https://www.pexels.com/ru-ru/search/builder/" target="_blank">https://www.pexels.com/ru-ru/search/builder/</a></p>
    `);
    res.end();
}).listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
