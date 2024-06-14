import Card from './TopCard/Card'
import './main.css';

function App() {
  return (
    <>
  <div className="main">
        <p className='title'>Expense Tracker</p>
        <div className='container'>
          <Card />
        </div>
        
    </div>
    {/* <Expense /> */}
    {/* <Income /> */}
    {/* <EditExpense/> */}
    </>
  
  );
}

export default App;
