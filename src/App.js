import logo from './logo.svg';
import './App.css';

import React from 'react'
import formReducer from './components/form-reducer/formReducer';
import { inputDispatch } from './components/inputDispatch/inputDispatch';


const regex = {
  minChar: /[0-9a-zA-Z]{6,}/,
  maxChar: /^[a-z]{0,`10`}$/,
  email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
  text: /(?:\W|^)(\Q$word\E)(?:\W|$)/i,
  number: /[0-9]/
}

export const Auth = [
  {
    name: "email",
    type: "email",
    validation: {
      required: true,
      regex: regex.email,
      msg: "email is invalid"
    },
  },
  {
    type: "password", validation: {
      required: true,
      regex: regex.minChar,
      msg: "one capital letter one number one spacial charachter and total 8 char"
    }
  },
  {
    type: "number", validation: {
      required: true,
      regex: regex.number,
      msg: "maximum 8 numbers"
    }
  },
  {
    type: "username", validation: {
      required: true
    }
  },
  {
    type: "select", validation: {
      required: false
    }
  }
]



const Istate = {
  username: "",
  password: "",
  email: "",
  select: "",
  number: "",
  gender: "",
  file: "",
  has: false,

}

function App() {
  const [state, dispatch] = React.useReducer(formReducer, Istate)

  const handleChange = (e) => {
    inputDispatch(dispatch, e)
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label>Username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={state.username}
        onChange={handleChange}
      />

      <select name="select" value={state.select} onChange={handleChange}>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Cranberry">Cranberry</option>
      </select>

      <button
        type="button"
        name="submitForm"
        id="submitForm"
        onClick={() => {
          console.log(state)

        }}
      >submit</button>
    </div>
  );
}

export default App;
