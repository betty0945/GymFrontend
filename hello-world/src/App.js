import logo from './logo.svg';
import './App.css';
import React,{ Component} from 'react'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Subscribe from './components/Subscribe'
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
import Signup from './components/Signup'
import FrontPage from './components/FrontPage'
import childComponent from './components/ChildComponent'
import TrainerLanding from './components/TrainerLanding'
import UserLanding from'./components/UserLanding'
import Login from './components/Login';
import TrainerCreateWorkout from './components/TrainerCreateWorkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App" >

      {/* <Router>
        <Routes>
          <Route path="/" element={<FrontPage primary={true} />} />
          <Route key="login-user" exact path="/loginuser" element={<Login />} />
          <Route key="login-trainer" exact path="/logintrainer" element={<Login />} />
          <Route path="/userpage" element={<UserLanding />} />
        </Routes>
      </Router> */}

      
      {/* <Login /> */}
      <TrainerCreateWorkout />
     
      {/* <UserLanding /> */}
      {/* <TrainerLanding /> */}
      {/* <TrainerCreateWorkout /> */}
      {/* <Subscribe /> */}
     
    
           

      
      
</div>

        /* 
         <FrontPage primary={true} />
      <TrainerLanding />
        
//        
//             <Inline />
        
      
       
        
//         <NameList />
//      <UserGreet />
//       <ParentComponent/>
//       <EventBind/>
//        <ClassClick />
//        <FunctionClick />
//      <Greet name="Betty"  Heroname="Mom " /> 
//       <Counter />
//      <p1> this is for me</p1>
//       <Greet name="Berry" Heroname="Dad " />  
//       <button>Action</button>
//       <Greet name="Bekiy" Heroname="sis " />  

//       <Welcome name="Betty" Heroname="Mom "/>
//       <Welcome name="Berrty" Heroname="Dad " />
//   <Welcome name="Bekiy" Heroname="sis " /> 
//      
//        <Welcome /> 
//       <Hello /> */
  

//   );
// }
// }

// export default App;
