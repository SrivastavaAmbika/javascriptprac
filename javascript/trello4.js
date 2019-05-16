// const myTodos = ['buy bread','go to gym','youtube video']
// console.log(myTodos[myTodos.indexOf('buy bread')]);

const newtodo = [
    {title: 'buy bread',
    isdone: false,

},{
    title: 'go to gym',
    isdone: false,
},{
    title: 'youtube video',
    isdone: true,
}]

// const index = newtodo.findIndex(function(todo, index){
//     console.log(todo);
//     return todo.title === 'go to gym'
    
    
// })
// console.log(index);

// const findTodo = function(mytodo,title){
//     const index = newtodo.findIndex(function(todo, index){
//         return todo.title === title })
//         return mytodo[index]
// }
// let printme = findTodo(newtodo, 'go to gym')
// console.log(printme);
 
const findTodo = function(mytodo, title){
    const retunvalue = mytodo.find(function(todo,index){
        return todo.title === title
    })
    return retunvalue 
}
let printme = findTodo(newtodo, 'go to gym')
 console.log(printme);