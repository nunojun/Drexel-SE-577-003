<template>
  <div class="q-pa-md center">
    <q-banner class="bg-primary text-white center">
      <h6>GitHub Repo Information</h6>
    </q-banner>
    <div class="row">
      <q-table class="center"
        :title="tableTitle"
        dense
        :rows="rows"
        :columns="columns"
        row-key="id"
      />
    </div>
    <div class="q-pa-sm q-gutter-sm center">
      <q-btn label="Change Github URL" @click="onTest()" color="secondary" />
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
import { storeToRefs } from 'pinia';
import { useIndexStore } from 'stores/index-store';
import axios from 'axios';

const store = useIndexStore()
const { index } = storeToRefs(store)

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
let tableTitle = ref('Undefined')
let ghUrl = '' 
let reqHeaders = {}

watch([index], () => {
  console.log('index changed, index: ', index);
});

const loadRepos = async () => {
  if (index.value === 0) {
    tableTitle.value = 'Public Access'
    ghUrl = 'https://api.github.com/users/nunojun/repos'
  } else {
    tableTitle.value = 'Secured Access (w/ OAuth)'
    ghUrl = 'https://api.github.com/user/repos'
    Object.assign(reqHeaders, {'authorization': 'Token ' + process.env.GITHUB_ACCESS_TOKEN})
  }
  console.log('index.value ', index.value, ', tableTitle ', tableTitle.value, ', ghUrl ', ghUrl)

  try {
    rows.value = []
    const res = await axios.get(ghUrl, { headers: reqHeaders });
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
const onTest = () => {
  store.getNextIndex()
  loadRepos()
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
