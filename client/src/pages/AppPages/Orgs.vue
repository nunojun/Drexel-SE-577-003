<template>
  <div class="q-pa-md center">
    <q-banner class="bg-primary text-white center">
      <h6>GitHub Org Information</h6>
      <select v-model="orgName">
        <option disabled value="">Please select one</option>
        <option>Amazon</option>
        <option>Apple</option>
        <option>Comcast</option>
        <option>Facebook</option>
        <option>Google</option>
      </select>
    </q-banner>
    <div class="row">
      <q-table class="center"
        dense
        :rows="rows"
        :columns="columns"
        row-key="id"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'GitHubPage',
};
</script>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import axios from 'axios';

type rowType = {
  id: string;
  name: string;
  url: string;
  language: string;
  updated_at: string;
};

const columns = [
  { name: 'id', label: 'ID', align: 'left', field: 'id', sortable: true },
  { name: 'name', label: 'name', align: 'left', field: 'name', sortable: true },
  { name: 'url', label: 'URL', align: 'left', field: 'url', sortable: true },
  { name: 'language', label: 'Language', align: 'left', field: 'language' },
  { name: 'updated_at', label: 'Updated', align: 'left', field: 'updated_at' },
];
let rows = ref([] as rowType[]);
let orgName = ref('Undefined')

watch([orgName], () => {
  console.log('orgName changed: ', orgName);
  loadRepos()
});

const loadRepos = async () => {

  console.log('orgName: ', orgName.value)

  try {
    rows.value = []
    const res = await axios.get('http://localhost:5000/gh_org/' + orgName.value);
    const rList = res.data as rowType[];
    const resList = rList.map((row) => {
      const mappedRow: rowType = {
        id: row.id,
        name: row.name,
        url: row.url,
        language: row.language,
        updated_at: row.updated_at,
      };
      return mappedRow;
    });
    console.log('DEBUG', resList);
    rows.value = resList; 
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => loadRepos())
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
