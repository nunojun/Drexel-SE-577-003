<template>
  <div class="hello">
    <p>Note that this is from Home.vue</p>
    <h5>
      This application is built using the Vue framework with Quasar for UX
      Styling
    </h5>

    <h4>HAVE FUN!!</h4>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  margin: 48px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
