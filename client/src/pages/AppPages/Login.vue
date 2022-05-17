<template>
  <div class="q-pa-md row items-start">
    <q-card flat class="my-card bg-primary text-white">
      <q-card-section>
        <div class="text-h6">Login</div>
        {{ message }}
      </q-card-section>
    </q-card>
    <q-card flat class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">Has</div>
        {{ message }}
      </q-card-section>
    </q-card>
    <q-card flat class="my-card bg-accent text-white">
      <q-card-section>
        <div class="text-h6">Not</div>
        {{ message }}
      </q-card-section>
    </q-card>
    <q-card flat class="my-card bg-info text-white">
      <q-card-section>
        <div class="text-h6">Been Implemented</div>
        {{ message }}
      </q-card-section>
    </q-card>
    <q-card flat class="my-card bg-warning text-white">
      <q-card-section>
        <div class="text-h6">Yet!</div>
        {{ message }}
      </q-card-section>
    </q-card>
  </div>
  <!-- About, Background, Course, Publications, Photo-->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutPageComponent',
  setup() {
    return {
      message:
        'Be patient!',
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

