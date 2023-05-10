<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

@Component({})
export default class App extends Vue {
  public msg = this.$test();

}
</script>

<template>
  <main>
    {{ msg }}
  </main>
</template>
