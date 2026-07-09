import { useState } from 'react'
import styles from './App.module.css';

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Button from './components/Button/Button';
import Container from './components/Container/Container';
import Input from './components/Input/Input';
import Table from './components/Table/Table';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className={styles.mainContainer}> 
      
        <Container title="Register Student">
          <Input></Input>
        </Container>

        <Container title="Student List">
          <Table></Table>
        </Container>

      </main>
    </>
  )
}

export default App