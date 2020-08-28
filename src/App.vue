<template>
  <div id="app uk-offcanvas-content">
    <div id="offcanvas-nav" ref="offcanvasMenu" uk-offcanvas="overlay: true">
      <div class="uk-offcanvas-bar">
        <h1>{{ $store.getters.appName }}</h1>
        <ul class="uk-nav uk-nav-default">
          <li class="uk-active"><a href="#">Active</a></li>
          <li class="uk-parent">
            <a href="#">Parent</a>
            <ul class="uk-nav-sub">
              <li><a href="#">Sub item</a></li>
              <li><a href="#">Sub item</a></li>
            </ul>
          </li>
          <li class="uk-nav-header">Header</li>
          <li>
            <a href="#"
              ><span class="uk-margin-small-right" uk-icon="icon: table"></span>
              Item</a
            >
          </li>
          <li>
            <a href="#"
              ><span
                class="uk-margin-small-right"
                uk-icon="icon: thumbnails"
              ></span>
              Item</a
            >
          </li>
          <li class="uk-nav-divider"></li>
          <li>
            <a @click="logout()"
              ><span
                class="uk-margin-small-right"
                uk-icon="icon: sign-out"
              ></span>
              Logout</a
            >
          </li>
        </ul>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { AUTH_LOGOUT } from "@/store/actions/auth";
export default {
  methods: {
    logout() {
      window.UIkit.offcanvas(this.$refs.offcanvasMenu).hide();
      this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push("/login"));
    }
  }
};
</script>
