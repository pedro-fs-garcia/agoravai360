import Header from './components/Header'
import Footer from './components/Footer'
import MainRouter from './routers/MainRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className="">
            <Header/>
            <main className=''>
                <MainRouter/>
            </main>
            <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App
