import React, { useRef  } from 'react';
import { AppContainer, Header, Title, Subtitle, Card, Button, OutputStyled, Line } from './App.styled.jsx'; 

/**
 * A custom hook that delays updating the value until after a specified delay period
 * @param {*} value - The value to debounce
 * @param {*} delay - The delay period in milliseconds
 * @returns {*} - The debounced value
 */
function useNotSoFastHook(value, delay) {
    return value
};

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
  const counter = useRef(0);
  const [input, setInput] = React.useState('');
  const debouncedOutput = useNotSoFastHook(input, 3000);
  
  
  return (
    <AppContainer>
      <Header>
        <Title>Simple React Project</Title>
        <Subtitle>Built with React, Vite, and Styled Components</Subtitle>
      </Header>
      
      <Card>
        <input 
        onChange={() => setInput(inputRef.current.value)}
        ref={inputRef} 
        type="text" 
        placeholder="Type something..." 
        style={{
          width: '100%',
          padding: '0.5rem',
          fontSize: '1rem',
          borderRadius: '0.375rem',
          border: '1px solid #ccc',
          marginTop: '1rem',
          boxSizing: 'border-box'
        }} />

        <OutputStyled style={{border: 'solid 1px', marginTop: '1rem'}}>
            {debouncedOutput}
        </OutputStyled>
      </Card>
    </AppContainer>
  );
}

export default App;