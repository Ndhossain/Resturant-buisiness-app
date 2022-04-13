import classes from "../styles/BookingForm.module.css";

export default function BookingForm({
  location,
  setLocation,
  partySize,
  setPartySize,
}) {
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
      <div className={classes.dateTime}>
        <div className={classes.date} style={{cursor: `pointer`}}>
          <label>Date</label>
          <div className={classes.dateInput}>
            <input type="date" disabled />
            <span class="material-icons-outlined">keyboard_arrow_down</span>
          </div>
        </div>
        <div className={classes.time}>hello world</div>
      </div>
    </form>
  );
}
