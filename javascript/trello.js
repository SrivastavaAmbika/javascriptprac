const days = ['mon', 'tue','wed','thur','fri','sat']
console.log(days[0]);
let hello = function(){
    console.log('hello');
    
}
days.forEach(function(day, index) {
    console.log(`start with ${index+1}-- ${day}`);
    
});
const month = ['jan','feb','march','april','may','july','aug']
month.forEach(months => {
    console.log(months);
    
});

//  let getMyGrade = function(currentMarks,totalMarks){
//      let percent = (currentMarks/totalMarks)*100
//      let myGrade = ''
//      if (percent>=90) {
//          myGrade = 'A'
         
//      } else if (percent>=80) {
//          myGrade ='B'
//      } else {
//          myGrade = 'f'
//      } 
    
//     return`your grade ${myGrade} and ${percent}`
//     }
//     let result = getMyGrade(92, 100)
//     console.log(result);
    