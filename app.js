const mysql=require('mysql');
const express=require('express');
const path=require('path');


const app=express();
app.use(express.json());

// mysql connection
const db=mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'Prakash@2004',
    database:'mycollege'

});
db.connect((err)=>{
    if(err) throw err;
    console.log('connected to sql');
});
// server HTML Form
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

app.use(express.urlencoded({extented:true}));
//insert student
app.post('/student',(req,res)=>{
    const {id,name}=req.body;
    const sql='INSERT INTO student (id,name) VALUES(?,?)';
    db.query(sql, [id,name],(err,result)=>{
    if (err);
    console.error('error Inserting data',err);
    console.log('Inserted student',id);
    res.send('student successfully added to the db');
    });
});
//start server
app.listen(3000,()=>{
    console.log('API running at http://localhost:3000');
});