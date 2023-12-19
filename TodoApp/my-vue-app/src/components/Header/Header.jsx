import  { useContext } from 'react';
import  {TokenContext}  from '../../Context/TokenContext.js';
import { NavLink, Outlet } from 'react-router-dom';

export default function Header() {
  const token = localStorage.getItem("authToken");
  const {user} = useContext(TokenContext);
  const logout = () => {
    localStorage.removeItem("authToken");
    window.location.href='/login';
  }
  
  return (
    <div>
      <nav className='header bg-slate-200 flex justify-between items-center'>
        <div className='logo w-1/4 text-center'>
           <NavLink to='/'> Todo App</NavLink>
        </div>
        <div className='flex justify-between'>
          {
            token ? (
              <div className="flex items-center justify-center">
                <p className="mr-5">
                  welcome, <span className="text-xl text-blue-800 capatalize">{user.name}</span>
                  <button onClick={logout} className="logout mr-4">Logout</button>
                </p>
              </div>
            ): (
              <ul className='flex justify-end gap-3 w-3/4 pr-6'>
                 <li>
                  <NavLink to={'/login'}>Login</NavLink>
                 </li>
                 <li>
                  <NavLink to={'/Register'}>Register</NavLink>
                 </li>
              </ul>
            )
          }
        </div>
      </nav>
      <Outlet/>
    </div>
  )
}
