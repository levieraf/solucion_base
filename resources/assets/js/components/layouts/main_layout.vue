<style lang="sass">

</style>

<template>
  <lv_header></lv_header>
  <lv_sidebarmenu></lv_sidebarmenu>
  <lv_content></lv_content>
  <lv_footer></lv_footer>
</template>

<script>
  import lv_header from './header.vue';
  import lv_sidebarmenu from './sidebarmenu.vue';
  import lv_content from './content.vue';
  import lv_footer from './footer.vue';

  export default {
    data(){
      return {}
    },
    components: {
      lv_header,
      lv_sidebarmenu,
      lv_content,
      lv_footer
    },
    ready() {

    }
  };
</script>