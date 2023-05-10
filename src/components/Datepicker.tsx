import { memo } from "react";

interface DatePickerProps {
  updateDateValue: (value: string) => void;
  updateTimeFromValue: (value: string) => void;
  updateTimeToValue: (value: string) => void;
  dateValue: string;
  fromValue: string;
  toValue: string;
}

const Datepicker = (props: DatePickerProps) => {
  return (
    <div className="datepicker datepicker-wrapper">
      <div className="datepicker__input-box">
        <label className="datepicker__label" htmlFor="data">
          Дата:
        </label>
        <input
          id="data"
          className="datepicker__input"
          required
          onChange={(e) => props.updateDateValue(e.target.value)}
          type="date"
          value={props.dateValue}
        />
      </div>

      <div className="datepicker__input-box">
        <label className="datepicker__label" htmlFor="from">
          C:
        </label>
        <input
          id="from"
          className="datepicker__input"
          required
          onChange={(e) => props.updateTimeFromValue(e.target.value)}
          type="time"
          value={props.fromValue}
          max={props.toValue || "24:00"}
        />
      </div>

      <div className="datepicker__input-box">
        <label className="datepicker__label" htmlFor="to">
          До:
        </label>
        <input
          id="to"
          className="datepicker__input"
          required
          onChange={(e) => props.updateTimeToValue(e.target.value)}
          type="time"
          value={props.toValue}
          min={props.fromValue}
        />
      </div>
    </div>
  );
};

export default memo(Datepicker);
