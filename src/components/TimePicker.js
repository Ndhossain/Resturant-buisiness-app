import { useEffect } from "react";
import "../styles/TimePicker.module.css";

export default function TimePicker({ time, setTime, reservationType }) {
  const hours = [10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];
  const minutes = [`00`, 15, 30, 45];

  const allTimes = hours.map((hour) =>
    minutes.map(
      (minute) => `${hour}:${minute} ${(hour > 9) & (hour < 12) ? `am` : `pm`}`
    )
  );

  useEffect(() => {
    setTime(() => {
      if (
        reservationType === `Custom Reservation` ||
        reservationType === `Event Reservation`
      ) {
        return allTimes[0][0];
      } else if (reservationType === `Launch Reservation`) {
        return allTimes[2][0];
      } else if (reservationType === `Dinner Reservation`) {
        return allTimes[9][0];
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reservationType]);


  return (
    <>
      <select
        onChange={(e) => setTime(e.target.value)}
        name="location"
        value={time}
        style={{ cursor: `pointer` }}
      >
        {reservationType === `Custom Reservation`
          ? allTimes.map((time, timeind) =>
              time.map((val, valind) => (
                <option key={`${timeind}.${valind}`}>{val}</option>
              ))
            )
          : reservationType === `Launch Reservation`
          ? allTimes.map(
              (time, timeind) =>
                timeind > 1 &&
                timeind < 5 &&
                time.map((val, valind) => (
                  <option key={`${timeind}.${valind}`}>{val}</option>
                ))
            )
          : reservationType === `Dinner Reservation`
          ? allTimes.map(
              (time, timeind) =>
                timeind > 8 &&
                time.map((val, valind) => (
                  <option key={`${timeind}.${valind}`}>{val}</option>
                ))
            )
          : allTimes.map(
              (time, timeind) =>
                timeind < 9 &&
                time.map((val, valind) => (
                  <option key={`${timeind}.${valind}`}>{val}</option>
                ))
            )}
      </select>
    </>
  );
}
