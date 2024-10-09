import http from'http';

const products =[
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Chair', price: 49.99, category: 'Furniture' },
    { id: 3, name: 'Pen', price: 1.99, category: 'Stationery' }
]

const server = http.createServer((req,res)=>{
    
    res.setHeader('Content-Type','application/json')
    if (req.url === '/') {
        res.statusCode=200
        res.end('Home')
    } else if(req.url.startsWith('/products/') && req.method ==='GET'){
        console.log(req.url)
        const id = req.url.split('/')[2]
        const selectorProducts = products.find((product)=> product.id === parseInt(id))
        if (!selectorProducts) {
            res.statusCode = 404
            res.end('Este produco no se encuentra')
            return
        }
        res.statusCode=201
        res.end(JSON.stringify(selectorProducts))
        
    } else{
        res.statusCode=404
        res.end('Not found')
    }})

server.listen(3000,()=>{
    console.log("Server is running on port 3000")
})