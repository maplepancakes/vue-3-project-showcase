<template>
  <div>
    <h1 class="text-3xl text-center font-bold text-gray-400 mt-20">Submit your Feedback!</h1>
    <div class="mt-5 flex justify-center w-full">
      <FeedbackForm>
        <template v-slot:buttonLabel>Submit Feedback</template>
      </FeedbackForm>
    </div>
  </div>
</template>

<script>
import FeedbackForm from "../components/FeedbackForm.vue";

export default 
{
  components: {FeedbackForm},
}
</script>

<style>

</style>