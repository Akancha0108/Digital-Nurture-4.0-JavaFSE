import logo from './logo.svg';
import './App.css';
import CohortDetails from './Components/CohortDetails';

function App() {
  const cohorts = [
    {
      name: 'INTADMDF10 - .NET FSD',
      startDate: '22-Feb-2022',
      endDate: '22-May-2022',
      status: 'Scheduled',
      coach: 'Aathma',
      trainer: 'Jojo Jose'
    },
    {
      name: 'ADM21JF014 - Java FSD',
      startDate: '10-Sep-2021',
      endDate: '10-Dec-2021',
      status: 'Ongoing',
      coach: 'Apoorv',
      trainer: 'Elisa Smith'
    },
    {
      name: 'CDBJF21025 - Java FSD',
      startDate: '24-Dec-2021',
      endDate: '24-Mar-2022',
      status: 'Ongoing',
      coach: 'Aathma',
      trainer: 'John Doe'
    }
  ];

  return (
    <div>
      <h1>Cohorts Details</h1>
      <div className="cohort-container">
        {cohorts.map((cohort, idx) => (
          <CohortDetails key={idx} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;
