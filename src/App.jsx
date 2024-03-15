
import './App.css'
import Banner from './Components/Banner/Banner'
import Foodcards from './Components/Foodcards/Foodcards'
import Foodcart from './Components/Foodcart/Foodcart'
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
    <div className='container mx-auto md:flex'>
      <div className='w-2/3'>
      <Foodcards></Foodcards>
      </div>
      <div className='w-1/3'>
      <Foodcart></Foodcart>
      </div>
    </div>
    </>
  )
}

export default App
