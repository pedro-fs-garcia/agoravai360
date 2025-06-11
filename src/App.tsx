import Header from './components/Header'
import Footer from './components/Footer'
import MainRouter from './routers/MainRouter';

function App() {
  return (
    <>
        <div className="flex flex-col min-h-screen bg-[#11114e]">
            <Header/>
            <main className=''>
                <MainRouter/>
            </main>
            <Footer/>
        </div>
    </>
  );
}

export default App
