
const express = require('express')

class Server{
    constructor(){
        this.app = express()
        this.PORT=process.env.PORT;
        this.usuariosPath ='/api/usuarios';
        
        this.middlewares();
        
        this.routes();

    }

    middlewares(){
        this.app.use(express.static('public'));
        //lectura y parseo del body
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.usuariosPath,require('../routes/usuarios'))
    }

    listen(){
        this.app.listen(this.PORT,()=>{
            console.log('servidor corrriendo en el puerto',this.PORT);
            
        })
    }

}

module.exports=Server