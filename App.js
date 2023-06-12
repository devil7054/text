import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
      <>
   
<NavBar title="CODEZI" about="About"/>
<div className="container my-3">
<TextForm heading="Enter the text to analyze"/>
<About/>
</div>
      </>
  );
}

export default App;
