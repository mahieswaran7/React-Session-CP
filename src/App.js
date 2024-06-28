// import logo from './logo.svg';
import './App.css';
import ClassComp from './components/ClassComp';
import FunctionComp from './components/FunctionComp';
import myDetails from './components/myDetails';
import MethodEventComp from './components/MethodEventComp';
import SetStateComp from './components/SetStateComp';
import ConditionRenComp from './components/ConditionRenComp';
import MyImageComp from './components/MyImageComp';
import staticData from './shared/constant/ConstantData';
import ParentComp from './components/ParentComp';
import CssComp from './components/CssComp';
import ClickCountComp from './components/ClickCountComp';
import ClickMouseOverComp from './components/ClickMouseOverComp';
import SwipeableTextMobileStepper from './components/MysliderComp';
import VirtualDomComp from './components/VirtualDomComp';
import Carousel from 'react-material-ui-carousel';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <h1>Welcome to you all in my react session</h1>
      <FunctionComp myName="Eswaran Arumugam" post="Software Developer"></FunctionComp>
      <ClassComp  myName="Eswaran Arumugam" post="Software Developer"></ClassComp>
       <myDetails fname="Eswaran" lname="Arumugam" email="eswaran@gmail.com" contact="8925708431"></myDetails> */}
      {/* <MethodEventComp></MethodEventComp>
      <SetStateComp></SetStateComp>
      <ConditionRenComp></ConditionRenComp>
      <MyImageComp></MyImageComp> */}
      {/* <staticData></staticData> */}
      {/* <ParentComp></ParentComp>
      <CssComp></CssComp> */}
      {/* <ClickCountComp></ClickCountComp>
      <ClickMouseOverComp></ClickMouseOverComp> */}
      <SwipeableTextMobileStepper></SwipeableTextMobileStepper>
      <VirtualDomComp/>
      <LandingPage/>
      
      
      
      
    </div>
  );
}

export default App;
