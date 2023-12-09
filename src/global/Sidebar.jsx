import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)



  return (
    <div className="sidebar border-r-2 w-52 duration-300 bg-white" style={isCollapsed ? {width: "80px"}:{width: "208px"}}>
        <div className='min-h-screen pt-5 ml-5 sticky top-0'>
          <div className='-mt-4 h-10 mb-4 text-center pr-4 bg-slate-100 rounded-l-md flex items-center gap-4 cursor-pointer' onClick={() => setIsCollapsed(prev => !prev)}>
            <MenuIcon fontSize='large'/>
            {isCollapsed ? null : <p className='text-2xl font-semibold'>ADMIN</p>}
          </div>
            {isCollapsed 
            ? null
            : <div className='flex flex-col item-center gap-6 px-2'>
               <div className=' w-28 h-28 rounded-full bg-sky-500'><img src="" alt="" /></div>
               <p className='text-2xl whitespace-nowrap'>Adu (A.) Joy</p>
              </div>
            }
          <div className='mt-20 flex flex-col gap-6 w-full'>
              <NavLink to="/" className="flex items-center gap-2 hover:bg-white hover:text-purple-600 w-full py-4 px-2 rounded-l-md">
                <DashboardIcon/><span style={isCollapsed ? {opacity: "0"}:null}>Dashboard</span>  
              </NavLink >
              <NavLink to="analytics" className="flex items-center gap-2 hover:bg-white hover:text-purple-600 w-full py-4 px-2 rounded-l-md">
                <BarChartIcon/><span style={isCollapsed ? {opacity: "0"}:null}>Analytics</span>
              </NavLink>
              <NavLink to="/settings" className="flex items-center gap-2 hover:bg-white hover:text-purple-600 w-full py-4 px-2 rounded-l-md">
                <SettingsIcon/><span style={isCollapsed ? {opacity: "0"}:null}>Settings</span>
              </NavLink>
          </div>
      </div>
    </div>
  )
}

export default Sidebar;