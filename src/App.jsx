import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Foodcards from "./Components/Foodcards/Foodcards";
import Foodcart from "./Components/Foodcart/Foodcart";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartWantToCook, setCartWantToCook] = useState([]);
  // const [cartDataCount, setCartDataCount] = useState(0);
  const handleAddToCart = (foodInfo , id) => {
    // console.log(foodInfo);
    if(cartWantToCook.find((element)=>id==element.recipe_id)){
      toast('You Already Add This Item')
      return
    }
    
    // if(id==foodInfo.recipe_id)
    const newCartWantToCook = [...cartWantToCook, foodInfo];
    setCartWantToCook(newCartWantToCook);
    
    // setCartDataCount(cartDataCount + 1);
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="text-center space-y-5 my-10">
        <h3 className=" text-4xl font-semibold"> Our Recipes</h3>
        <p className="opacity-80">
          If you are a chef, no matter how good a chef you are, it’s not good
          cooking for yourself;
          <br />
          the joy is in cooking for others. It’s the same with music.
        </p>
      </div>
      <div className="container mx-auto gap-5 md:flex">
        <div className="w-full md:w-2/3">
          <Foodcards handleAddToCart={handleAddToCart}></Foodcards>
        </div>
        <div className="w-full my-4 md:my-0 md:w-1/3">
          <Foodcart
            setCartWantToCook={setCartWantToCook}
            cartWantToCook={cartWantToCook}
            // cartDataCount={cartDataCount}
          ></Foodcart>
        </div>
      </div>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

    </>
  );
}



export default App;
