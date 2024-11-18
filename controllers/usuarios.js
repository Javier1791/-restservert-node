const {response}=require('express');

const usuariosGet=(req, res=response)=> {
    res.json({
        msg:"hola get-api-controlador"
    })
}

const usuariosPost=(req, res)=> {
    const usuario = req.body;
    res.json({
        msg:"hola post-api-controlador",
        usuario
    })
}

const usuariosPut=(req, res)=> {
    res.json({
        msg:"hola put-api-controlador"
    })
}

const usuariosDelete=(req, res)=> {
    res.json({
        msg:"hola delete-api-controlador"
    })
}

module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete   
}