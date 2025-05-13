<script setup>
import { ref, computed, onMounted } from 'vue'
import AppLayout from '@/components/layout/AppLayout.vue'
import { useMockData } from '@/composables/useMockData'
import UpcomingEvents from '@/components/dashboard/UpcomingEvents.vue'

const { events: mockEvents } = useMockData()
const calendar = ref(null)
const today = ref(new Date())
const displayDate = ref(new Date())

// Format events for calendar
const events = computed(() => {
  return mockEvents.map((event) => {
    const eventDate = new Date(event.date)
    return {
      name: event.title,
      start: eventDate,
      end: eventDate,
      color: event.type === 'exam' ? 'red-lighten-1' : 'green-lighten-1',
      timed: false,
    }
  })
})

function updateDisplayDate() {
  if (calendar.value) {
    displayDate.value = new Date(calendar.value.value)
  }
}

function onFocusedChange(data) {
  if (data) {
    displayDate.value = new Date(data)
  }
}

onMounted(() => {
  setTimeout(() => {
    if (calendar.value) {
      updateDisplayDate()
    }
  }, 100)
})
</script>

<template>
  <AppLayout>
    <template #content>
      <v-main>
        <v-container fluid>
          <div class="d-flex justify-space-between align-center mb-6">
            <h1 class="text-h4 font-weight-bold">Calendar</h1>
          </div>

          <v-row>
            <!-- Calendar Section -->
            <v-col cols="12" md="8">
              <v-card class="calendar-card">
                <v-card-text class="calendar-container">
                  <v-calendar
                    ref="calendar"
                    v-model="today"
                    :events="events"
                    :show-month-on-first="false"
                    color="green-lighten-1"
                    type="month"
                    event-color="color"
                    @change="onFocusedChange"
                    :show-week="false"
                    :weekday-format="
                      (date) => date.toLocaleDateString('en-US', { weekday: 'short' })
                    "
                    :day-format="(date) => date.getDate()"
                    class="calendar"
                  >
                    <template #event="{ event }">
                      <v-tooltip :text="event.name" location="top" :open-delay="200">
                        <template v-slot:activator="{ props }">
                          <div class="event-content" :class="event.color" v-bind="props">
                            <span class="event-text">{{ event.name }}</span>
                          </div>
                        </template>
                      </v-tooltip>
                    </template>
                  </v-calendar>
                </v-card-text>
              </v-card>
            </v-col>

            <!-- Upcoming Events Section -->
            <v-col cols="12" md="4">
              <UpcomingEvents />
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </template>
  </AppLayout>
</template>

<style scoped>
.calendar-card {
  height: calc(100vh - 150px);
  min-height: 700px;
  overflow: hidden;
}

.calendar-container {
  height: 100%;
  padding: 0;
  overflow-y: auto;
}

.calendar {
  height: 100%;
  min-height: 650px;
}

/* Custom scrollbar for the calendar container */
.calendar-container::-webkit-scrollbar {
  width: 8px;
}

.calendar-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.calendar-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.calendar-container::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Custom styles for event colors */
.red-lighten-1 {
  background-color: rgb(239, 154, 154) !important;
  color: white !important;
}

.green-lighten-1 {
  background-color: rgb(129, 199, 132) !important;
  color: white !important;
}

/* Calendar specific styles */
:deep(.v-calendar-weekly__head) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

:deep(.v-calendar-weekly__day) {
  min-height: 50px;
}

:deep(.v-calendar-weekly__day-label) {
  font-size: 0.875rem;
  font-weight: 500;
}

/* Event styles */
.event-content {
  width: 100%;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.75rem;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 1px 0;
}

.event-text {
  display: block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.event-content:hover {
  transform: scale(1.02);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

:deep(.v-calendar-event) {
  margin: 1px 0;
  padding: 0;
  border-radius: 4px;
  overflow: hidden;
}

:deep(.v-calendar-event__content) {
  padding: 0;
  margin: 0;
}
</style>
