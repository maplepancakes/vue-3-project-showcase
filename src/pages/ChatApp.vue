<template>
    <div>
        <h1 class="text-3xl text-center font-bold text-gray-400 mt-20">Chat App</h1>
        <div class="mx-10 mt-5 h-96 border">
            <div v-for="message in messages" :key="message" class="p-2">{{ message.message }}</div>
        </div>
        <input ref="chatInput" @keydown.enter="writeDataToFirebase()" :class="defaultInputStyle()" class="mx-10 mt-5"/>
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
    setup()
    {
        const messages = ref({});
        const chatInput = ref("");
        const chatID = ref({});

        function writeDataToFirebase()
        {
            firebase.database().ref("chats/" + "M" + chatID.value).set(
                {
                    message: chatInput.value,
                });
            
            firebase.database().ref("chatIDCounter/").set(chatID.value + 1);
            
            chatInput.value = "";
        }

        onMounted(() =>
        {
            FirebaseMethods.readDataFromFirebase("chatIDCounter", chatID);
            FirebaseMethods.readDataFromFirebase("chats", messages);
        });

        return {
            messages,
            chatInput,
            chatID,
            writeDataToFirebase,
        }
    },
}
</script>

<style>

</style>