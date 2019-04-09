<template>
  <section class="container mx-auto flex justify-center mt-12">
    <typer />
  </section>
</template>

<script>
import typer from '@/components/HomeTyper'
export default {
  components: {
    typer
  }
}
</script>

<style>
html {
  background-color: #232d3d;
}

.vue-typer .custom.char {
  color: #f8fafc;
}
</style>
