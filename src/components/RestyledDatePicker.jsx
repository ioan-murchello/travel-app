import styled from "styled-components";
import DatePicker from "react-date-picker";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const StyledDatePicker = styled(DatePicker)`
  font-family: "Arial";
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 1.4rem;
  min-width: 200px;

  .react-date-picker__wrapper {
    width: 100%;
    border: 1px solid var(--color-brand--2);
    padding: 0.5rem;
    border-radius: 4px;
  }

  .react-date-picker__inputGroup__input {
    font-size: 1.7rem;
  }

  .react-date-picker__calendar {
    max-width: 320px !important;
  }

  .react-date-picker__button svg {
    stroke: var(--color-brand--1);
  }
`;

const RestyledDatePicker = ({ setDate, newCity, date }) => {
  return (
    <StyledDatePicker
      name="date"
      id="date"
      onChange={(date) => setDate(date)}
      value={newCity.date || date}
    />
  );
};
export default RestyledDatePicker;
