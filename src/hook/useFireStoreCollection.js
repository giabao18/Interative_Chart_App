import { QuerySnapshot, doc, getDocs, onSnapshot } from "firebase/firestore";
import { cond } from "lodash";
import { useState, useEffect } from "react";
import { db, collection, where, query, orderBy } from "~/firebase/config";


const useFireStoreCollection = (collect) => {
    const [documents, setDocuments] = useState([])

    useEffect(() => {
        let collectionRef = query(collection(db, collect), orderBy("createdAt"))

        // add data to documents 
        const unSubscibed = onSnapshot(collectionRef, (querySnapshot) => {
            const list = []
            querySnapshot.forEach((doc) => (
                list.push({
                    ...doc.data(),
                    id: doc.id,
                })
            ))
            setDocuments(list)
        })

        return unSubscibed
    }, [collect])
    
    // return documents data which get from database
    return documents
}

export default useFireStoreCollection