<!-- UpcomingEvents.vue -->
<script setup>
import { useMockData } from '@/composables/useMockData'

const { events, getEventIcon, getEventColor } = useMockData()
</script>

<template>
  <v-card class="mb-4">
    <v-card-title class="text-h6">
      <v-icon start>mdi-calendar-clock</v-icon>
      Upcoming Events
    </v-card-title>
    <v-card-text class="pa-0">
      <v-list class="event-list">
        <template v-for="(event, index) in events" :key="event.id">
          <v-list-item :title="event.title" :subtitle="`${event.date} • ${event.time}`">
            <template v-slot:prepend>
              <v-avatar :color="getEventColor(event.type)" size="40">
                <v-icon :color="'white'">
                  {{ getEventIcon(event.type) }}
                </v-icon>
              </v-avatar>
            </template>
          </v-list-item>
          <v-divider v-if="index < events.length - 1" class="my-2" />
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.event-list {
  max-height: 300px;
  overflow-y: auto;
}

/* Customize scrollbar */
.event-list::-webkit-scrollbar {
  width: 8px;
}

.event-list::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.event-list::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.event-list::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
