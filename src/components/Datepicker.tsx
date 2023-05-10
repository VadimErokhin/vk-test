import { memo } from "react";

interface DatePickerProps {
  updateDateValue: (value: string) => void;
  updateTimeFromValue: (value: string) => void;
  updateTimeToValue: (value: string) => void;
  dateValue: string;
  fromValue: string;
  toValue: string;
}



const Datepicker = memo((props: DatePickerProps) => {
  console.log('fjfj')
  return (
    <>
      <input
        onChange={(e) => props.updateDateValue(e.target.value)}
        type="date"
        value={props.dateValue}
      />
      <input
        onChange={(e) => props.updateTimeFromValue(e.target.value)}
        type="time"
        value={props.fromValue}
        max={props.toValue || "24:00"}
      />
      <input
        onChange={(e) => props.updateTimeToValue(e.target.value)}
        type="time"
        value={props.toValue}
        min={props.fromValue}
      />
    </>
  );
})

export default Datepicker
