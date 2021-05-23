const express = require('express')
const graphqlHTTP = require('express-graphql').graphqlHTTP
const graphql = require('graphql')
const {buildSchema} = graphql
const cors = require('cors')

//require('./database/initDB')();
let todo = [{
    "id": "605f78c4963f45404494076f",
    "title": "Project1",
    "dueByDate": "2021-03-14",
    "createdOn": "2021-03-06",
    "status": "completed",
    "active": "no",
    "username": "mukul"
  },{
      "id": "605f78d8963f454044940770",
    "title": "Project2",
    "dueByDate": "2021-03-14",
    "createdOn": "2021-03-06",
    "status": "completed",
    "active": "no",
    "username": "mukul"
  },{
    "id": "605f78ff963f454044940772",
    "title": "Project4",
    "dueByDate": "2021-03-20",
    "createdOn": "2021-03-13",
    "status": "completed",
    "active": "no",
    "username": "mukul"
  },{
    "id": "605f791f963f454044940773",
    "title": "Project5",
    "dueByDate": "2021-03-28",
    "createdOn": "2021-03-20",
    "status": "in progress",
    "active": "yes",
    "username": "mukul"
  }];

const schema = buildSchema(`
    type Query {
        allTasks: [task]
        task(id:String!): task
        deleteTask(id:String!): task
    }

    input taskInput {
        id: String
        title: String
        dueByDate: String
        createdOn: String
        status: String
        active: String
        username: String
    }

    type Mutation {
        createTask(task:taskInput): task
        updateTask(id:String!,task:taskInput): task
    }

    type task {
        id: String
        title: String
        dueByDate: String
        createdOn: String
        status: String
        active: String
        username: String
    }`
);

const getAllTasks = () => {
    return todo.map((currenttodo) => {
        return currenttodo;
    })
}

const getTask = (args) => {
    const id = args.id;
    return todo.filter(task => {
        return task.id === id;
    })[0];
}

const createTask = (task) => {
    let length = todo.length;
    todo[length] = task;
    console.log(todo);
    return todo[length];
}

const updateTask = (id, task) => {
    todo.map(task1 => {
        if(id === task1.id) {
            if(task.title != undefined){
                task1.title = task.title;
            }
            if(task.status != undefined){
                task1.status = task.status;
            }
            if(task.username != undefined){
                task1.username = task.username;
            }
            if(task.createdOn != undefined){
                task1.createdOn = task.createdOn;
            }
            if(task.dueByDate != undefined){
                task1.dueByDate = task.dueByDate;
            }
            return task1;
        }
    });
    return todo.filter(task1 => task1.id === id)[0];
}

const deleteTask = (id) => {
    for(var i=0; i<todo.length; i++){
        if(todo[i].id == id){
            todo.splice(i,1);
        }
        return todo[i]
    }
    
}

const root = {
    allTasks: getAllTasks,
    task: getTask,
    createTask: createTask,
    updateTask: updateTask,
    deleteTask: deleteTask
}
//var mongoose = require('mongoose')

//var routes = require('./router/todo')
var app = express()

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))
//mongoose.connect(dev_db_url)
//mongoose.Promise = global.Promise
//var db = mongoose.connection

app.get('/', (req,res) => {
    res.send("My Todo API is Running.")
})


//db.on('error',console.error.bind(console,'MongoDB Connection Error'));





var port = 4000
app.listen(port, ()=>{
    console.log("Server is up and running at port: " + port)
})


