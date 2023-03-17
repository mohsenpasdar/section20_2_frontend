import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

//   if (data.isError) {
//     return <p>{data.message}</p>
//   }
  const events = data.events
  
  return <EventsList events={events} />;
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/eventss");
  if (!response.ok) {
    // return { isError: true, message: 'could not fetch events'}
    throw new Error('could not detch events!')
  } else {
    return response
  }
};
