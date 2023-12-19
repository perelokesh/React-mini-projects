import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login';
import Register from './components/Register';
import { useEffect, useReducer } from 'react';
import taskReducer from './reducer/taskReducer';
import tokenReducer from './reducer/tokenReducer';
import userReducer from './reducer/userReducer';
import axios from './Axios/axios';
import { TokenContext } from './Context/TokenContext';
import { TaskContext } from './Context/TaskContext';
function App() { 
   const token = JSON.parse(localStorage.getItem("authToken"));
   const [tasks, dispatch] = useReducer(taskReducer, []);
   const [userToken, tokenDispatch] = useReducer(tokenReducer, token);
   const [user, userDispatch] = useReducer(userReducer, {});
   useEffect(() => {
      const fetchUser = async () => {
         try {
            const res = await axios.get("/user/getUser", {
               headers: {
                  "Authorization": `Bearer ${userToken}`
               }
            });
            console.log("response data:", res.data);
            userDispatch({type:"SET_USER", payload:res.data.user})
         } catch (error) {
            console.log(error);
         }
      }
      if(userToken){
         fetchUser();
      }
   },[userToken])
   useEffect(() => {
      const fetchTasks = async () => {
        try {
          console.log("fetchTasks");
          const res = await axios.get("/task/getTask", {
            headers: {
              Authorization: `Bearer ${userToken}`
            }
          })
          dispatch({ type: "SET_TASK", payload: res.data })
        } catch (error) {
          console.log(error);
        }
      }
      if (userToken) {
        fetchTasks()
      }
    },[userToken])
  return (
    <BrowserRouter>
    <TokenContext.Provider value={{userToken, tokenDispatch, user, userDispatch}}>
      <TaskContext.Provider value={{tasks, dispatch}}>
    <Routes>
      <Route path='/' element={<Header/>}>
         <Route path='/' element={token ? <Layout/> :<Login/>}>
            //Need to add active, alltasks, completed componets
         </Route>
         <Route path='/login' element={<Login/>}/>
         <Route path="/register" element={<Register />} />
          // Additionally we can add forget and reset pwd routes & components
      </Route>
    </Routes>          
    </TaskContext.Provider>
    </TokenContext.Provider>
    </BrowserRouter>     
    
        );
}

export default App;
