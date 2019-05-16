let myTodos = {
    day: 'mon',
    meetings: 0,
    meetDone: 0,

    // addMeeting: function(){
    //     console.log(this);
    addMeeting: function(num){
        this.meetings = this.meetings + num
        
    },

// let myTodos2 = {
//     day: 'monday',
//     meetings: 0,
//     meetDone: 0,

//     addMeeting: function(){
//         console.log(this);
        
//     }
// }
donemeeting: function(num){
    this.meetDone = this.meetDone - num
},
// summary: function() {
//     return `${this.meetings}`
// }

// summary: function() {
//     return `${this.meetDone}`
// }
summary: function(){
let final = this.meetings + this.meetDone
return `${final}`
}

}
myTodos.addMeeting(4)
myTodos.donemeeting(2)
// myTodos2.addMeeting()
console.log(myTodos.summary());





