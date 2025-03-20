import React from 'react'
import EventForm from '../components/EventForm'
import { redirect } from 'react-router-dom'

export default function NewEventPage() {
  return (
    <EventForm></EventForm>
  )
}

export async function action({request, params}){
  const data = await request.formData()
  const formData = {
    title:data.get('title'),
    image:data.get('image'),
    date:data.get('date'),
    description:data.get('description')
  }
  console.log(formData)
  const response = await fetch("http://localhost:8080/events",
    {
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify(formData)
    }
  )
  if(!response.ok){
    console.log("Inside response"+response)
    throw new Response(JSON.stringify({message:"Failed to add new event"}),{status:500})
  }
  else{
 //   return response
    return redirect("/events")
  }
}
