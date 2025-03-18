import React from 'react'
import { Link } from 'react-router-dom'

const EVENTS=[
  {id:"e1",title:"Event 1"},
  {id:"e2",title:"Event 2"},
  {id:"e3",title:"Event 3"},
]

export default function EventPage() {
  return (
    <div>
      <ul>
        {EVENTS.map((event)=>(
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
