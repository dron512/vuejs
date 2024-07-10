<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-body-tertiary">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand" active-class="active" exact>Navbar</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/boardfindall" class="nav-link" active-class="active">freeboard</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/alcoholfindall" class="nav-link" active-class="active">alcohol</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link" active-class="active">about</RouterLink>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

// import {useRouter} from 'vue-router';

// const router = useRouter();
// const goPage = ()=>{
//   router.push("/");
// }
</script>

<style lang="scss" scoped></style>