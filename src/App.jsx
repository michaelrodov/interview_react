import React, { useRef, useState, useEffect } from 'react';
import { AppContainer, Header, Title, Subtitle, Card, Button, OutputStyled, Line } from './App.styled.jsx';
import { Table } from './Table/Table.jsx';

const output = ({val}) => {
  for(let i=0; i<1000000; i++);
  return <div>{val}</div>;
}

/**
 * This hook will mimic the useState hook
 * @param {*} value 
 * @returns {Array} - The current state and a function to update it
 */
function useStoreMyValuesHook(value) {
    return [value, () => {}];
};

function App() {
  const inputRef = useRef();
  const [counter, setCounter] = useState(0);
  const [input, setInput] = React.useState('');
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [echoResult, setEchoResult] = useState('');
  const [echoLoading, setEchoLoading] = useState(false);

  useEffect(() => {
    // Fetch employee data from backend
    fetch('/api/employees')
      .then(response => response.json())
      .then(data => {
        setEmployees(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
        setLoading(false);
      });
  }, []);

  const searchEmployees = async (value) => {
    setLoading(true);

    try {
      const response = await fetch(`/api/employees/search?q=${value}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }        
      });

      const data = await response.json();      
      setEmployees(data.employees);
      setLoading(false);
    } catch (error) {
      console.error('Error calling echo endpoint:', error);
      setEchoResult('Error occurred');
    } finally {
      setEchoLoading(false);
    }
  };
  
  return (
    <AppContainer>
      <Header>
        <Title>Simple React Project</Title>
        <Subtitle>Built with React, Vite, and Styled Components</Subtitle>
        <button style={{border: 'solid 1px'}} onClick={() => setCounter(counter + 1)}>Click</button>
      </Header>
      <Card className="input-card">
        <div>
          <span>Sticky panel</span>        
          <input
          id={'textInputField'}
          className="text-input user-input"
          data-input-type="text"
          data-priority="high"
          onChange={() => {
            searchEmployees(inputRef.current.value);
          }}
          placeholder="Search employees..."
          ref={inputRef}
          type="text"        
          style={{
            width: '100%',
            padding: '0.5rem',
            fontSize: '1rem',
            borderRadius: '0.375rem',
            border: '1px solid #ccc',
            backgroundColor: '#ffffff',
            borderColor: '#cccccc',
            marginTop: '1rem',
            boxSizing: 'border-box'
          }} />
        </div>
      </Card>
      <Card>
          <Table isLoading={loading} data={employees} />
      </Card>
    </AppContainer>
  );
}

export default App;