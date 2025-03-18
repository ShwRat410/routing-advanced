import React from 'react'
import { Outlet } from 'react-router-dom'
import EventsNavigation from '../components/EventsNavigation'

export default function EventLayout() {
  return (
    <div>
        <EventsNavigation></EventsNavigation>
        <Outlet></Outlet>
    </div>
  )
}
