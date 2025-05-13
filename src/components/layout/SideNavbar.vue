<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Define props for the drawer state
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

// Define emits for updating the drawer state
const emit = defineEmits(['update:modelValue'])

// Computed property for the drawer state
const drawer = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

const user = {
  name: 'Ralph Byron C. Española',
  email: 'ralphbyron.espanaola@gmail.com',
  avatar: 'RE',
  role: 'Student',
}

const menuItems = [
  { title: 'Profile', icon: 'mdi-account', route: '/profile' },
  { title: 'Settings', icon: 'mdi-cog', route: '/settings' },
  { title: 'Help & Support', icon: 'mdi-help-circle', route: '/help' },
  { title: 'Sign Out', icon: 'mdi-logout', route: '/' },
]

function handleMenuClick(route) {
  if (route === '/logout') {
    // Handle logout logic here
    console.log('Logging out...')
  } else {
    router.push(route)
  }
  drawer.value = false
}
</script>

<template>
  <v-navigation-drawer v-model="drawer" location="right" temporary width="300">
    <!-- User Profile Section -->
    <div class="pa-4">
      <div class="d-flex align-center mb-4">
        <v-avatar color="primary" size="64" class="mr-3">
          <span class="text-h5 text-white">{{ user.avatar }}</span>
        </v-avatar>
        <div>
          <div class="text-h6 font-weight-bold">{{ user.name }}</div>
          <div class="text-caption text-medium-emphasis">{{ user.email }}</div>
          <div class="text-caption text-medium-emphasis">{{ user.role }}</div>
        </div>
      </div>
    </div>

    <v-divider></v-divider>

    <!-- Menu Items -->
    <v-list>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        :value="item.title"
        @click="handleMenuClick(item.route)"
        :class="{ 'text-error': item.title === 'Sign Out' }"
      >
        <template v-slot:prepend>
          <v-icon :color="item.title === 'Sign Out' ? 'error' : undefined">
            {{ item.icon }}
          </v-icon>
        </template>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.v-list-item {
  cursor: pointer;
  transition: all 0.2s ease;
}

.v-list-item:hover {
  background-color: rgb(var(--v-theme-primary-lighten-4));
}
</style>
