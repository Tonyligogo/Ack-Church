import React from "react";
import "./Events.css";
import { FaRegCalendarAlt } from "react-icons/fa";

import Motivate from "../../assets/motivate.jpg";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdLocationCity } from "react-icons/md";
import Inspire from "../../assets/inspire.jpg";

const Events = () => {
  const events = [
    {
      id: 1,
      imgSrc: Inspire,
      title: "Know Jesus Christ Better Through Bible Study",
      date: "Friday, 6:00 Pm",
      location: "ACK St.Peter's Embakasi",
    },
    {
      id: 2,
      imgSrc: Motivate,
      title: "Join Us For Community Evangelism",
      date: "Sunday, 2:00 Pm - 8:00 Pm",
      location: "ACK St.Peter's Embakasi",
    },
    {
      id: 3,
      imgSrc: Inspire,
      title: "Know Jesus Christ Better Through Bible Study",
      date: "Friday, 6:00 Pm",
      location: "ACK St.Peter's Embakasi",
    },
    {
      id: 4,
      imgSrc: Inspire,
      title: "Know Jesus Christ Better Through Bible Study",
      date: "Friday, 6:00 Pm",
      location: "ACK St.Peter's Embakasi",
    },
  ];
  const displayedEvents = events.slice(0, 3);
  return (
    <div className="container">
      <div className="eventsWrapper">
        {displayedEvents.map((event) => (
          <div key={event.id}>
            <img src={event.imgSrc} alt="picture" className="eventPic" />
            <div className="eventContent">
              <h2>{event.title}</h2>
              <span>
                {" "}
                <FaRegCalendarAlt />
                {event.date}{" "}
              </span>
              <span>
                {" "}
                <MdLocationCity />
                {event.location}{" "}
              </span>
              {/*<span>
            {" "}
            <FaLocationCrosshairs /> Embakasi, Nairobi{" "}
  </span>*/}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
