// crud Operations
/*

    c - create
    r - read
    u - update
    d - delete

*/

db.managers.insertOne({
    name: "James Bond",
    age : 30,
    department: "field agent",
    agency : "MI6"
}) 


db.managers.insertMany({
    
})

db.managers.find();
