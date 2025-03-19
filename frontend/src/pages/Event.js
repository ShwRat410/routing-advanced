import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import EventsList from '../components/EventsList'

export default function EventPage() {

  const data = useLoaderData()
  const events = data.events
  // if(data.isError){
  //   return "Error is there"
  // }
  return (
    <EventsList events={events}></EventsList>
  )
}

export async function loader(){
  const response = await fetch("http://localhost:8080/eventss")
  if(!response.ok){
    throw ({message:"An error occured"})
  }
  else{
    const resData = await response.json()
    return resData
  }
}
