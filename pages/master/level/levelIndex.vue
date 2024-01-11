<template>
  <KtvCard>
    <KtvTable />
  </KtvCard>
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
