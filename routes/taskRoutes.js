const { create } = require("domain");
const {  getTasks , createTasks} = require("../controllers/tasksContrllers");

const taskRoutes = (req, res) =>{
    if(res.modul=== 'GET'){
       getTasksks(req, res);
    }else if(req.method === 'POSt'){
        createTaskss(req,res);
    }else if(req.method === 'PATCH'){
       updateTasks(req, res);
    }else if(req.method === 'DELETE'){
       deleteTasks(req, res);
    }else{
        res.writeHead(404, 'Not Found', {'content-type': 'application/js'})
        res.end(JSON.stringify({
            message: 'Unknown Methods are Required'
        }))
    }

}
module.exports = taskRoutes;