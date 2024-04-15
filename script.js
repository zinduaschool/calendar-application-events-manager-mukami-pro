// Event data
let events = [];

// Display events happening in the next 7 days
function displayUpcomingEvents() {
  const today = new Date();
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

  const upcomingEvents = events.filter(event => event.date <= nextWeek);

  const eventsBody = document.getElementById('events-body');
  eventsBody.innerHTML = '';

  upcomingEvents.forEach(({title, date, location, attendees}) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${title}</td>
      <td>${date.toLocaleDateString('en-US')}</td>
      <td>${location}</td>
      <td>${[...attendees].join(', ')}</td>
    `;
    eventsBody.appendChild(row);
  });
}

// Function to add a new event
function addEvent(eventTitle, eventDate, eventLocation, eventAttendees) {
  const newEvent = {
    title: eventTitle,
    date: new Date(eventDate),
    location: eventLocation,
    attendees: new Set(eventAttendees.split(',').map(item => item.trim())),
  };

  events.push(newEvent);
  console.log(`Event "${eventTitle}" has been added.`);
  displayUpcomingEvents();
}

// Event listener for form submission
const addEventForm = document.getElementById('add-event-form');
addEventForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const eventTitle = document.getElementById('event-title').value;
  const eventDate = document.getElementById('event-date').value;
  const eventLocation = document.getElementById('event-location').value;
  const eventAttendees = document.getElementById('event-attendees').value;

  addEvent(eventTitle, eventDate, eventLocation, eventAttendees);
  addEventForm.reset();
});

// Initial display of events
displayUpcomingEvents();
