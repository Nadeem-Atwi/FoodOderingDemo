import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import HeaderCartButton from "../Layout/HeaderCartButton";

const Meals = (props) => {
  return (
    <Fragment>
      <div className="mb-10">
        <MealsSummary />
      </div>
      <div className="center">
        <HeaderCartButton onClick={props.onShowCart} />
      </div>
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
