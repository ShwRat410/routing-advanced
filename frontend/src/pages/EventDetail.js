import React from 'react'
import EventItem from '../components/EventItem'
import { redirect, useRouteLoaderData } from 'react-router-dom'

export default function EventDetailPage() {
  const data = useRouteLoaderData('event-detail')
  return (
    <EventItem event={data.event}>

    </EventItem>
  )
}

export async function loader({request,params}){
 console.log("http://localhost:8080/events/"+params.id)
 const response = await fetch("http://localhost:8080/events/"+params.id)
 console.log(response)
 if(!response.ok){
  console.log("Inside if")
  throw new Response(JSON.stringify({message:"Not able to fetch event details"}),{status:500})
 }
 else{
  return response
 }
}

export async function action({request,params}){
  const response = await fetch("http://localhost:8080/events/"+params.id,{
    method:request.method
  })
  if(!response.ok){
    throw new Response({message:"Unable to delete events"},{status:500})
  }
  return redirect('/events')
} 