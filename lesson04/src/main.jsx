import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import ScheduleTable from './ScheduleTable.jsx'
// import ScheduleTableReport from './ScheduleTa  bleReport.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* useState 복습 */}
    <ScheduleTable/>
    {/* <ScheduleTableReport/> */}
  </StrictMode>,
)