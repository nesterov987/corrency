import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';

function App() {
  const [loading,setLoading] = useState(true)
  const [data,setData] = useState()
  useEffect(() => {
  async function fetchData(){
    try{
      const response=await fetch('https://api.exchangerate-api.com/v4/latest/UAH')
      const dataJson = await response.json()
      setData(dataJson.rates)
    } catch(error){
      console.error(error)
    }
    finally{
        setLoading(false)
    }
  }
  fetchData()
  } )
  if(loading===true){
    return <p>
      loading
    </p>
  }
  return (
    <div>
      <Header data={data} />
      <Main   data={data} />
      <Footer/>
    </div>
  );
}

export default App;
