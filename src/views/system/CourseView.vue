<script setup>
import { ref, computed } from 'vue'
import AppLayout from '@/components/layout/AppLayout.vue'
import { useMockData } from '@/composables/useMockData'

const { courses: mockCourses } = useMockData()
const searchQuery = ref('')
const activeTab = ref('all')
const sortByNewest = ref(true)

// Filter courses based on active tab
const filteredCourses = computed(() => {
  let filtered = [...mockCourses]

  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(
      (course) =>
        course.name.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query),
    )
  }

  // Apply tab filter
  switch (activeTab.value) {
    case 'inProgress':
      filtered = filtered.filter((course) => course.progress > 0 && course.progress < 100)
      break
    case 'completed':
      filtered = filtered.filter((course) => course.progress === 100)
      break
    case 'archived':
      filtered = filtered.filter((course) => course.isArchived)
      break
  }

  // Apply sorting
  if (sortByNewest.value) {
    filtered.sort((a, b) => {
      const dateA = new Date(a.lastUpdated)
      const dateB = new Date(b.lastUpdated)
      return dateB - dateA
    })
  }

  return filtered
})
</script>
<template>
  <AppLayout>
    <template #content>
      <v-main>
        <v-container>
          <!-- Header Section -->
          <div class="d-flex justify-space-between align-center mb-6 mt-n10">
            <h1 class="text-h4 font-weight-bold">My Courses</h1>
            <div class="d-flex align-center">
              <v-text-field
                v-model="searchQuery"
                prepend-inner-icon="mdi-magnify"
                label="Search courses..."
                variant="outlined"
                density="compact"
                hide-details
                class="mx-4"
                style="width: 300px"
              ></v-text-field>
              <v-btn variant="outlined" color="green-lighten-1" class="text-none">
                <v-icon>mdi-filter-variant</v-icon>
              </v-btn>
            </div>
          </div>

          <v-row>
            <!-- Filter Tabs -->
            <v-col cols="12" md="5">
              <v-card class="mb-6">
                <div class="d-flex align-center px-4">
                  <v-tabs v-model="activeTab" color="primary" align-tabs="start">
                    <v-tab value="all" class="text-caption">All Courses</v-tab>
                    <v-tab value="inProgress" class="text-caption">In Progress</v-tab>
                    <v-tab value="completed" class="text-caption">Completed</v-tab>
                    <v-tab value="archived" class="text-caption">Archived</v-tab>
                  </v-tabs>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="7">
              <div class="d-flex justify-end">
                <v-btn
                  variant="text"
                  prepend-icon="mdi-sort"
                  class="text-none"
                  :class="{ 'text-primary': sortByNewest }"
                  @click="sortByNewest = !sortByNewest"
                >
                  Newest First
                </v-btn>
              </div>
            </v-col>
          </v-row>

          <!-- Course List -->
          <v-row>
            <v-col v-for="course in filteredCourses" :key="course.id" cols="12" md="4">
              <v-card class="mb-4">
                <v-img :src="course.image" height="140" cover class="bg-grey-lighten-2">
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular
                        indeterminate
                        color="grey-lighten-4"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <v-card-text>
                  <div class="d-flex justify-space-between align-start">
                    <div>
                      <h2 class="text-h6 font-weight-bold mb-1">{{ course.name }}</h2>
                      <div class="text-subtitle-2 text-medium-emphasis mb-2">
                        {{ course.instructor }}
                      </div>
                      <div class="d-flex align-center">
                        <span class="text-caption text-medium-emphasis mr-2">Progress</span>
                        <v-progress-linear
                          :model-value="course.progress"
                          color="green-lighten-1"
                          height="8"
                          rounded
                          class="mr-2"
                          style="width: 100px"
                        ></v-progress-linear>
                        <span class="text-caption font-weight-medium">{{ course.progress }}%</span>
                      </div>
                    </div>
                  </div>
                </v-card-text>
                <div class="text-caption text-medium-emphasis bg-grey-lighten-2 py-2 pl-3">
                  <v-icon>mdi-clock</v-icon> Updated {{ course.lastUpdated }}
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </template>
  </AppLayout>
</template>

<style scoped>
.v-card {
  transition: transform 0.2s ease;
}

.v-card:hover {
  transform: translateY(-2px);
}
</style>
