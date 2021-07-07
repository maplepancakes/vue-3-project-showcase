<template>
    <div class="mx-10">
        <h1 class="text-3xl text-center font-bold text-gray-400 mt-20">Chat App</h1>
        <div ref="chatDisplay" class="mt-5 h-96 border overflow-y-scroll overflow-x-hidden break-words">
            <div v-for="message in messages" :key="message" class="p-2">{{ message.message }}</div>
        </div>
        <input ref="chatInput" @keydown.enter="writeDataToFirebase()" :class="defaultInputStyle()" class="mt-5 w-full" placeholder="Start Typing!"/>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import firebase from "../firebase/firebase.js";
import defaultInputStyle from "../mixins/defaultInputStyle.js";
import FirebaseMethods from "../composition/FirebaseMethods.js";

export default 
{
    mixins: [defaultInputStyle],
    props:
    {
        isLoggedIn:
        {
            type: Boolean,
        }
    },
    setup()
    {
        const messages = ref({});
        const chatInput = ref("");
        const chatID = ref({});
        const chatDisplay = ref("");

        function writeDataToFirebase()
        {
            try
            {
                // retrieves currently logged in userID
                let userID = firebase.auth().currentUser.uid;

                // updates "chats" tree in firebase
                firebase.database().ref("chats/" + chatID.value.toString().padStart(20, "0")).set(
                {
                    userID: userID,
                    message: chatInput.value.value,
                });
            
                // updates "chatIDCounter" in firebase
                firebase.database().ref("chatIDCounter/").set(chatID.value + 1);

                // scrolls to bottom of div everytime a new message is written to firebase
                setTimeout(() => 
                {
                    chatDisplay.value.scrollTop = chatDisplay.value.scrollHeight;
                }, 0);
            }
            catch (error)
            {
                alert("Logging in is required for usage of chat application.");

                console.log(error);
            }
            
            chatInput.value.value = "";
        }

        onMounted(() =>
        {
            FirebaseMethods.readDataFromFirebaseUsingRef("chatIDCounter", chatID);
            FirebaseMethods.readDataFromFirebaseUsingRef("chats", messages);
        });

        return {
            messages,
            chatInput,
            chatID,
            chatDisplay,
            writeDataToFirebase,
        }
    },
}
</script>

<style>

</style>