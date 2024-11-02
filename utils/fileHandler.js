
const  fs= require('fs');
exports.writeTasksToFile= (data)=>{
    fs.writeFileSync('/../data/tasks.json',JSON.stringify(data, null, 2))
    return data;
}

exports.writeTasksToFile = () =>{
    if(!fs.existsSync('/../data/tasks.json')){
        this.writeTasksToFile([]);
    }
    fs.readFileSync('./../data/tasks.json')
    return JSON.parse(data);
   
}
