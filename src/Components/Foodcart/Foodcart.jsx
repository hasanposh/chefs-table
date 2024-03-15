import PropTypes from "prop-types";

const Foodcart = ({cartWantToCook , cartDataCount}) => {
    const {recipe_id}= cartWantToCook
    console.log(cartDataCount);
  return (
    <div className="border-2 rounded-xl">
      <h3 className="text-center text-4xl mt-10 font-bold">Want to cook: {cartDataCount}</h3>
      <hr className="w-3/4 mx-auto my-4" />
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th className="w-1/6 text-transparent">Num</th>
            <th className="w-2/6 text-left">Name</th>
            <th className="w-2/6 text-left">Time</th>
            <th className="w-2/6 text-left">Calories</th>
            <th className="w-2/6 text-transparent">Num</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100 h-20">
            <td className="pl-6">{recipe_id}</td>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
            <td><button className="btn rounded-full bg-green-400">Preparing</button></td>
            
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Foodcart.propTypes = {
    cartWantToCook: PropTypes.object
};

export default Foodcart;
