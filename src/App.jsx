import React, { useRef,useState, useEffect  } from 'react';
import { AppContainer, Header, Title, Subtitle, Card, Button, OutputStyled, Line } from './App.styled.jsx'; 

//This function will insert a new input line into the output field once the received text is not empty and more then 10s passed since last input
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup function to cancel the timeout if value changes
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue; // ✅ Actually return the debounced value
};

function App() {
  const inputRef = useRef();  
  const counter = useRef(0);
  const [input, setInput] = React.useState('');
  const debouncedOutput = useDebounce(input, 3000);
  console.log('debouncedOutput', debouncedOutput);
  
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