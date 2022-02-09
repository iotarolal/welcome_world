// 1. primero importo la librería

const express = require('express');
const fs = require('fs');

// 2. creo la aplicación, y la dejo en la variable 'app'
const app = express();


// 3. Configuro la carpeta de archivos estáticos
app.use(express.static('static'));


// Ejemplo de servidor CON Express

// crear un file
app.get('/crear', (req,res) => {
    console.log(req.query);
    const archive = `archivo/${req.query.archivo}`;
//    const archive = `${req.query.archivo}`;
    const contenido = `${req.query.contenido}`;

    fs.writeFile(archive, contenido, 'utf-8',function() {
      console.log('archivo creado')
    });
    res.send('creando el archivo');
})
    

// leer un file

app.get('/leer',(req,res) => {
    console.log(req.query);
    const archive = `archivo/${req.query.archivo}`;    
//    const archive = `archive/${req.query.archivo}`;    
    fs.readFile(archive, 'utf-8', function(err, data){
        res.send('archivo leido');
        console.log(data);
    });
})


//  renombrar un file
app.get('/renombrar',(req,res) => {
    console.log(req.query);
//    const nombre = `archive/${req.query.nombre}`;    
//    const nuevoNombre = `archive/${req.query.nuevoNombre}`;    
    const nombre = `archivo/${req.query.nombre}`;    
    const nuevoNombre = `archivo/${req.query.nuevoNombre}`;    
    fs.rename(nombre,nuevoNombre, function() {console.log('archivo renombrado')});
    res.send('renombrando el archivo');
})


// eliminar un file
app.get('/eliminar',(req,res) => {
    console.log(req.query);
    const archive = `archivo/${req.query.archivo}`;    
    fs.unlink(archive, function() {console.log('archivo eliminado')});
    res.send('archivo eliminado');
})
  
  
  app.listen(3000,function(){console.log('servidor funciona  en puerto 3000')});







