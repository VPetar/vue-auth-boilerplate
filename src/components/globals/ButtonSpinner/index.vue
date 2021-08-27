<template>
  <button class="uk-button uk-button-secondary">
    <span v-if="loading" uk-spinner="ratio: 0.7"></span>
    <span v-else>
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    startLoading() {
      this.loading = true;
    },
    stopLoading() {
      this.loading = false;
    }
  }
};
</script>
