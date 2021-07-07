/* eslint-disable no-unused-vars */
import firebase from "../firebase/firebase.js";

const FirebaseMethods = (function()
{
    const readDataFromFirebase = async function(path, variable)
    {
        // entire block until messages.value = data used to retrieve data upon page load
        const database = firebase.database();
        const collection = database.ref(path); 
        const fetchData = await collection.once("value");
        const data = fetchData.val();

        variable.value = data;

        // updates page with new data if there are any changes to the database
        collection.on("value", (snapshot) =>
        {
            variable.value = snapshot.val();
        });

        console.log(variable);
    }

    return {
        readDataFromFirebase,
    }
})();

export default FirebaseMethods;