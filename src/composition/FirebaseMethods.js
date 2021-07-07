/* eslint-disable no-unused-vars */
import firebase from "../firebase/firebase.js";

const FirebaseMethods = (function()
{
    const readDataFromFirebaseUsingRef = async function(path, refVariable)
    {
        // entire block until refVariable.value = data used to retrieve data upon page load
        const database = firebase.database();
        const collection = database.ref(path); 
        const fetchData = await collection.once("value");
        const data = fetchData.val();

        refVariable.value = data;

        // updates page with new data if there are any changes to the database
        collection.on("value", (snapshot) =>
        {
            refVariable.value = snapshot.val();
        });
    }

    return {
        readDataFromFirebaseUsingRef,
    }
})();

export default FirebaseMethods;