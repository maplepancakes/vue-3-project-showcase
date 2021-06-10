<template>
  <div class="w-full flex mt-10">
    <div class="m-auto border p-10">
      <h1 class="text-3xl text-center font-bold text-gray-400">List App</h1>
      <ul class="mt-5">
        <li v-for=" list in listing" :key="list" class="flex justify-between">
          {{ list }}
          <button @click="removeFromListing(list)">X</button>
        </li>
      </ul>
      <input class="border mt-5" v-model.lazy="input" placeholder=" Input anything!">
      <button class="border ml-2 pl-1 pr-1" @click="addInputToListing">Add Data</button>
      <br/>
      <br/>
      <label class="font-bold">Length of list: {{ listLength }} </label>
    </div>
  </div>
</template>

<script>
export default 
{
    data()
    {
        return {
        listing: ["Chocolate Cake", "Ramen", "Fried Rice", "Roasted Pork", "Chili"],
        input: "",
        alertMessageBlank: "Input cannot be blank!",
        alertMessageExistingInput: "Input already in existing list!",
        }
    },
    methods:
    {
        addInputToListing()
        {
        if (this.input === "")
        {
            alert(this.alertMessageBlank);

            return;
        }

        for (let i = 0; i < this.listing.length; i++)
        {
            if (this.input === this.listing[i])
            {
            alert(this.alertMessageExistingInput);

            return;
            }
        }

        this.listing.push(this.input);

        this.input = "";
        },
        removeFromListing(listToRemove)
        {
        this.listing = this.listing.filter(list => {return list !== listToRemove});
        },
    },
    computed:
    {
        listLength()
        {
        return this.listing.length;
        },
    },
}
</script>