import { useEffect, useState } from 'react';
import { firestore } from '../firebaseConfig';

function useRequestStatus(requestId) {
  const [request, setRequest] = useState(null);

  useEffect(() => {
    const unsubscribe = firestore.collection('requests').doc(requestId)
      .onSnapshot(doc => {
        setRequest(doc.data());
      });

    return () => unsubscribe();
  }, [requestId]);

  return request;
}

export default useRequestStatus;
