<template>
  <header class="navbar">
    <div class="container">
        <div class="navbar__content">
          <router-link class="navbar__logo" to="/">{{ title }}</router-link>
          <ul class="navbar-list">
            <li class="navbar-list__item" v-for="link in links" :key="link.alias">
              <router-link class="navbar-list__link" :to="link.url">{{
                link.title
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
  </header>
</template>

<script>
  import { app, links } from "@/_config";

  export default {
    data() {
      return {
        title: app.title,
        links: links,
      }
    }
  }
</script>