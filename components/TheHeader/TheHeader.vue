<template>
  <header class="main-header">
    <nav class="main-nav">
      <ul class="nav-links">
        <nuxt-link to="/blog" class="nav-link" tag="li"><a href="#">All Posts</a></nuxt-link>
        <nuxt-link to="/about" class="nav-link" tag="li"><a href="#">About</a></nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  .main-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #022d30;
    height: 4.5rem;
  }

  .main-nav {
    height: 100%;
  }
  .nav-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .nav-link {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    padding: 0.3rem;
  }
  .nav-link.nuxt-link-active {
    border-bottom: 3px solid #57dfdc;
  }
  .nav-link a {
    display: block;
    text-decoration: none;
    color: white;
  }
  .nav-link a:hover,
  .nav-link a:active,
  .nav-link.nuxt-link-active a {
    color: #06d4d1;  
  }
</style>