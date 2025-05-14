import { useEffect, useState } from "react";

const GuestList = () => {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);

  useEffect(() => {
  fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/guests")
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched data:", data);
      setGuests(data.data || []);
    })
    .catch((error) => console.error("Error fetching guests:", error));
}, []);


  const handleGuestClick = (guest) => {
    setSelectedGuest(guest);
  };

  return (
    <div>
      <h1>Guest List</h1>
      <ul>
  {guests.map((guest) => (
    <li key={guest.id} onClick={() => handleGuestClick(guest)}>
      {guest.name} - {guest.phone} 
    </li>
  ))}
</ul>


      {selectedGuest && (
        <div>
          <h2>Guest Details</h2>
          <p>Name: {selectedGuest.name}</p>
          <p>Age: {selectedGuest.age}</p>
          <p>Email: {selectedGuest.email}</p>
          <p>Bio: {selectedGuest.bio}</p>
        </div>
      )}
    </div>
  );
};

export default GuestList;