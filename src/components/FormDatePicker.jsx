import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarDays } from "react-icons/fa6";

import "react-datepicker/dist/react-datepicker.css";

import "react-datepicker/dist/react-datepicker-cssmodules.css";

const FormDatePicker = ({ name, label }) => {
  const [startDate, setStartDate] = useState(new Date("July 21, 2010"));
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <DatePicker
        showIcon
        icon={<FaCalendarDays className="mt-1" />}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="indent-2 text-lg"
        id={name}
        name={name}
      />
    </div>
  );
};

export default FormDatePicker;
