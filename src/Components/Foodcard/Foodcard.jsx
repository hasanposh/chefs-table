import PropTypes from "prop-types";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";

const Foodcard = ({ foodInfo }) => {
  const { recipe_name, recipe_image, short_description, ingredients ,preparing_time,calories} =
    foodInfo;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={recipe_image} alt="Shoes" className="rounded-xl h-full" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{recipe_name}</h2>
          <p className="opacity-80">{short_description}</p>
          <hr />
          <h2 className="card-title">Ingredients: {ingredients.length}</h2>
          <div className="opacity-80 ml-6">
            <ul>
              {ingredients.map((ingredient, indx) => (
                <li className="list-disc" key={indx}>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
            <MdOutlineWatchLater></MdOutlineWatchLater>
                <p >{preparing_time}</p></div>
            <div className="flex items-center gap-2">
            <AiOutlineFire></AiOutlineFire>
                <p >{calories}</p></div>
            
          </div>
          <div className="card-actions">
            <button className="btn rounded-full bg-green-400">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Foodcard.propTypes = {
  foodInfo: PropTypes.object,
};

export default Foodcard;
