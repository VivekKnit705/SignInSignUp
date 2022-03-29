import { db } from "./firebase";

// adding datato collection
const CollectionName = "users"
export const AddDatatoFirebase = (data) => db.collection(CollectionName).add(data)


// getting data
export const GetFirebaseData = ({ setUploadedData }) => {
    const array = [];
    let item;
    db
        .collection(CollectionName)
        .get()
        .then((res_array) => {
            res_array.forEach((doc) => {
                item = doc.data();
                item.id = doc.id;
                array.push(item)
            })
            setUploadedData(array);
            // console.log("doc", item);
        }
        )


}



export const GetUpdatedSanpData = ({ functionRunOnUpdate }) => {
    db.collection(CollectionName).onSnapshot(() => functionRunOnUpdate)
}