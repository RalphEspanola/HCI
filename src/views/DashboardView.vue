<!-- Dashboard.vue (Main page) -->
<script setup>
import AppLayout from '@/components/layout/AppLayout.vue'
import CourseCard from '@/components/course/CourseCard.vue'
import UpcomingEvents from '@/components/dashboard/UpcomingEvents.vue'
import PrivateFiles from '@/components/dashboard/PrivateFiles.vue'
import OnlineUsers from '@/components/dashboard/OnlineUsers.vue'
import { useMockData } from '@/composables/useMockData'
import { Calendar as VCalendar } from 'v-calendar'
import 'v-calendar/style.css'

const { courses } = useMockData()
</script>

<template>
  <AppLayout>
    <template #content>
      <v-main>
        <v-container class="py-6">
          <v-row>
            <v-col cols="12" md="8">
              <h1 class="text-h4 font-weight-bold mb-6 mt-n15">My Courses</h1>
              <v-row>
                <v-col v-for="course in courses" :key="course.id" cols="12" md="6">
                  <CourseCard :course="course" />
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" md="4">
              <v-container class="pa-0" fluid>
                <div class="text-end mb-4">
                  <VCalendar transparent expanded />
                </div>
                <UpcomingEvents />
                <OnlineUsers />
                <PrivateFiles />
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </template>
  </AppLayout>
</template>

<style scoped>
/* Add any page-specific styles here */
</style>
