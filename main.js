// console.log("hallo world")
// const fruits= ['apples','orages', 'pears']
// fruits[3]="banana"
// fruits.push("pineapple")
// fruits.unshift('strawberries')
// fruits.pop()
// console.log(fruits)

// object literals

// const person= {
// firstname: 'Benson',
// lastName: 'doe',
// age:26,
// hobbies:['eat', 'sleep', 
// 'code']
//  }
//  console.log(person.hobbies[2])

// DESTRUCTURING IN JAVASCRIPT
// const objects={
// 	firstname:"benson",
// 	secondname: 'waweru',
// 	age: 23,
// 	education: 'bachelor',
// 	color:{color1:'blue',
// 			color2 :'yellow',
// 			color3:"red"}
// }
// const {color1,color:{color2}} =objects
// console.log(color2)

// const vowel= {x:3.4, y:7.4, z:6.8}
// const {x:a,y:b,z}=vowel
// console.log(a,b)

// NESTED OBJECTS
// const nest = {
// 	start: {x:2, y:10},
// 	finish: {x:3, y:30}
// }
// const {start:secondstart} = nest
// console.log(secondstart.y)

// const arrays= [
// {
// 	id:12,
// 	text:"take out trash",
// 	isComplete:true
// }
// ]
// // console.log(arrays[0].text)

// const jsontodo= JSON.stringify(arrays)
// console.log(jsontodo)


// FOR IN JAVASCRIPT

// const arrays= [
// {
// 	id:12,
// 	text:"take out trash",
// 	isComplete:true
// }
// {
// 	id:12,
// 	text:"take out trash",
// 	isComplete:true
// }
// {
// 	id:12,
// 	text:"take out trash",
// 	isComplete:true
// }
// ]

// for (let a=0; a<=10; a++){
// 	console.log(a);
// }

// let a=0
// while(a<=10){
// 	console.log(a)
// 	a++
// }
// HIGH ORDER ITERATION
// FOREACH
// const arrays= [
// {
// 	id:12,
// 	text:"take out trash",
// 	isComplete:true
// },
// {
// 	id:12,
// 	text:"eat food",
// 	isComplete:false
// },
// {
// 	id:12,
// 	text:"take out the bean",
// 	isComplete:true
// }
// ]
// for(let i=0; i<arrays.length; i++){
// 	console.log(arrays[i])
// }
// let i=0;
// while (i<=arrays.length){
// 	console.log(arrays[i])
// 	i++
// }
//  A BETTER WAY OF WRITING THE FOR METHOD

// for (let items of arrays){
// 	console.log(items)
// }
// let items=0;

// const working =arrays.forEach(function(any){
// 	console.log(any)
// })

// // MAPPING
//  arrays.map(function(any){
// 	console.log(any)
// })
// const todoCompleted = arrays.filter(function(any){
// 	return any.isComplete ===true
// }).map(function(any){
// 	return any.text
// })
// console.log (todoCompleted)

// const x=10;
// const y=30
// if (x>=y){
// 	console.log("x is greater than Y")
// }
// else if(y>=x){
// 	console.log ("y is greater than X")
// }
// const x=10
// if (x>=10){
// 	console.log("this is greater")
// }
// else if (x<=10){
// 	console.log("this is smaller")
// }



// const x=10;
// const color = x>10? 'it is red' :"it is grey"
// console.log(color)


// SWITCH 
// const a=50
// switch (a){
// 	case 10:
// 	console.log("number is greater than 10")
// 	break;
// 	case 40:
// 	console.log("number is greate than 20")
// 	break;
// 	default:
// 	console.log("the number is smaller than 50")
// }

// const workout=(a,b) =>{
// 	area= 1/2*a*b
// 	return area
// }
// console.log(workout(30,50))
// const todo = (a,b)=>
// 	 a*2*b
// console.log(todo(5,30))

// const todo=[1,4,5,8,10]
// todo.forEach((any)=>console.log(any))

// USING THIS KEY WORD

// let myTodos = {
// 	day:'moday',
// 	meetings: 0,
// 	meetDone:4,
// 	addMeetings : function(ans){
// 		this.meetings=this.meetings+ans
// 		return this.meetings
// 	},
// 	meetingalreadydone: function(){
// 		this.meetDone=this.meetings+this.meetDone
// 		return this.meetDone
// 	}
// }
// console.log(myTodos.addMeetings(3))
// console.log(myTodos.meetingalreadydone())

// const add=(num=30, num2=10)=>num+num2

// console.log(add())

// REVISION
//  const arrays= [
// {
// 	id:12,
// 	text:"take out trash",
// 	isComplete:true
// },
// {
// 	id:12,
// 	text:"take out trash",
// 	isComplete:false
// },
// {
// 	id:12,
// 	text:"take out trash",
// 	isComplete:true
// }
// ]
// const data =arrays.forEach(function(any){
// 	return any
// })
// // console.log(data())
// const dataa =arrays.filter(function(any){
// 	return any.isComplete === true
// }).map(function(any){
// 	return any.text
// })
// console.log(dataa)

// OBJECT ORIENTED PROGRAMMING

// CONSTRUCTURE FUNCTION

function Person(firstname,lastName,dob){
	this.firstname=firstname;
	this.lastName=lastName;
	this.dob=dob;
}
// instantiate
const perso1= new Person("benson","waweru",1992)
console.log(perso1.dob)
