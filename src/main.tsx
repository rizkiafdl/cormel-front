import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@/index.css'

import { ThemeProvider } from "@material-tailwind/react";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from '@Pages/LandingPage/index.tsx';
import CoursePage from '@Pages/CoursePage/index.tsx';
import MentorPage from '@Pages/MentoringPage/index.tsx';
import RelationPage from '@Pages/RelationPage/index.tsx';
import ReviewPage from '@Pages/ReviewPage/index.tsx';
import CourseDetail from '@Pages/CourseDetail/index.tsx';
import UserDashboard from '@Pages/UserDashboard/index.tsx';
import LoginPage from './Pages/LoginPage';
import ProjectForm from './Components/RelationComponent/ProjectForm';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/dashboard/:user' element={<UserDashboard />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path='/course/:id' element={<CourseDetail />} />
          <Route path='/mentor' element={<MentorPage />} />
          <Route path='/project-form' element={<ProjectForm />} />
          <Route path='/relation' element={<RelationPage />} />
          <Route path='/review' element={<ReviewPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  </StrictMode>,
)
