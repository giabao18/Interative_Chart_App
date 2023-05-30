import { setDoc, getDatabase, db, collection, addDoc, FieldValue, serverTimestamp, doc } from './config'

export const addDocument = (collections, data) => {

    addDoc(collection(db, collections), {
        ...data,
        createdAt: serverTimestamp()
    })
}