import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const [products, setProducts] = useState([]);

  async function onLoad(){
    let response = await fetch("/api/products");
    let responseBody =  await response.json();
    console.log("OnLoad", responseBody );
    setProducts(responseBody);
    
  }
  // 해당 페이지가 열릴 때 한번 실행 (최기화)
  // 어떤 값이 변경될때 
  useEffect(()=>{
    onLoad();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
          {products.map((product) => <h1>1:{product.name}</h1>)}
      </div>
    </>
  )
}

export default App
