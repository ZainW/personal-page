<template>
  <div>
    <section class="container mx-auto flex justify-center mt-12">
      <typer />
    </section>

    <AudioStuff />
  </div>
</template>

<script>
import typer from '@/components/HomeTyper'
import AudioStuff from '@/components/AudioStuff'
export default {
  components: {
    typer,
    AudioStuff
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
