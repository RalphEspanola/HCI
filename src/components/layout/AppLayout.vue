<script setup>
import HeaderView from '@/components/layout/HeaderView.vue'
import FooterView from '@/components/layout/FooterView.vue'
</script>

<template>
  <v-responsive>
    <v-app>
      <HeaderView />
      <v-main>
        <slot name="content" />
      </v-main>
      <FooterView />
    </v-app>
  </v-responsive>
</template>
