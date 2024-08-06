import React from "react";
import "../../styles/Dashboard/Activity.css";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Chart from "./Chart";

export default function Activity() {
  return (
    <div className="activity-container">
      <div className="chart">
        <Chart />
      </div>
      <div className="activity">
        <div className="goals">
          <div>
            <div className="rounded-box red-box">
              <CrisisAlertIcon />
            </div>
            <span>Goals</span>
          </div>
          <div className="right-arrow">
            <KeyboardArrowRightIcon sx={{ fontSize: 25 }} />
          </div>
        </div>
        <div className="dishes">
          <div>
            <div className="rounded-box blue-box">
              <LunchDiningIcon />
            </div>
            <span>Popular Dishes</span>
          </div>
          <div className="right-arrow">
            <KeyboardArrowRightIcon sx={{ fontSize: 25 }} />
          </div>
        </div>
        <div className="menus">
          <div>
            <div className="rounded-box cyan-box">
              <RestaurantMenuIcon />
            </div>
            <span>Menus</span>
          </div>
          <div className="right-arrow">
            <KeyboardArrowRightIcon sx={{ fontSize: 25 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
