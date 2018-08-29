<template>
  <div>
    <nav class="uk-navbar uk-navbar-container uk-margin">
      <div class="uk-navbar-left">
        <a class="uk-navbar-toggle" href="#" uk-toggle="target: #offcanvas-nav">
          <span uk-navbar-toggle-icon></span>
          <span class="uk-margin-small-left">Menu</span>
        </a>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
