import {
  SyntheticEvent,
  useCallback,
  useMemo,
  useState,
} from "react";
import "./App.css";
import { DropdownValue, Tower } from "./types";
import Dropdown from "./components/Dropdown";
import {
  towerOptions,
  floorOptions,
  roomOptions,
} from "./components/optionsConfig";
import Datepicker from "./components/Datepicker";
import Textarea from "./components/Textarea";
import { Btn } from "./components/Btn";

interface BookingForm {
  tower: Tower | "";
  floor: number;
  room: number;
  date: string;
  comment: string;
  from: string;
  to: string;
}

function App() {
  const [tower, setTower] = useState<Tower | "">("");
  const [floor, setFloor] = useState<number>(0);
  const [room, setRoom] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");

  const memoFormValue = useMemo<BookingForm>(() => {
    return {
      date,
      from,
      to,
      tower,
      floor,
      room,
      comment,
    };
  }, [date, from, to, tower, floor, room, comment]);

  function submitForm(event: SyntheticEvent) {
    event.preventDefault();
    console.log(
      "Submited Form Value:",
      JSON.stringify(memoFormValue),
      memoFormValue
    );
  }

  function resetForm() {
    setTower("");
    setFloor(0);
    setRoom(0);
    setDate("");
    setComment("");
    setFrom("");
    setTo("");
  }

  const updateTower = useCallback(
    (value: DropdownValue) => {
      setTower(value as Tower);
    },
    [setTower]
  );

  const updateFloor = useCallback(
    (value: DropdownValue) => {
      setFloor(Number(value));
    },
    [setFloor]
  );

  const updateRoom = useCallback(
    (value: DropdownValue) => {
      setRoom(Number(value));
    },
    [setRoom]
  );

  return (
    <div className="wrapper">
      <form className="form" onReset={resetForm} onSubmit={submitForm}>
        <div className="dropdowns-wrapper">
          <Dropdown
            label='Выберете башню'
            updateValue={updateTower}
            value={tower}
            options={towerOptions}
          />
          <Dropdown
            label='Выберете этаж'
            updateValue={updateFloor}
            value={floor}
            options={floorOptions}
          />
          <Dropdown
          label='Выберете комнату'
          updateValue={updateRoom}
          value={room}
          options={roomOptions} />
        </div>

        <Datepicker
          updateDateValue={setDate}
          updateTimeFromValue={setFrom}
          updateTimeToValue={setTo}
          dateValue={date}
          fromValue={from}
          toValue={to}
        />
        <Textarea value={comment} updateValue={setComment} />
        <div className="buttons-wrapper">
          <Btn type="submit">Отправить</Btn>
          <Btn type="reset">Очистить</Btn>
        </div>
      </form>
    </div>
  );
}

export default App;
