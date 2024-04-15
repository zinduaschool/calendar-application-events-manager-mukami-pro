const events = [
    {
      title: 'Birthday Party',
      date: new Date('2024-04-10'),
      location: '123 Main St',
      attendees: new Set(['Alice', 'Bob'])
    },
    {
      title: 'Conference',
      date: new Date('2024-04-12'),
      location: '456 Elm St',
      attendees: new Set(['Charlie', 'David', 'Emma'])
    },
    {
      title: 'Music Festival',
      date: new Date('2024-04-15'),
      location: '789 Oak St',
      attendees: new Set(['Frank', 'Grace', 'Henry', 'Isabella'])
    }
  ];
  const eventList =document.getElementById('eventList');
  events.forEach(event => {
    const listItem = document.createElement('li');
    listItem.innerHTML =`
    <h3>${event.title}</h3>
    <p>Date:${event.date.toDateString()}</p>
    <p>Location:${event.location}</p>
    <p>Attendees:${[...event.attendees].join(',')}</p>
    `;
    eventList.appendChild(listItem);
  });

  const today = new Date();
  const nextWeek = new Date(today.getTime()+7 * 24 *60 * 60 *1000);
   
  const upcomingEvents = events.filter(event => event.date <= nextWeek);
  const upcomingEventTitles = upcomingEvents.map(event => event.title);

  console.log(upcomingEventTitles);

  const eventOrganizers = new WeakMap();
  eventOrganizers.set(eventTitle1, organizerNameA);
  eventOrganizers.set(eventTitle2, organizerNameB);

  const organizer = eventOrganizers.get(eventTitle);

  console.log(organizer);


  const events1= [
    { title: 'Event 1', date: '2024-04-15', location: 'Location 1' },
    { title: 'Event 2', date: '2024-04-16', location: 'Location 2' },
    // ...and so on
  ];
  
  // Display events in table format
  console.log('Title\t\tDate\t\tLocation');
  events.forEach(({ title, date, location }) => {
    console.log(`${title}\t${date}\t${location}`);
  });
  
  function addAttendee(eventTitle, attendeeName) {
    // Assuming you have an object that stores events and their attendees
    const events = {
      "Event 1": new Set(["Attendee 1", "Attendee 2"]),
      "Event 2": new Set(["Attendee 3", "Attendee 4"]),
      // ...and so on
    };
  
    // Check if the event exists in the events object
    if (events.hasOwnProperty(eventTitle)) {
      // Add the new attendee to the event's attendees set
      events[eventTitle].add(attendeeName);
      console.log(`${attendeeName} has been added to ${eventTitle}.`);
    } else {
      console.log(`Event "${eventTitle}" does not exist.`);
    }
  }

  function convertEventsToJson(events) {
    const formattedEvents = events.map(event => {
      // Create a new object with the same properties as the original event
      const formattedEvent = {
        ...event,
        formattedDate: event.date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })
      };
      return formattedEvent;
    });
  
    // Convert the formatted events array to a JSON string
    const jsonString = JSON.stringify(formattedEvents);
    return jsonString;
  }

  const firstEvent = events[0];

const keys = Object.keys(firstEvent);
const values = Object.values(firstEvent);
const entries = Object.entries(firstEvent);

console.log("Properties of the first event:");
console.log(keys);

console.log("Values of the first event:");
console.log(values);

console.log("Properties and values of the first event:");
console.log(entries);
  
events.forEach(event => {
  console.log(`Title: ${event.title}`);
  console.log(`Date: ${event.date}`);
});
const indexToDelete = 1;
const numberOfElementsToDelete = 1;

events.splice(indexToDelete, numberOfElementsToDelete);

const eventWithMostAttendees = events.reduce((maxEvent, currentEvent) => {
  if (currentEvent.attendees > maxEvent.attendees) {
    return currentEvent;
  } else {
    return maxEvent;
  }
});

console.log("Event with the most attendees:");
console.log(eventWithMostAttendees);