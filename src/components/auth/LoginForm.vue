<!-- components/auth/LoginForm.vue -->
<script setup>
import { ref } from 'vue'

// Form data
const username = ref('')
const password = ref('')
const rememberUsername = ref(false)
const loading = ref(false)

// Form submission handler
const handleLogin = () => {
  loading.value = true

  // Simulate login request
  setTimeout(() => {
    console.log('Login attempt:', {
      username: username.value,
      password: password.value,
      rememberUsername: rememberUsername.value,
    })
    loading.value = false
    // In a real application, you would make an API call here
  }, 1000)
}
</script>

<template>
  <v-form @submit.prevent="handleLogin">
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="username"
          label="Username / email"
          variant="outlined"
          class="mb-n1"
          :rules="[(v) => !!v || 'Username is required']"
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          variant="outlined"
          type="password"
          class="mb-n1"
          :rules="[(v) => !!v || 'Password is required']"
        ></v-text-field>
        <v-checkbox
          v-model="rememberUsername"
          label="Remember username"
          class="mb-n1"
          density="compact"
        ></v-checkbox>
        <v-btn
          color="green-darken-2"
          block
          type="submit"
          class="mb-4"
          :loading="loading"
          to="/dashboard"
        >
          Log in
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <div class="mb-4">
          <p class="cursor-pointer text-start">Forgotten your username or password?</p>
        </div>
        <div class="text-start text-caption">Cookies must be enabled in your browser</div>
      </v-col>
    </v-row>
  </v-form>
</template>
