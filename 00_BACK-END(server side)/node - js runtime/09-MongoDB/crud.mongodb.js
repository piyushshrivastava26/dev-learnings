use("CRUD-Operations")
// console.log(db);

db.createCollection('Players')


// CREATE 
// db.Players.insertOne({
//     "name": "Rohit Sharma",
//     "place": "Nagpur, India",
//     "age": 36,
//     "role": "Batsman",
//     "price": "₹16 crore"
//   })

//   db.Players.insertOne({
//     "name": "Piyush",
//     "place": "UP, India",
//     "age": 20,
//     "role": "Batsman",
//     "elor": "Batsman",
//     "role" : "Captain",
//     "price": "₹36 crore"
//   })

// db.Players.insertMany([
//     {
//       "name": "Mitchell Starc",
//       "place": "Sydney, Australia",
//       "age": 34,
//       "role": "Bowler",
//       "price": "₹14 crore"
//     },
//     {
//       "name": "Ben Stokes",
//       "place": "Christchurch, New Zealand",
//       "age": 33,
//       "role": "All-rounder",
//       "price": "₹13 crore"
//     },
//     {
//       "name": "Ruturaj Gaikwad",
//       "place": "Pune, India",
//       "age": 27,
//       "role": "Batsman",
//       "price": "₹12 crore"
//     },
//     {
//       "name": "Rashid Khan",
//       "place": "Nangarhar, Afghanistan",
//       "age": 26,
//       "role": "Bowler",
//       "price": "₹11 crore"
//     },
//     {
//       "name": "Axar Patel",
//       "place": "Gujarat, India",
//       "age": 30,
//       "role": "All-rounder",
//       "price": "₹10 crore"
//     },
//     {
//       "name": "Mohammed Shami",
//       "place": "Amroha, India",
//       "age": 34,
//       "role": "Bowler",
//       "price": "₹9 crore"
//     },
//     {
//       "name": "Ishan Kishan",
//       "place": "Ranchi, India",
//       "age": 26,
//       "role": "Batsman",
//       "price": "₹8.5 crore"
//     },
//     {
//       "name": "Hardik Pandya",
//       "place": "Surat, India",
//       "age": 31,
//       "role": "All-rounder",
//       "price": "₹7 crore"
//     },
//     {
//       "name": "Trent Boult",
//       "place": "Rotorua, New Zealand",
//       "age": 35,
//       "role": "Bowler",
//       "price": "₹6 crore"
//     }
//   ])



// READ 
let batsman = db.Players.find({"role": "Batsman"})
// console.log(batsman.count());
// console.log(batsman.toArray());

let batsman1 = db.Players.findOne({"role": "Batsman"})
// console.log(batsman1);



// UPDATE (updataOne & updateMany)
db.Players.updateOne({price : "₹6 crore"}, {$set:{price : "₹12 crore"}})
// console.log(batsman.toArray());

// db.Players.updateMany({actal data}, {$set:{changed data}})
db.Players.updateMany({}, {$set:{Team : 'SRH'}})



// DELETE (deleteOne $ deleteMany)

// db.Players.deleteOne({name : 'Rohit Sharma'})

// db.Players.deleteMany({name : 'Rohit Sharma'})

db.Players.deleteOne({"elor":"Batsman"})