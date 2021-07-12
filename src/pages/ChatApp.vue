<template>
    <div class="flex justify-center">
        <div class="mx-10 w-96">
            <h1 class="text-3xl text-center font-bold text-gray-400 mt-20">Chat App</h1>
            <div v-if="!isLoggedIn" class="text-center mt-20">Please log in to use the chat application.</div>
            <div v-else-if="isLoggedIn && !currentUserIDInstance" class="text-center mt-20">Loading chat application... Please <a href="." class="text-blue-400">refresh</a> the page if the application does not load.</div>
            <div v-if="currentUserIDInstance" ref="chatDisplay" class="mt-5 px-2 h-96 border overflow-y-scroll overflow-x-hidden break-words flex-col">
                <div v-for="message in messages" :key="message" :class="message.userID === currentUserIDInstance ? 'text-right ml-auto':''" class="p-2 my-2 border rounded text-sm max-w-max">
                    {{ message.message }}
                    <div class="text-xs text-gray-400">{{ message.timeStamp }}</div>
                </div>
            </div>
            <input v-if="currentUserIDInstance" ref="chatInput" @keydown.enter="writeDataToFirebase()" :class="defaultInputStyle()" class="mt-5 w-full" placeholder="Start Typing!"/>
        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted, onUpdated } from "vue";
import { useStore } from "vuex";
import firebase from "../firebase/firebase.js";
import defaultInputStyle from "../mixins/defaultInputStyle.js";
import FirebaseMethods from "../composition/FirebaseMethods.js";
import ScrollContainerToBottomUsingRef from "../composition/ScrollContainerToBottomUsingRef.js";

export default 
{
    mixins: [defaultInputStyle],
    /*
    props:
    {
        isLoggedIn:
        {
            type: Boolean,
        }
    },
    */
    setup()
    {
        const messages = ref({});
        const chatInput = ref("");
        const chatID = ref({});
        const chatDisplay = ref("");
        const currentUserIDInstance = ref("");
        const store = useStore();

        const isLoggedIn = computed(() =>
        {
            return store.state.isLoggedIn;
        })

        function writeDataToFirebase()
        {
            if (chatInput.value.value !== "")
            {
                // updates "chats" tree in firebase
                firebase.database().ref("chatApp/chats/" + chatID.value.toString().padStart(20, "0")).set(
                {
                    userID: currentUserIDInstance.value,
                    message: chatInput.value.value,
                    timeStamp: (new Date().getHours() + ":" + new Date().getMinutes()).padStart(5, "0"),
                });
        
                // updates "chatIDCounter" in firebase
                firebase.database().ref("chatApp/chatIDCounter").set(chatID.value + 1);
        
                chatInput.value.value = "";
            }
        }

        onMounted(async () =>
        {
            // retrieves stored chats from firebase
            FirebaseMethods.readDataFromFirebaseUsingRef("chatApp/chatIDCounter", chatID);
            FirebaseMethods.readDataFromFirebaseUsingRef("chatApp/chats/", messages);

            // gets currently logged in user id
            let getCurrentUserIDInstance = new Promise ((resolve) =>
            {
                setTimeout(() =>
                {
                    try
                    {
                        resolve(firebase.auth().currentUser.uid);
                    }
                    catch(error)
                    {
                        console.log(error);
                    }
                }, 3000);
            });

            currentUserIDInstance.value = await getCurrentUserIDInstance;
        });

        onUpdated(() =>
        {
            ScrollContainerToBottomUsingRef(chatDisplay);
        });

        return {
            messages,
            chatInput,
            chatID,
            chatDisplay,
            currentUserIDInstance,
            isLoggedIn,
            writeDataToFirebase,
        }
    },
}
</script>

<style>

</style>