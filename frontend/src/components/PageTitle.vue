<template>
  <div class="mt-5 mb-4">
    <h3>{{ pageTitle }}</h3>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: ["pageTitle"],
  setup() {
    return {};
  },
};
</script>

<style></style>
