import React, { useState, useEffect } from 'react';
import { firestore } from '../firebaseConfig'; // Import firestore
import { collection, query, where, onSnapshot } from 'firebase/firestore'; // Import necessary Firestore functions

function RequestsList() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const q = query(
      collection(firestore, 'requests'),
      where('driverId', '==', null),
      where('status', '==', 'pending')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newRequests = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRequests(newRequests);
    });

    return () => unsubscribe();
  }, []);

  const acceptRequest = (id) => {
    // Logic to accept the request
    // You may want to update the request's driverId and status in Firestore here
  };

  return (
    <div>
      <h1>Requests</h1>
      <ul>
        {requests.map(request => (
          <li key={request.id}>
            {request.details}
            <button onClick={() => acceptRequest(request.id)}>Accept</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RequestsList;
