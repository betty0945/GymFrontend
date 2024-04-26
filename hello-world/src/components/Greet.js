import react from 'react'

// function Greet(){
//     return<h1> Hello Betty</h1>
// }

const Greet = (props) =>{
//const Greet = ({) => {
console.log(props)
return 
(<div> 
<h1> 
    Hello { props.name} a.k.a {props.Heroname}</h1>
</div>
)
}
export default Greet