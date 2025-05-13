<!-- CourseCard.vue -->
<script setup>
defineProps({
  course: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <v-card class="h-100" :to="`/courses/${course.id}`">
    <v-img :src="course.image" height="140" cover class="bg-grey-lighten-2">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey-lighten-4"></v-progress-circular>
        </v-row>
      </template>
    </v-img>

    <v-card-title class="text-h6 pt-4">
      {{ course.name }}
    </v-card-title>

    <v-card-subtitle>
      <v-icon size="small" class="mr-1">mdi-account</v-icon>
      {{ course.instructor }}
    </v-card-subtitle>

    <v-card-text>
      <v-progress-linear :model-value="course.progress" color="green-darken-2" height="10" rounded>
        <template v-slot:default="{ value }">
          <strong>{{ Math.ceil(value) }}%</strong>
        </template>
      </v-progress-linear>

      <div class="d-flex justify-space-between mt-4">
        <div class="text-caption">
          <v-icon size="small" class="mr-1">mdi-calendar</v-icon>
          {{ course.startDate }}
        </div>
        <div class="text-caption">
          <v-icon size="small" class="mr-1">mdi-clock-outline</v-icon>
          {{ course.duration }}
        </div>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="green-darken-2" variant="text" :to="`/courses/${course.id}`">
        View Course
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
