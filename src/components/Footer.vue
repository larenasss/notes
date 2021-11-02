<template>
  <footer class="footer">
    <div class="container">
      <ul class="navbar-list">
        <li class="navbar-list__item" v-for="link in links" :key="link.alias">
          <router-link class="navbar-list__link" :to="link.url">
            {{ link.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
  import { links } from "@/_config";

  export default {
    data() {
      return {
        links: links,
      }
    }
  }
</script>