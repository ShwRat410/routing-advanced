import React from 'react'
import { useLoaderData } from 'react-router-dom'
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
  const response = await fetch("http://localhost:8080/events")
  if(!response.ok){
//    throw ({message:"An error occured"})
    throw new Response(JSON.stringify({message:"Could not fetch events"}),{status:500})
//deprecated now and removed
    // throw json(
    //     {message:"Could not fetch events"},
    //     {status:500}
    //   )
  }
  else{
    const resData = await response.json()
    return resData
  }
}
