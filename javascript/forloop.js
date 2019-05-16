const days = ['mon', 'tue','wed','thur','fri','sat']
for (let i = days.length -1; i >= 0; i--) {
     console.log(days[i]);   
}

const myTodo = []
myTodo.push('buy')
myTodo.push('record')
myTodo.push('gym')
// myTodo.forEach(todo => {
//     console.log(`array ${todo}`)
    
// });
for (let i = 0; i < myTodo.length; i++) {
    const element = myTodo[i];
    console.log(element);
    
    
}