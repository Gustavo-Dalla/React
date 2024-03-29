//components 
import FirstComponent from './components/FirtComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';

//styles / css
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
    </div>
  );
}

export default App;
