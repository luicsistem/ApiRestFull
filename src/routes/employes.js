const express = require('express');
const router = express.Router();



const mysqlConnection = require('../database');

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else{
            console.log(err);
            
        }
    });
});

router.get('/:id', (req, res) => {
    //req.params.id
    const { id } = req.params;
   mysqlConnection.query('SELECT * FROM employees WHERE id = ?', 
   [id], (err, rows, fields) => {
       if(!err){
           res.json(rows[0]);
       } else {
           console.log(err);
       }

   })
  
  });
  // crear , insertar parametros
  let sql_insert = `CALL employeeAdd(?,?,?,?,?,?);`;

  router.post('/', (req,res) => {
      const  {id , image, name, title,description, score, address } = req.body;
      mysqlConnection.query(sql_insert, [ image, name, title, description, score, address],
        (err, rows, fields) => {
         if(!err) {
             res.json({Status: 'Employee saved'})
         } else {
             console.log(err);
             
         }
        })
  })

//actualizar  
router.put('/:id', (req, res) => {
    const {image, name, title,description, score, address} = req.body;
    const { id } = req.params;
const sql_edit = `CALL employeeEdit(?,?,?,?,?,?,?);`;
mysqlConnection.query(sql_edit,[id,image, name, title, description, score, address],
    (err, rows, fields) => {
        if(!err){
            res.json({status: 'Employee Updated'});
        } else {
            console.log(err);
        }

    })
})

// delete

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM employees where id = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json({status: 'Employee Deleted'});
        }  else {
            console.log(err);
        }
    })
})


  //     https://www.youtube.com/watch?v=p8CoR-wymQg

module.exports = router;