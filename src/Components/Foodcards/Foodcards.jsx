import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Foodcard from "../Foodcard/Foodcard";

const Foodcards = ({handleAddToCart}) => {
  const [foodInfos, setFoodInfos] = useState([]);
  useEffect(() => {
    fetch("./../../../public/foodData.json")
      .then((res) => res.json())
      .then((data) => setFoodInfos(data));
  }, []);
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {foodInfos.map((foodInfo) => (
        <Foodcard
          key={foodInfo.recipe_id}
          handleAddToCart={handleAddToCart}
          foodInfo={foodInfo}
        ></Foodcard>
      ))}
    </div>
  );
};

Foodcards.propTypes = {
  handleAddToCart: PropTypes.func,
};

export default Foodcards;
