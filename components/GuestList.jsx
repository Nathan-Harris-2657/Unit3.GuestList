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

  const handleBackClick = () => {
    setSelectedGuest(null);
  };

  return (
    <div>
      {!selectedGuest ? (
        <>
          <h1>Guest List</h1>
          <ul>
            {guests.map((guest) => (
              <li key={guest.id} onClick={() => handleGuestClick(guest)}>
                {guest.name} - {guest.email}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div>
          <h2>Guest Details</h2>
          <p><strong>Name:</strong> {selectedGuest.name}</p>
          <p><strong>Email:</strong> {selectedGuest.email}</p>
          <p><strong>Phone:</strong> {selectedGuest.phone}</p>
          <p><strong>Bio:</strong> {selectedGuest.bio}</p>
          <p><strong>Job:</strong> {selectedGuest.job}</p>
          <button onClick={handleBackClick}>Back</button>
        </div>
      )}
    </div>
  );
};

export default GuestList;