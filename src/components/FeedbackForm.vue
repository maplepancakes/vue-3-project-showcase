<template>
    <form @submit.prevent="onSubmit">
        <label>Name</label>
        <br/>
        <input ref="name" type="text" :class="defaultInputStyle()" class="mb-2" placeholder="Jake T.D." required/>
        <br/>
        <label>Email</label>
        <br/>
        <input ref="email" type="email" :class="defaultInputStyle()" class="mb-2" placeholder="rainicorn@advmail.com" required/>
        <br/>
        <label>Feedback</label>
        <br/>
        <textarea ref="feedback" :class="defaultInputStyle()" class="mb-2 h-48 w-96 resize-none" placeholder="needs more dogs" maxlength="200" required></textarea>
        <br/>
        <button type="submit" @click="submitFormToFirebase()" :class="defaultButtonHoverStyle()" class="border p-2">
            <slot name="buttonLabel"></slot>
        </button>
    </form>
</template>

<script>
import { ref, onMounted } from "vue";

import firebase from "../firebase/firebase.js";
import FirebaseMethods from "../composition/FirebaseMethods.js";
import defaultButtonHoverStyle from "../mixins/defaultButtonHoverStyle.js";
import defaultInputStyle from "../mixins/defaultInputStyle.js";

export default 
{
    mixins: 
    [
        defaultButtonHoverStyle,
        defaultInputStyle,
    ],
    setup()
    {
        const name = ref("");
        const email = ref("");
        const feedback = ref("");
        const feedbackCounter = ref({});

        function submitFormToFirebase()
        {
            if (name.value.value === "" || email.value.value === "" || feedback.value.value === "")
            {
                return;
            }

            try
            {
                // updates "feedback" tree in firebase
                firebase.database().ref("feedback/feedback/" + feedbackCounter.value.toString().padStart(20, "0")).set(
                {
                    name: name.value.value,
                    email: email.value.value,
                    feedback: feedback.value.value,
                });
        
                // updates "feedbackCounter" in firebase
                firebase.database().ref("feedback/feedbackCounter/").set(feedbackCounter.value + 1);

                alert("Your feedback has been received!");

                window.location.reload();
            }
            catch(error)
            {
                alert("Feedback submission failed :(");

                console.log(error);
            }
        }

        onMounted(() =>
        {
            FirebaseMethods.readDataFromFirebaseUsingRef("feedback/feedbackCounter/", feedbackCounter);
        })

        return {
            name,
            email,
            feedback,
            submitFormToFirebase,
        }
    }
}
</script>

<style>

</style>