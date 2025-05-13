<script setup>
import { ref, computed } from 'vue'
import AppLayout from '@/components/layout/AppLayout.vue'
import { conversations } from '@/composables/useMockData'
const searchQuery = ref('')
const activeFilter = ref('all')
const selectedConversation = ref(null)

const filteredConversations = computed(() => {
  let filtered = conversations

  if (activeFilter.value === 'unread') {
    filtered = filtered.filter((conv) => conv.unread > 0)
  } else if (activeFilter.value === 'important') {
    filtered = filtered.filter((conv) => conv.type === 'group')
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(
      (conv) =>
        conv.name.toLowerCase().includes(query) || conv.lastMessage.toLowerCase().includes(query),
    )
  }

  return filtered
})

function selectConversation(conversation) {
  selectedConversation.value = conversation
}
</script>

<template>
  <AppLayout>
    <template #content>
      <v-main>
        <v-container fluid class="fill-height pa-0 mt-n12">
          <v-row class="fill-height">
            <!-- Sidebar -->
            <v-col cols="12" md="4" lg="3" class="border-right">
              <div class="d-flex flex-column fill-height">
                <!-- Header -->
                <div class="pa-4">
                  <div class="d-flex justify-space-between align-center mb-4">
                    <h1 class="text-h5 font-weight-bold">Messages</h1>
                    <v-btn icon>
                      <v-icon>mdi-cog</v-icon>
                    </v-btn>
                  </div>
                  <v-btn color="green-lighten-1" block prepend-icon="mdi-plus" class="mb-4">
                    New message
                  </v-btn>
                  <v-text-field
                    v-model="searchQuery"
                    prepend-inner-icon="mdi-magnify"
                    placeholder="Search messages..."
                    variant="outlined"
                    density="compact"
                    hide-details
                    class="mb-4"
                  />
                  <v-btn-group class="w-100">
                    <v-btn
                      :color="activeFilter === 'all' ? 'primary' : undefined"
                      variant="text"
                      @click="activeFilter = 'all'"
                    >
                      All
                    </v-btn>
                    <v-btn
                      :color="activeFilter === 'unread' ? 'primary' : undefined"
                      variant="text"
                      @click="activeFilter = 'unread'"
                    >
                      Unread
                    </v-btn>
                    <v-btn
                      :color="activeFilter === 'important' ? 'primary' : undefined"
                      variant="text"
                      @click="activeFilter = 'important'"
                    >
                      Important
                    </v-btn>
                  </v-btn-group>
                </div>

                <!-- Conversations List -->
                <v-list class="flex-grow-1 overflow-y-auto">
                  <v-list-item
                    v-for="conversation in filteredConversations"
                    :key="conversation.id"
                    :active="selectedConversation?.id === conversation.id"
                    @click="selectConversation(conversation)"
                    class="mb-2"
                  >
                    <template v-slot:prepend>
                      <v-avatar
                        :color="conversation.type === 'group' ? 'primary' : 'secondary'"
                        size="40"
                      >
                        <span class="text-white">{{ conversation.avatar }}</span>
                      </v-avatar>
                    </template>

                    <v-list-item-title class="font-weight-medium">
                      {{ conversation.name }}
                      <v-chip v-if="conversation.unread" color="primary" size="small" class="ml-2">
                        {{ conversation.unread }}
                      </v-chip>
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-truncate">
                      {{ conversation.lastMessage }}
                    </v-list-item-subtitle>

                    <template v-slot:append>
                      <div class="text-caption text-medium-emphasis">
                        {{ conversation.time }}
                      </div>
                    </template>
                  </v-list-item>
                </v-list>
              </div>
            </v-col>

            <!-- Main Content -->
            <v-col cols="12" md="8" lg="9" class="fill-height mt-10">
              <div v-if="selectedConversation" class="d-flex flex-column fill-height mt-">
                <!-- Conversation Header -->
                <div class="pa-4 border-bottom">
                  <div class="d-flex align-center">
                    <v-avatar
                      :color="selectedConversation.type === 'group' ? 'primary' : 'secondary'"
                      size="40"
                      class="mr-3"
                    >
                      <span class="text-white">{{ selectedConversation.avatar }}</span>
                    </v-avatar>
                    <div>
                      <h2 class="text-h6 font-weight-bold">{{ selectedConversation.name }}</h2>
                      <div class="text-caption text-medium-emphasis">
                        {{ selectedConversation.type === 'group' ? 'Group' : 'Individual' }} chat
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Messages Area -->
                <div class="flex-grow-1 pa-4 overflow-y-auto">
                  <!-- Messages will be displayed here -->
                </div>

                <!-- Message Input -->
                <div class="pa-4 border-top">
                  <v-text-field
                    placeholder="Type a message..."
                    variant="outlined"
                    density="comfortable"
                    hide-details
                    append-inner-icon="mdi-send"
                  />
                </div>
              </div>

              <!-- Empty State -->
              <div v-else class="d-flex flex-column align-center justify-center fill-height">
                <v-icon icon="mdi-message-outline" size="64" color="grey-lighten-1" class="mb-4" />
                <h2 class="text-h5 font-weight-bold mb-2">Your Messages</h2>
                <p class="text-medium-emphasis text-center mb-6">
                  Select a conversation from the sidebar or start a new conversation to begin
                  messaging.
                </p>
                <v-btn color="primary" prepend-icon="mdi-plus"> Start New Conversation </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </template>
  </AppLayout>
</template>

<style scoped>
.border-right {
  border-right: 1px solid rgba(0, 0, 0, 0.12);
}

.border-bottom {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.border-top {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}

.v-list-item {
  border-radius: 8px;
  margin: 0 8px;
}

.v-list-item--active {
  background-color: rgb(var(--v-theme-primary-lighten-4));
}
</style>
