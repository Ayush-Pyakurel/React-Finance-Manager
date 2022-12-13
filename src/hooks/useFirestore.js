//react hooks imports
import { useReducer, useEffect, useState } from 'react';

//firebase import
import { projectFireStore } from '../Firebase/config';

let initialState = {
  error: null,
  isLoading: false,
  success: null,
  document: null,
};

const fireStoreReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(fireStoreReducer, initialState);
  const [isCancelled, setCancelled] = useState(false);

  const ref = projectFireStore.collection(collection);

  const addDocument = (docs) => {};

  const deleteDocument = (id) => {};

  useEffect(() => {
    return () => setCancelled(() => true);
  }, []);

  return { collection, addDocument, deleteDocument, response };
};
