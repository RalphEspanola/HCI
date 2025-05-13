<template>
  <v-card class="mb-4">
    <v-card-title class="text-h6">
      <v-icon start>mdi-account-group</v-icon>
      Online Users
    </v-card-title>
    <v-card-subtitle class="text-caption"> 9 online users (last 5 minutes) </v-card-subtitle>
    <v-card-text class="pa-0">
      <v-list class="user-list">
        <template v-for="(user, index) in onlineUsers" :key="user.id">
          <v-list-item>
            <template v-slot:prepend>
              <v-avatar color="green-lighten-1" size="36">
                <v-icon color="white">mdi-account</v-icon>
              </v-avatar>
            </template>
            <v-list-item-title class="text-caption">
              {{ user.name }}
            </v-list-item-title>
            <template v-slot:append>
              <v-btn
                icon="mdi-message"
                variant="text"
                size="small"
                color="green-darken-2"
                :title="'Message ' + user.name"
              />
            </template>
          </v-list-item>
          <v-divider v-if="index < onlineUsers.length - 1" class="my-1" />
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
const onlineUsers = [
  {
    id: 1,
    name: 'RALPH BYRON ESPAÑOLA',
  },
  {
    id: 2,
    name: 'NICOLE BURDEOS',
  },
  {
    id: 3,
    name: 'JOHN DOE',
  },
  {
    id: 4,
    name: 'JANE SMITH',
  },
  {
    id: 5,
    name: 'ALEX JOHNSON',
  },
  {
    id: 6,
    name: 'MARIA GARCIA',
  },
  {
    id: 7,
    name: 'DAVID BROWN',
  },
  {
    id: 8,
    name: 'LISA WILSON',
  },
  {
    id: 9,
    name: 'MICHAEL TAYLOR',
  },
]
</script>

<style scoped>
.user-list {
  max-height: 200px;
  overflow-y: auto;
}

/* Customize scrollbar */
.user-list::-webkit-scrollbar {
  width: 8px;
}

.user-list::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.user-list::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.user-list::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
