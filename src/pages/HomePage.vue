<template>
<div class="flex mt-10">
  <div class="pr-10 pl-10 max-w-lg border-r">
    <h1 class="text-2xl font-extralight text-gray-400 text-justify" v-html="homePageDescription"></h1>
  </div>
  <div class="pr-10 pl-12 max-w-lg">
      <h1 class="text-2xl font-extralight text-gray-400 text-justify border p-2">
        Things Learnt So Far
      </h1>
      <ul class="mt-2">
        <li v-for="things in thingsLearntSoFar" :key="things">- {{ things }}</li>
      </ul>
      <h1 class="mt-2 text-2xl font-extralight text-gray-400 text-justify border p-2">
        Libraries Used For This Project
      </h1>
      <ul class="mt-2">
        <li v-for="libraries in librariesUsedForThisProject" :key="libraries">- {{ libraries }}</li>
      </ul>
  </div>
</div>
</template>

<script>
export default  
{
  data()
  {
    return {
      homePageDescription: "Welcome! This site is dedicated to showcasing my personal projects developed "
        + "using Vue 3 as a part of learning the fundamentals of the framework. "
        + "<br/><br/>"
        + "Each project is carried out with the aim of learning something new within "
        + "the framework (details on what is learnt for each project can be found in "
        + "the <span class=" + "text-red-500" + ">README</span> file, or if you are lazy, "
        + "to the right of this page). "
        + "<br/><br/>"
        + "As time goes on, the navigation bar will be filled up with more projects. For "
        + "now, feel free to view the completed projects by clicking on the applications "
        + "listed in the navigation bar! ",
      thingsLearntSoFar: 
      [
        "Text Interpolation", 
        "Directives", 
        "Methods", 
        "Computed Properties", 
        "Components", 
        "Routing",
        "Mixins",
        "Virtual DOM",
        "Lifecycle Hooks",
        "Leave & Enter Transitions",
        "$emit",
        "props",
        "$refs",
        "Teleport",
        "Composition API"
      ],
      librariesUsedForThisProject:
      [
        "Vue 3",
        "Vue Router",
        "Tailwind",
        "Marked",
        "Firebase",
      ],
    }
  }
}
</script>