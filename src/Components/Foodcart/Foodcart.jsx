import PropTypes from "prop-types";
import { useState } from "react";

const Foodcart = ({ cartWantToCook, cartDataCount }) => {
  //   console.log(cartWantToCook);
  const [currentCookingCount,setCurrentCookingCount] = useState(0);
  const [currentCooking,setCurrentCooking]=useState([])
  const [totalTime,setTotalTime]=useState(0);
  const [totalCalories,setTotalCalories]=useState(0);
  const handleCurrentCooking = (id,time,calories) => {
    const newId = cartWantToCook.find((foodId)=> id==foodId.recipe_id)
    // const newTime = cartWantToCook.find((foodTime)=> time==foodTime.preparing_time)
    console.log(time);
    const newCurrentCooking = [...currentCooking , newId]
    const newTotalTime = (totalTime+ parseInt(time))
    const newTotalCalories = (totalCalories+ parseInt(calories))
    setCurrentCooking(newCurrentCooking)
    setCurrentCookingCount(currentCookingCount+1)
    setTotalTime(newTotalTime)
    setTotalCalories(newTotalCalories)
    // console.log(currentCooking);
  };
  return (
    <div className="border-2 rounded-xl">
      <h3 className="text-center text-4xl mt-10 font-bold">
        Want to cook: {cartDataCount}
      </h3>
      <hr className="w-3/4 mx-auto my-4" />
      <table className="table-fixed w-full">
        <thead>
          <tr className="h-20">
            <th className="w-1/6 text-transparent">Num</th>
            <th className="w-2/6 text-left">Name</th>
            <th className="w-2/6 text-left">Time</th>
            <th className="w-2/6 text-left">Calories</th>
            <th className="w-2/6 text-transparent">Num</th>
          </tr>
        </thead>
        <tbody>
          {cartWantToCook.map((element, indx) => (
            <tr key={indx} className="bg-gray-100 h-20">
              <td className="pl-6">{element.recipe_id}</td>
              <td>{element.recipe_name}</td>
              <td>{element.preparing_time}</td>
              <td>{element.calories}</td>
              <td>
                <button
                  onClick={() => handleCurrentCooking(element.recipe_id,element.preparing_time,element.calories)}
                  className="btn rounded-full bg-green-400"
                >
                  Preparing
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
            
      <h3 className="text-center text-4xl mt-5 font-bold">
        Currently cooking: {currentCookingCount}
      </h3>
      <hr className="w-3/4 mx-auto my-4" />
      <table className="table-fixed w-full">
        <thead>
          <tr className="h-20">
            <th className="w-1/6 text-transparent">Num</th>
            <th className="w-2/6 text-left">Name</th>
            <th className="w-2/6 text-left">Time</th>
            <th className="w-2/6 text-left">Calories</th>
          </tr>
        </thead>
        <tbody>
          {currentCooking.map((element, indx) => (
            <tr key={indx} className="bg-gray-100 h-20">
              <td className="pl-6">{element.recipe_id}</td>
              <td>{element.recipe_name}</td>
              <td>{element.preparing_time}</td>
              <td>{element.calories}</td>
            </tr>
          ))}
          <tr className="bg-gray-100 h-20">
            <td></td>
            <td></td>
            <td>Total Time = {totalTime} minutes</td>
            <td>Total Calories = {totalCalories} calories</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Foodcart.propTypes = {
  cartWantToCook: PropTypes.object,
  cartDataCount: PropTypes.number,
};

export default Foodcart;
