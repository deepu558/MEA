import './App.css'
import './themes.css'
import { ClassicLayout } from './layouts/ClassicLayout.jsx'
import './staff-layouts.css'

function App() {
  return (
    <div className="site" data-theme="heritage" data-layout="classic">
      <ClassicLayout />
    </div>
  )
}

export default App
