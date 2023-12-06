import Sidebar from "./global/Sidebar";
import Rsidebar from "./global/Rsidebar";
import Approute from "./route/Approute";
import "./App.css"

const App = () => {
  return (
    <div className='min-h-screen flex gap-8'>
      <Sidebar/>
      <div className="grow flex"> 
        <Approute/>
      </div>
    </div>
  )
}

export default App;