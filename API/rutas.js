const pool = require('./conexion')
const ruteador = app=>{
    //get categorías
    app.get('/categoria', (request, response)=> {
        pool.query('SELECT c.id_categoria, c.nombre_cat, c.descripcion,c.fecha_creada, u.user  FROM categoría c INNER JOIN usuario u  ON c.usuario = u.id_usuario', ( error, result)=>{
            if(error) throw error
            response.send(result)
        })
    })
    app.get('/plato', (request, response)=> {
        pool.query('SELECT p.id_platillo, p.nombre_plat, p.descripcion, c.nombre_cat, u.user, p.fecha, p.fotografia FROM platillo p INNER JOIN categoría c ON p.categoría = c.id_categoria INNER JOIN usuario u ON p.usuario = u.id_usuario', ( error, result)=>{
            if(error) throw error
            response.send(result)
            console.log(result)
            console.log(error)
        })
    })
    //get categorías nombre
    app.get('/categoria/:nombre', (request, response)=>{
        let s = 'SELECT * FROM categoría WHERE nombre_cat = ?'
        pool.query(s,request.params.nombre_cat,
        (error, result)=>{
            if(error) throw error
            response.send(result)
        }
        )
    })
    //post categorías
    app.post('/categoria', (request, response)=>{
        let b = request.body
        let s= 'INSERT INTO categoría (nombre_cat, descripcion, usuario, fecha_creada) VALUES (?,?,?,now())'
        pool.query(s,[b.nombre_cat,b.descripcion,b.usuario], (error,result)=>{
            if(error) throw error
            response.status(201).send(`Categoría Agregada con ID: ${result.insertId}`)
        })
    })
    //get platillo
    //post categorías
    app.post('/platillo', (request, response)=>{
        let b = request.body
        let s= 'INSERT INTO platillo (nombre_plat, descripcion, categoría, usuario, fecha, fotografia) VALUES (?,?,?,?,now(),?)'
        pool.query(s,[b.nombre_plat,b.descripcion,b.categoria,b.usuario,b.fotografia], (error,result)=>{
            if(error) throw error
            response.status(201).send(`Platillo Agregado con ID: ${result.insertId}`)
        })
    })
    
    //get usuario user
    app.get('/usuario/:user', (request, response)=>{
        let s = 'SELECT * FROM usuario WHERE user = ?'
        pool.query(s,request.params.user,
        (error, result)=>{
            if(error) throw error
            response.send(result)
        }
        )
    })
    //post usuario
    app.post('/usuario', (request, response)=>{
        let b = request.body
        let s= 'INSERT INTO usuario (nombre, apellidos, user, password) VALUES (?,?,?,?)'
        pool.query(s,[b.nombre,b.apellidos,b.user,b.password], (error,result)=>{
            if(error) throw error
            response.status(201).send(`Usuario Agregado con ID: ${result.insertId}`)
        })
    })
}
module.exports = ruteador