import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Pagecss from '../cssfile/Timer_nav.module.css'
export const TimerNav = ({ nav }) => {
  return (
    <div className={`countdown_box ${Pagecss.box}`}>
      <ul className="countdown" id="navBar">
        {nav.map((x) => {
          return (
            <li key={x.path} id={x.title} className="countdown_tab">
              <NavLink to={x.path} end>
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
