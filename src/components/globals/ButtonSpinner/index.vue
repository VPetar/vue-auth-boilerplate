<template>
  <button class="uk-button uk-button-secondary">
    <span v-if="loading" uk-spinner="ratio: 0.7"></span>
    <span v-else>
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class Home extends Vue {
  loading = false;

  startLoading() {
    this.loading = true;
  }
  stopLoading() {
    this.loading = false;
  }
}
</script>
