const {IncomingForm} = require('formidable');
const {readTasksFromFile, writeTasksToFile } =require("../utils/fileHandler")

exports.getTasks =(req, res) =>{
    const tasks = readTasksFromFile();
    res.writeHead(200, {'content-type': 'application/json'})
    res.end(JSON.stringify(tasks))
}

exports.createTasks = (req, res) =>{
    const form= new IncomingForm();
    form.parse(req, (err, fields, files) =>{
        if(err){
            res.writeHead(400, {'content-type': 'application/json'});
            res.end(JSON.stringify({
                message: 'Error parsing form'
            }))
            return;
        }
        const image = File.image[0]
        const tasks = readTasksFromFile()
        const newTask = {
            id: Date.Now(),
            title: fields.title,
            description: fields ?.description || '',
            status: fields ?.status || 'parsing',
            Image: files.Image ?`/uploads/${image.originalFilename}`: null,
        }
        tasks.push(newTask);

        writeTasksToFile(tasks);

        if(files.image) {
            copyFileSync(image.files.path, path.join(__dirname,'../uploads' , image.newFilename))
            res.end(JSON.stringify(newTask))
        }
    })


}

exports.updateTasks = (req, res) =>{
    res.end(JSON.stringify({
        message: 'Not yes implemented'
    }))

}

