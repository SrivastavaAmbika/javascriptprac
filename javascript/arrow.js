// const hello = function(name) {
// return "hey" + name + "v"
// }
// console.log(hello('anna'));


const hello = (name) => ` hey ${name}`
    
    console.log(hello('anna'));


    const todos = [{
        title: 'bread',
        isdone: false,
    },{
        title: 'butter',
        isdone: false,
    }]
    
        const done = todos.filter((todo, index)=>{
return todo.isdone === true
        })
        
    
    console.log(done);
    