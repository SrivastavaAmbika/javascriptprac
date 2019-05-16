var john = {
    name: 'i am john',
    age:24,
    isactive: true
}
var seema ={
    name: 'i am seema',
    age:15,
    isactiva:true
}
var raju = {
    name: 'i ma raju',
    age: 25,
    isactiva: false
}
let users = new Map()
console.log(typeof users);
users.set('john', john)
users.set('seema', seema)
users.set('raju', raju)
// console.log(users);
// console.log(users.size);
// console.log(users.get('john'));

// console.log(users.values());
for (const key of users.keys()) {
    console.log(key);
    
}
for (const [key,  value] of users.entries()) {
    console.log(key + '='  + value.name);
    
}