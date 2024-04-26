import React from 'react'
import Person from './Person'

function NameList() {
    const names =['Bruce','Clarke','Diana']
    

    const persons = [
{
    id: 1,
    name: 'Diana',
    age: 28,
    skill: 'vue'
},
{
    id: 2,
    name: 'bet',
    age: 23,
    skill: 'react'
},
{
id: 3,
name: 'Da',
age: 22,
skill: 'java'
}
    ]
        // => <h2 key={index}>{index}
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>

// const personList =persons.map(person => <Person  key={person.name} person={person}/> )
//     return (
//         <div> {personList} </div>
//       ) 
}

export default NameList