<template>
  <div class="q-pa-md">
    <q-table
      title=""
      :rows="rows"
      :columns="columns"
      row-key="name"
      :pagination="{
        rowsPerPage: 0,
      }"
    >
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="name" :props="props">
          {{ props.row.name }}
        </q-td>
        <q-td key="slug" :props="props">
          {{ props.row.slug }}
        </q-td>
        <q-td key="actions" :props="props">
          <q-btn color="warning" icon="edit" outline />
          <q-btn color="red" icon="delete" outline  class="q-ml-sm" />
        </q-td>
      </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script setup>
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Course Category',
    align: 'left',
    field: 'name',
  },
  { name: 'slug', label: 'Course Slug', align: 'center', field: 'slug' },
  {
    name: 'actions',
    required: true,
    label: 'Actions',
    align: 'right',
    field: 'actions',
  },
]

const rows = [
  {
    name: 'Koltitrace MIS',
    slug: 'mis',
  },
  {
    name: 'KoltiTrade',
    slug: 'koltitrade',
  },
  {
    name: 'KoltiSkills',
    slug: 'koltiskills',
  },
  {
    name: 'Koltitrace Farm Cloud',
    slug: 'koltitrace_farmcloud',
  },
  {
    name: 'Koltitrace Farm Retail',
    slug: 'koltitrace_farmretail',
  },
]
</script>
