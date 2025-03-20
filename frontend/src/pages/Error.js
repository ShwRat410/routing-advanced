import React from 'react'
import PageContent from '../components/PageContent'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {

  const error = useRouteError()

  let title = "An error occured"
  let message = "Something went wrong" 
  console.log(error.status)

  if(error.status===500){
    console.log("Inside 500 status code")
    message = JSON.parse(error.data).message
  }

  if(error.status===404){
    message = "Could not find resource or page"
  }

  return (
    <div>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </div>
  )
}
