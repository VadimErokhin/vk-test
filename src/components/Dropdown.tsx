import { memo } from "react";
import { DropdownValue, SelectOption } from "../types";

interface DropdownProps {
  options: Array<SelectOption<DropdownValue>>;
  value: DropdownValue;
  updateValue: (value: DropdownValue) => void;
  label: string;
}

const Dropdown = memo((props: DropdownProps) => {
  return (
    <div>
      <label className="dropdown-label">
        {props.label}
        <select
          className="select"
          required
          value={props.value}
          onChange={(e) => props.updateValue(e.target.value)}
        >
          <option value="">Выбрать</option>
          {props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
});

export default Dropdown;
