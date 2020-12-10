const pool = require('./conexion')
const ruteador = app=>{
    //get categorías
    app.get('/categoria', (request, response)=> {
        pool.query('SELECT c.id_categoria, c.nombre_cat, c.descripcion,c.fecha_creada, u.user  FROM categoría c INNER JOIN usuario u  ON c.usuario = u.id_usuario', ( error, result)=>{
            if(error) throw error
            response.send(result)
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
        let s= 'INSERT INTO categoría (nombre_cat, descripcion, fecha_creada, usuario) VALUES (?,?,now(),?)'
        pool.query(s,[b.nombre_cat,b.descripcion,b.fecha_creada,b.usuario], (error,result)=>{
            if(error) throw error
            response.status(201).send(`Categoría Agregada con ID: ${result.insertId}`)
        })
    })
    //get platillo
    app.get('/platillo/:categoria', (request, response)=> {
        pool.query('SELECT * FROM platillo WHERE categoria = ?', ( error, result)=>{
            if(error) throw error
            response.send(result)
        })
    })
    //post categorías
    app.post('/platillo', (request, response)=>{
        let b = request.body
        let s= 'INSERT INTO platillo (nombre_plat, descripcion, categoria, usuario, fecha, fotografia) VALUES (?,?,?,?,getdate(),?)'
        pool.query(s,[b.nombre_plat,b.descripcion,b.categoria,b.usuario, b.fecha,b.fotografia], (error,result)=>{
            if(error) throw error
            response.status(201).send(`Platillo Agregado con ID: ${result.insertId}`)
        })
    })
    
    //get usuario user
    app.get('/usuario/:user', (request, response)=>{
        let s = 'SELECT * FROM usuario WHERE user = ?'
        console.log(s)
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