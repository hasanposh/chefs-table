import PropTypes from "prop-types";
import { useState } from "react";

const Foodcart = ({ cartWantToCook, setCartWantToCook }) => {
  //   console.log(cartWantToCook);
//   const [currentCookingCount, setCurrentCookingCount] = useState(0);
  const [currentCooking, setCurrentCooking] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const handleCurrentCooking = (id, time, calories) => {
    const newId = cartWantToCook.find((foodId) => id == foodId.recipe_id);
    const newCartWantToCook = cartWantToCook.filter(
      (e) => newId.recipe_id !== e.recipe_id
    );
    console.log(newId, newCartWantToCook);
    const newCurrentCooking = [...currentCooking, newId];
    const newTotalTime = totalTime + parseInt(time);
    const newTotalCalories = totalCalories + parseInt(calories);
    setCurrentCooking(newCurrentCooking);
    // setCurrentCookingCount(currentCookingCount + 1);
    setTotalTime(newTotalTime);
    setTotalCalories(newTotalCalories);
    setCartWantToCook(newCartWantToCook);
    // console.log(currentCooking);
  };
  return (
    <div className="border-2 rounded-xl">
      <h3 className="text-center text-4xl mt-10 font-bold">
        Want to cook: {cartWantToCook.length}
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
                  onClick={() =>
                    handleCurrentCooking(
                      element.recipe_id,
                      element.preparing_time,
                      element.calories
                    )
                  }
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
        Currently cooking: {currentCooking.length}
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
          <tr className=" h-32">
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
  setCartWantToCook: PropTypes.func,
};

export default Foodcart;
