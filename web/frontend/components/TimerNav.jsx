import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Pagecss from '../cssfile/Timer_nav.module.css'
export const TimerNav = ({ nav }) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  // console.log(id, "nav links ")

  return (
    <div className={`countdown_box ${Pagecss.box}`}>
      <ul className="countdown" id="navBar">
        {nav.map((x) => {
          let idtype = id == null ? x.path : `${x.path}?id=${id}`
          return (
            <li key={x.path} id={x.title} className="countdown_tab">
              <NavLink to={idtype} className={({ isActive }) => (isActive ? 'active' : 'inactive')} end>
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

// import { Card, Tabs } from '@shopify/polaris';
// import { useState, useCallback } from 'react';

// export const TimerNav = ({nav}) => {
//   const [selected, setSelected] = useState(0);

//   const handleTabChange = useCallback(
//     (selectedTabIndex) => setSelected(selectedTabIndex),
//     [],
//   );

//   const tabs = [
//     {
//       id: 'all-customers-1',
//       content: 'All',
//       accessibilityLabel: 'All customers',
//       panelID: 'all-customers-content-1',
    
//     },
//     {
//       id: 'accepts-marketing-1',
//       content: 'Accepts marketing',
//       panelID: 'accepts-marketing-content-1',
//     },
//     {
//       id: 'repeat-customers-1',
//       content: 'Repeat customers',
//       panelID: 'repeat-customers-content-1',
//     },
//     {
//       id: 'prospects-1',
//       content: 'Prospects',
//       panelID: 'prospects-content-1',
//     },
//   ];

//   return (
//     <Card>
//       <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
//         <Card.Section title={tabs[selected].content}>
//           <p>Tab {selected} selected</p>
//         </Card.Section>
//       </Tabs>
//     </Card>
//   );
// }