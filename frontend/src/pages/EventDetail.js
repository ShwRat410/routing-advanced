import React from 'react'
import { useParams } from 'react-router-dom'

export default function EventDetailPage() {
  const params = useParams()
  return (
    <div>
      Event Detail
      <p>{params.id}</p>
    </div>
  )
}
