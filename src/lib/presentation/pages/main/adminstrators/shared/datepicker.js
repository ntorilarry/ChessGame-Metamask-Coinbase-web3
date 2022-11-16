import React, { useState } from "react";
import { DatePicker, Form } from "antd";
import moment from "moment";
import "antd/dist/antd.css";

function Datepicker() {
  const [dateRange, setDateRange] = useState([moment(), moment()]);
  return (
    <div className="mx-4">
      <DatePicker.RangePicker
        format="MMM Do, YYYY"
        value={dateRange}
        separator={"-"}
        onChange={(x) => {
          console.log(x);
          setDateRange(x);
        }}
        allowClear={false}
      />
    </div>
  );
}

export default Datepicker;
