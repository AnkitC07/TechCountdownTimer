import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Pagecss from '../cssfile/Timer_nav.module.css'
export const TimerNav = ({ nav }) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  console.log(id, "nav links ")

  return (
    <div className={`countdown_box ${Pagecss.box}`}>
      <ul className="countdown" id="navBar">
        {nav.map((x) => {
          console.log(nav)
          let idtype = id == null ? x.path : `${x.path}`
          console.log(idtype)
          return (
            <li key={x.path} id={x.title} className="countdown_tab">
              <NavLink to={idtype} end>
                {x.title}
              </NavLink>
            </li>
          )
        })}
      </ul>
      <Outlet />
    </div>
  )
}
