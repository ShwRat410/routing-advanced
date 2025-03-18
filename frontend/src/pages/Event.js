import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import EventsList from '../components/EventsList'

export default function EventPage() {

  const events = useLoaderData()

  return (
    <EventsList events={events}></EventsList>
  )
}

export async function loader(){
  const response = await fetch("http://localhost:8080/events")
  if(!response.ok){

  }
  else{
    const resData = await response.json()
    return resData.events
  }
}
