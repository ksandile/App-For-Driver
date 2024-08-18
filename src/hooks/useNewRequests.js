import { useEffect, useState } from 'react';
import { firestore } from '../firebaseConfig';

function useNewRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('requests')
      .where('driverId', '==', null)
      .where('status', '==', 'pending')
      .onSnapshot(snapshot => {
        const newRequests = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRequests(newRequests);
      });

    return () => unsubscribe();
  }, []);

  return requests;
}

export default useNewRequests;
