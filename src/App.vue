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

<style lang="scss">
  $thead-bg-color-1: #273f70;
  $thead-bg-color-2: #273f70;

  @import '../node_modules/vue-good-table/src/styles/style.scss';
</style>>