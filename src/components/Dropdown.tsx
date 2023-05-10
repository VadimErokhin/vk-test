import { DropdownValue, SelectOption } from "../types";


interface DropdownProps {
  options: Array<SelectOption<DropdownValue>>;
  value: DropdownValue;
  updateValue: (value: DropdownValue) => void
}

export default function Dropdown(props: DropdownProps) {


  return (
    <div className="wrapper">
      <select value={props.value} onChange={(e) => props.updateValue(e.target.value)}>
        <option> Выбрать</option>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}
