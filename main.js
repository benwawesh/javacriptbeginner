console.log("hallo world")
const fruits= ['apples','orages', 'pears']
fruits[3]="banana"
fruits.push("pineapple")
fruits.unshift('strawberries')
fruits.pop()
console.log(fruits)

object literals

const person= {
firstname: 'Benson',
lastName: 'doe',
age:26,
hobbies:['eat', 'sleep', 
'code']
 }
 console.log(person.hobbies[2])

DESTRUCTURING IN JAVASCRIPT
const objects={
	firstname:"benson",
	secondname: 'waweru',
	age: 23,
	education: 'bachelor',
	color:{color1:'blue',
			color2 :'yellow',
			color3:"red"}
}
const {color1,color:{color2}} =objects
console.log(color2)

const vowel= {x:3.4, y:7.4, z:6.8}
const {x:a,y:b,z}=vowel
console.log(a,b)

NESTED OBJECTS
const nest = {
	start: {x:2, y:10},
	finish: {x:3, y:30}
}
const {start:secondstart} = nest
console.log(secondstart.y)

const arrays= [
{
	id:12,
	text:"take out trash",
	isComplete:true
}
]
// console.log(arrays[0].text)

const jsontodo= JSON.stringify(arrays)
console.log(jsontodo)


FOR IN JAVASCRIPT

const arrays= [
{
	id:12,
	text:"take out trash",
	isComplete:true
}
{
	id:12,
	text:"take out trash",
	isComplete:true
}
{
	id:12,
	text:"take out trash",
	isComplete:true
}
]

for (let a=0; a<=10; a++){
	console.log(a);
}

let a=0
while(a<=10){
	console.log(a)
	a++
}
HIGH ORDER ITERATION
FOREACH
const arrays= [
{
	id:12,
	text:"take out trash",
	isComplete:true
},
{
	id:12,
	text:"take out trash",
	isComplete:true
},
{
	id:12,
	text:"take out trash",
	isComplete:true
}
]
for(let i=0; i<arrays.length; i++){
	console.log(arrays[i])
}
let i=0;
while (i<=arrays.length){
	console.log(arrays[i])
	i++
}
 A BETTER WAY OF WRITING THE FOR METHOD

for (let items of arrays){
	console.log(items)
}
let items=0;



