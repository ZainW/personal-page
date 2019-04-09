<template>
  <div>
    <no-ssr>
      <vue-typer
        :text="typerText"
        :repeat="Infinity"
        :shuffle="false"
        initial-action="typing"
        :pre-type-delay="70"
        :type-delay="300"
        :pre-erase-delay="2000"
        :erase-delay="250"
        erase-style="select-all"
        :erase-on-complete="false"
        caret-animation="smooth"
        class="text-5xl font-mono "
      />
    </no-ssr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typerText: ['Programmer', 'Code Lover', 'Gamer', 'Audio Enthusiast', 'Article Writer?']
    }
  }
}
</script>

<style>

</style>
