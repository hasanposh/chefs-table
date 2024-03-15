
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'


function App() {

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <div className='text-center space-y-5 my-10'>
    <h3 className=' text-4xl font-semibold'> Our Recipes</h3>
    <p className='opacity-80'>
          If you are a chef, no matter how good a chef you are, it’s not good
          cooking for yourself; 
          <br />
          the joy is in cooking for others. It’s the same
          with music.
        </p>
    </div>
    </>
  )
}

export default App
