import logo from './logo.svg';
import './App.css';
import React,{ Component} from 'react'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreet from './components/UserGreet'
import NameList from './components/NameList'
import Person from './components/Person'
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline'
import Form from './components/Form'
import FrontPage from './components/FrontPage'
import childComponent from './components/ChildComponent'
import TrainerLanding from './components/TrainerLanding'
import UserLanding from'./components/UserLanding'
import Login from './components/Login';
import TrainerCreateWorkout from './components/TrainerCreateWorkout';

// function App() {
//   return (
//     <div>
//       {/* <Login />; */}
//       <TrainerCreateWorkout />
//     </div>
//   );
// }

// export default App;

class App extends Component{
  //function App(){
  //className="App"
render(){
  return (
    <div className="App" >
      
      {/* <Login /> */}
      <TrainerCreateWorkout />
     
      {/* <UserLanding /> */}
      
</div>

        /* 
         <FrontPage primary={true} />
      <TrainerLanding />
        
        <Form />
            <Inline />
        
      
       
        
        <NameList />
     <UserGreet />
      <ParentComponent/>
      <EventBind/>
       <ClassClick />
       <FunctionClick />
     <Greet name="Betty"  Heroname="Mom " /> 
      <Counter />
     <p1> this is for me</p1>
      <Greet name="Berry" Heroname="Dad " />  
      <button>Action</button>
      <Greet name="Bekiy" Heroname="sis " />  

      <Welcome name="Betty" Heroname="Mom "/>
      <Welcome name="Berrty" Heroname="Dad " />
  <Welcome name="Bekiy" Heroname="sis " /> 
      <Message />}
       <Welcome /> 
      <Hello /> */
  

  )
}
}

export default App;
