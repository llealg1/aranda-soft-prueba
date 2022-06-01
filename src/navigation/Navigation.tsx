import { lazy } from 'react'
import { Routes, Route } from "react-router-dom";

const LazyHome      = lazy(() => import(/*webpackChunkName: "LazyHome"*/'../pages/Principal'))
const LazyVegan     = lazy(() => import(/*webpackChunkName: "LazyVegan"*/'../pages/Vegan'))
const LazyCake      = lazy(() => import(/*webpackChunkName: "LazyCake"*/'../pages/Cake'))
const LazyBreakfast = lazy(() => import(/*webpackChunkName: "LazyBreakFast"*/'../pages/BreakFast'))
const LazySoup      = lazy(() => import(/*webpackChunkName: "LazySoup"*/'../pages/Soup'))
const LazyKids      = lazy(() => import(/*webpackChunkName: "LazyKids"*/'../pages/Kids'))

const Navigation = () => {
  return(
    <Routes>
      <Route path="/" element={< LazyHome/>} />
      <Route path="vegetarianos" element={<LazyVegan/>}/>
      <Route path="platos_principales" element={< LazyHome/>}/>
      <Route path="tortas" element={<LazyCake/>}/>
      <Route path="comida_rapida" element={<LazyBreakfast/>}/>
      <Route path="menu_kids" element={<LazyKids/>}/>
      <Route path="sopas" element={<LazySoup/>}/>
    </Routes>
  )
}

export default Navigation;