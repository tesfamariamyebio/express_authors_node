const express=require('express');
const  app=express();
const port=3011;


app.get('/',(req,res)=>{
    res.send('AUTHORS API'); 
});

const autheurs=[{
    id:'1',
    name:'Lawrence Nowel',
    nationality:"UK"   
},
   {
       id:'2',
       name:'william Shakres',
       nationality:"UK"   
      },
      {
       id:'3',
       name:'Charles Dickens',
       nationality:"Allemagne"   
      },
      {
        id:'4',
        name:'Oscar Wild',
        nationality:"Française"   
       },
  ]
app.get('/authors/:id',(req,res)=>{ 
//    console.log(req.params.id);
   const y= autheurs.filter((x)=>{

        if(x.id ===req.params.id){
            return x.name;
        }
    });
 
   console.log(y);
   res.send(y);
});



app.listen(port,()=>{
    console.log('serveur started :' + port)
});