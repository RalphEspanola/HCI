<!-- PrivateFiles.vue -->
<script setup>
import { useMockData } from '@/composables/useMockData'

const { privateFiles: files, getFileIcon, getFileColor } = useMockData()
</script>

<template>
  <v-card class="mb-4">
    <v-card-title class="text-h6">
      <v-icon start>mdi-folder-lock</v-icon>
      Private Files
    </v-card-title>
    <v-card-text class="pa-0">
      <v-list class="file-list">
        <template v-for="(file, index) in files" :key="file.id">
          <v-list-item>
            <template v-slot:prepend>
              <v-avatar :color="getFileColor(file.type)" size="40">
                <v-icon :color="'white'">
                  {{ getFileIcon(file.type) }}
                </v-icon>
              </v-avatar>
            </template>
            <v-list-item-title class="text-subtitle-1 font-weight-medium">
              {{ file.name }}
            </v-list-item-title>
            <v-list-item-subtitle> {{ file.size }} • {{ file.date }} </v-list-item-subtitle>
            <template v-slot:append>
              <v-btn icon variant="text" color="green-darken-2" :title="'Download ' + file.name">
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </template>
          </v-list-item>
          <v-divider v-if="index < files.length - 1" class="my-2" />
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.file-list {
  max-height: 300px;
  overflow-y: auto;
}

/* Customize scrollbar */
.file-list::-webkit-scrollbar {
  width: 8px;
}

.file-list::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.file-list::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.file-list::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
