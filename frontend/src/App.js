// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import EventPage,{loader as eventLoader} from './pages/Event';
import EventDetailPage,{loader as eventDetailLoader} from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import RootPage from './pages/Root';
import EventLayout from './pages/EventLayout';
import ErrorPage from './pages/Error';
import { action as actionNewEvent } from './pages/NewEvent';


const router = createBrowserRouter([
  {
    path:'/',
    element:<RootPage></RootPage>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {index:true,element:<HomePage></HomePage>},
      {
        path:'events',
        element:<EventLayout></EventLayout>,
        children:[
          {
            index:true,
            element:<EventPage></EventPage>,
            loader:eventLoader,
          },
          {
            id:"event-detail",
            path:":id",
            loader:eventDetailLoader,
            children:[
              {index:true,element:<EventDetailPage></EventDetailPage>},
              {path:'edit',element:<EditEventPage></EditEventPage>}
            ]
          },
          {path:'new',element:<NewEventPage></NewEventPage>, action:actionNewEvent},
        ]
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
