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
