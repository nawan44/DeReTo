import axios from "axios";
import {
  LOGIN,
  REGISTER,
  LOGINPROCESSING,
  REGISTERING
} from "./actionTypes.js";

// export const userClear = () => {
//   const type = LOGIN;
//   User.clearData();
//   return { type, token: null };
// };

export const startLogin = content => {
  console.log("vvvvvvvvvv",content)
  return dispatch => {
    dispatch(loginProcessing());
    axios.post(process.env.REACT_APP_URL+"authentication/login", {
      // method: 'POST',

      // mode: "cors",
      // xhrFields: {
      //   withCredentials: false,
      // }, 
      
      headers: {
        'Content-Type': 'aplication/json',

        // 'X-Requested-With': 'XMLHttpRequest',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        // 'Access-Control-Allow-Headers': "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
      }
    }, content)
      //   .post("https://6q7yl104k.sse.codesandbox.io/login", content)
      .then(res => {
        debugger;
        dispatch(login(content));
        console.log("res", res)
        
      })
      .catch(error => {
        debugger;
        console.log(error);
      })
  };
};
export const startRegister = content => {
  return dispatch => {
    dispatch(registerProcessing());
    setTimeout(() => {
      dispatch(register(content));
    }, 2000);
  };
};

const loginProcessing = () => {
  return {
    type: LOGINPROCESSING,
    payload: ""
  };
};
// const navigate = () => {
//     const navigate =useNavigate()

// }
const login = content => {
  // const navigation = useNavigation();
  // localStorage.setItem("token", token);

  return {
    type: LOGIN,
    payload: content
  };
};

const registerProcessing = () => {
  return {
    type: REGISTERING,
    payload: ""
  };
};

export const register = content => {
  return {
    type: REGISTER,
    payload: content
  };
};

// export const userLogout = () => {
//   return dispatch => {
//     dispatch(alertSuccess("Out..."));
//     dispatch(userClear());
//   };
// };
