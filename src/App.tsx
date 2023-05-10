import { useCallback, useMemo, useReducer, useState } from "react";
import "./App.css";
import { DropdownValue, Tower } from "./types";
import Dropdown from "./components/Dropdown";
import {
  towerOptions,
  floorOptions,
  roomOptions,
} from "./components/optionsConfig";
import Datepicker from "./components/Datepicker";
import { Textarea } from "./components/Textarea";
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

const UPDATE_DATE = 'UPDATE_DATE'
const UPDATE_FROM = 'UPDATE_FROM'
const UPDATE_TO = 'UPDATE_TO'
const UPDATE_COMMENT = 'UPDATE_COMMENT'

function reducer(state: any, action: any) {
  switch(action.type){
    case UPDATE_DATE :
      return {
        ...state, date: action.value
      }
    case UPDATE_FROM :
      return {
        ...state, from: action.value
      }
    case UPDATE_TO :
      return {
        ...state, to: action.value
      }
    case UPDATE_COMMENT :
      return {
        ...state, comment: action.value
      }
  }

}


function App() {
  const[state, dispatch] = useReducer(reducer, {
    // tower: "A",
    // floor: 0,
    // room: 0,
    date: "",
    comment: "",
    from: "",
    to: "",
  })

  const [form, setForm] = useState<BookingForm>({
    tower: "A",
    floor: 0,
    room: 0,
    date: "",
    comment: "",
    from: "",
    to: "",
  });

  // const [date, setDate] = useState('')
  // const [from, setFrom] = useState('')
  // const [to, setTo] = useState('')

  function setDate(value: string ) {
    dispatch({
      type: UPDATE_DATE,
      value
    })
  }

  function setFrom(value: string ) {
    dispatch({
      type: UPDATE_FROM,
      value
    })
  }

  function setTo(value: string ) {
    dispatch({
      type: UPDATE_TO,
      value
    })
  }

  function setComment(value: string ) {
    dispatch({
      type: UPDATE_COMMENT,
      value
    })
  }

  function updateTower(value: DropdownValue) {
    console.log(value);
    setForm((state) => {
      return {
        ...state,
        tower: value as Tower,
      };
    });
  }

  function updateFloor(value: DropdownValue) {
    console.log(value);
    setForm((state) => {
      return {
        ...state,
        floor: value as number,
      };
    });
  }

  function updateRoom(value: DropdownValue) {
    console.log(value);
    setForm((state) => {
      return {
        ...state,
        room: value as number,
      };
    });
  }

  function updateDate(value: string) {
    console.log(value);
    setForm((state) => {
      return {
        ...state,
        date: value,
      };
    });
  }


  const updateStringValue = useCallback((key: keyof BookingForm) => {
    console.log("setUpUpdateStringValue", key);
    return (value: string) => {
      setForm((state) => {
        console.log("updateStringValue", key, value);
        return {
          ...state,
          [key]: value,
        };
      });
    };
  }, [setForm])

  function submitForm(event) {
    event.preventDefault();
    console.log(event);
  }

  const memoDatepickeValue = useMemo(() => {
    return {
      date: form.date,
      from: form.from,
      to: form.to
    }
  },[form])


  return (
    <form onSubmit={submitForm}>
      <Dropdown
        updateValue={updateTower}
        value={form.tower}
        options={towerOptions}
      />
      <Dropdown
        updateValue={updateFloor}
        value={form.floor}
        options={floorOptions}
      />
      <Dropdown
        updateValue={updateRoom}
        value={form.room}
        options={roomOptions}
      />
      <Datepicker
        updateDateValue={setDate}
        updateTimeFromValue={setFrom}
        updateTimeToValue={setTo}
        dateValue={state.date}
        fromValue={state.from}
        toValue={state.to}
      />
      <Textarea value={form.comment} updateValue={setComment} />
      <Btn>
        Отправить
      </Btn>
       <Btn>
        Очистить
      </Btn>
    </form>
  );
}

export default App;
