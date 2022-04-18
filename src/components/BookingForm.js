import { useState } from "react";
import Calendar from "react-calendar/dist/umd/Calendar";
import classes from "../styles/BookingForm.module.css";
import "../styles/ReactCalender.css";
import TimePicker from "./TimePicker";

export default function BookingForm({
  location,
  setLocation,
  partySize,
  setPartySize,
  date,
  setDate,
  time,
  setTime,
  reservationType,
}) {
  const [x, setX] = useState(`none`);


  return (
    <form className={classes.bookingForm}>
      <div className={classes.location}>
        <label>Location</label>
        <select
          onChange={(e) => {
            setLocation(e.target.value);
            setPartySize(1);
          }}
          name="location"
          value={location}
          style={{ cursor: `pointer` }}
        >
          <option>Indoor</option>
          <option>Outdoor</option>
          <option>Rooftop</option>
        </select>
      </div>
      <div className={classes.partySize}>
        <label>Party Size</label>
        <div className={classes.prtySizeInput}>
          <input type="number" disabled value={partySize} />
          <div>
            <span
              onClick={() => {
                location === `Indoor`
                  ? setPartySize((prev) => (prev < 10 ? prev + 1 : 10))
                  : setPartySize((prev) => (prev < 4 ? prev + 1 : 4));
              }}
              className="material-icons-outlined"
              style={{
                fontSize: `16px`,
                cursor: `pointer`,
                marginRight: `.2em`,
              }}
            >
              add
            </span>
            <span
              onClick={() => setPartySize((prev) => (prev > 1 ? prev - 1 : 1))}
              className="material-icons-outlined"
              style={{
                fontSize: `16px`,
                cursor: `pointer`,
                marginLeft: `.2em`,
              }}
            >
              remove
            </span>
          </div>
        </div>
      </div>
      <div className={classes.date} style={{ cursor: `pointer` }}>
        <label>Date</label>
        <div
          className={classes.dateInput}
          onClick={() => setX((prev) => (prev === `none` ? `block` : `none`))}
        >
          <input
            type="text"
            disabled
            value={`${date.getDate()}-${
              date.getMonth() + 1
            }-${date.getFullYear()}`}
          />
          <span className="material-icons-outlined">keyboard_arrow_down</span>
        </div>
        <div className={classes.reactCalc} style={{ display: x }}>
          <Calendar
            onChange={setDate}
            value={date}
            tileDisabled={({ date }) =>
              date.getDay() === 0 ||
              date.getDay() === 6 ||
              (date.getMonth() === new Date().getMonth() &&
                date.getDate() < new Date().getDate()) ||
              date.getMonth() < new Date().getMonth() ||
              date.getMonth() > new Date().getMonth() + 1 ||
              date.getFullYear() < new Date().getFullYear() ||
              date.getFullYear() > new Date().getFullYear()
            }
          />
        </div>
      </div>
      <div className={classes.time}>
        <label>Time</label>
        <TimePicker
          time={time}
          setTime={setTime}
          reservationType={reservationType}
        />
      </div>
    </form>
  );
}
