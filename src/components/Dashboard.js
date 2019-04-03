import React from "react";
import PropTypes from "prop-types";

const Dashboard = ({ title, user, data = {} }) => {
  const { departure, flight, forecast } = data;

  const displayUserName = () => {
    return !!user ? user.email : null;
  };

  const displayFlight = () => {
    return !!flight ? flight.plane.make : null;
  };

  const displayDeparture = () => {
    return !!departure ? departure.date : null;
  };

  const displayForecast = () => {
    return !!forecast ? forecast.forecast : null;
  };

  return (
    <div className="o-dashboard card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <div className="user-name">
          <h5>Here is your itinerary:</h5>
          <span className="fa fa-user" aria-hidden="true" />
          &nbsp;
          {displayUserName() || <span className="loading" />}
        </div>
        <div className="i-departure">
          <strong>Your Departure:</strong>{" "}
          {displayDeparture() || <span className="loading" />}
        </div>
        <div className="i-flight">
          <strong>Your Flight:</strong>{" "}
          {displayFlight() || <span className="loading" />}
        </div>
        <div className="i-forecast">
          <strong>Weather Forecast:</strong>{" "}
          {displayForecast() || <span className="loading" />}
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  user: PropTypes.object,
  data: PropTypes.object,
  title: PropTypes.string
};

export default Dashboard;
