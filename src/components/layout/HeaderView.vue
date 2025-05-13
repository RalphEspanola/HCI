<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import SideNavbar from './SideNavbar.vue'

// Props and data
const searchQuery = ref('')
const route = useRoute()
const showSideNavbar = ref(false)

// Optional: You can define emits if needed
// const emit = defineEmits(['search'])

// Methods
const handleSearch = () => {
  // Implement search functionality
  // emit('search', searchQuery.value)
}

const isActive = (path) => {
  return route.path === path
}

const toggleSideNavbar = () => {
  showSideNavbar.value = !showSideNavbar.value
}
</script>

<template>
  <v-app-bar app color="green-darken-2" dark elevation="1">
    <div class="d-flex align-center">
      <!-- Logo -->
      <v-avatar size="50" color="transparent" class="mr-2 ml-5">
        <v-img
          src="/public/images/MasaoLMSIcon.png"
          alt="Caraga State University Logo"
          contain
        ></v-img>
      </v-avatar>

      <!-- University Name - Hide on small screens -->
      <v-toolbar-title class="d-none d-md-flex font-weight-bold">
        Caraga State University
      </v-toolbar-title>

      <!-- Abbreviated Name - Show only on small screens -->
      <v-toolbar-title class="d-flex d-md-none font-weight-bold"> CSU </v-toolbar-title>
    </div>

    <v-spacer></v-spacer>

    <!-- Desktop Navigation -->
    <div class="d-none d-md-flex align-center">
      <!-- Search Bar -->
      <v-text-field
        v-model="searchQuery"
        prepend-inner-icon="mdi-magnify"
        label="Search..."
        variant="outlined"
        density="compact"
        hide-details
        class="mx-4"
        bg-color="green-lighten-2"
        width="200px"
        @keyup.enter="handleSearch"
      ></v-text-field>

      <!-- Navigation Items -->
      <v-btn
        to="/dashboard"
        variant="text"
        prepend-icon="mdi-home"
        class="ma-1"
        :color="isActive('/dashboard') ? 'white' : undefined"
        :class="{ 'font-weight-bold': isActive('/dashboard') }"
        >Home</v-btn
      >
      <v-btn
        to="/courses"
        variant="text"
        prepend-icon="mdi-school"
        class="ma-1"
        :color="isActive('/courses') ? 'white' : undefined"
        :class="{ 'font-weight-bold': isActive('/courses') }"
        >Courses</v-btn
      >
      <v-btn
        to="/calendar"
        variant="text"
        prepend-icon="mdi-calendar"
        class="ma-1"
        :color="isActive('/calendar') ? 'white' : undefined"
        :class="{ 'font-weight-bold': isActive('/calendar') }"
        >Calendar</v-btn
      >
      <v-btn
        to="/messages"
        variant="text"
        prepend-icon="mdi-email"
        class="ma-1"
        :color="isActive('/messages') ? 'white' : undefined"
        :class="{ 'font-weight-bold': isActive('/messages') }"
        >Messages</v-btn
      >

      <!-- Hamburger Menu -->
      <v-btn icon variant="text" class="ma-1" @click="toggleSideNavbar">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>

    <!-- Mobile Icons -->
    <div class="d-flex d-md-none">
      <v-btn icon variant="text">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon variant="text" @click="toggleSideNavbar">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>
  </v-app-bar>

  <!-- Mobile Navigation - only visible on small screens -->
  <v-sheet color="primary" class="d-md-none py-2 px-2" elevation="1">
    <div class="d-flex overflow-x-auto">
      <v-btn
        to="/"
        variant="text"
        prepend-icon="mdi-home"
        size="small"
        :color="isActive('/') ? 'white' : 'grey-lighten-1'"
        :class="{ 'font-weight-bold': isActive('/') }"
        class="mr-2"
        >Home</v-btn
      >
      <v-btn
        to="/courses"
        variant="text"
        prepend-icon="mdi-school"
        size="small"
        :color="isActive('/courses') ? 'white' : 'grey-lighten-1'"
        :class="{ 'font-weight-bold': isActive('/courses') }"
        class="mr-2"
        >Courses</v-btn
      >
      <v-btn
        to="/calendar"
        variant="text"
        prepend-icon="mdi-calendar"
        size="small"
        :color="isActive('/calendar') ? 'white' : 'grey-lighten-1'"
        :class="{ 'font-weight-bold': isActive('/calendar') }"
        class="mr-2"
        >Calendar</v-btn
      >
      <v-btn
        to="/messages"
        variant="text"
        prepend-icon="mdi-email"
        size="small"
        :color="isActive('/messages') ? 'white' : 'grey-lighten-1'"
        :class="{ 'font-weight-bold': isActive('/messages') }"
        >Messages</v-btn
      >
    </div>
  </v-sheet>

  <!-- Side Navigation -->
  <SideNavbar v-model="showSideNavbar" />
</template>

<style scoped>
.v-btn {
  transition: all 0.3s ease;
}

.v-btn:hover {
  transform: translateY(-1px);
}
</style>
