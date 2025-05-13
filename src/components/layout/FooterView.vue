<!-- DashboardFooter.vue -->
<script setup>
// No reactive data needed for the footer, but we can add later if required
</script>

<template>
  <v-footer app class="bg-white border-t pa-0">
    <v-container>
      <v-row class="justify-space-between align-center">
        <v-col cols="12" md="6" class="text-caption text-muted">
          © {{ new Date().getFullYear() }} Caraga State University. All rights reserved.
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-end gap-4">
          <a href="#" class="text-caption text-muted text-decoration-none">Privacy Policy</a>
          <a href="#" class="text-caption text-muted text-decoration-none">Support</a>
          <a href="#" class="text-caption text-muted text-decoration-none">Contact</a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
.text-muted {
  color: #6b7280;
}

.gap-4 {
  gap: 16px;
}

.border-t {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
