import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AppLayout from './layouts/AppLayout'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from 'pages/Home';
import RecordPage from 'pages/Record';
import ThemeProvider from 'providers/ThemeProvider';
import BlogPage from 'pages/Blog';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppLayout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/record' element={<RecordPage />} />
            <Route path='/blog' element={<BlogPage />} />
          </Routes>
        </AppLayout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
