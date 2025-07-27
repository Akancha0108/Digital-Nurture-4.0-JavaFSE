import logo from './logo.svg';
import './App.css';

import './Stylesheets/mystyle.css';

import { CalculateScore } from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        name="Steeve"
        school="DNV Public School"
        total={284}
        goal={300}
      />
    </div>
  );
}

export default App;

