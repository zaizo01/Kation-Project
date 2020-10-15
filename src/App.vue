<template>
  <div class="p-10">
    <titleComponent />
    <tableComponent />
  </div>
</template>

<script>
  import './assets/tailwind.css'
  import titleComponent from './components/titleComponent'
  import tableComponent from './components/tableComponent'

  export default {
    name: 'app',
    components: {
      titleComponent,
      tableComponent
    }
  }
</script>

<style>

</style>