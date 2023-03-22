import {
  collection,
  onSnapshot,
  setDoc,
  doc,
  getDoc,
  deleteDoc,
  updateDoc
} from 'firebase/firestore';
import { uid } from 'uid';
import { db } from '../config/firebase.config.js';

export async function createUserService( user ) {
  try {
    const uidRef = uid(32);
    await setDoc(doc(db, 'users', `${ uidRef }`), {
      uid: uidRef,
      name: user.name,
      lastname: user.lastname,
      email: user.email
    });

  } catch ( e ) {
    console.error('Error adding document: ', e);
  }
}

export async function deleteUserService( userId ) {
  await deleteDoc(doc(db, 'users', userId));
}

export async function getUsersService() {

}

export async function getUserByIdService( id ) {
  const docRef  = doc(db, 'users', id);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
}

export async function updateUserService( id, data ) {
  await updateDoc(doc(db, 'users', id), { ...data });
}