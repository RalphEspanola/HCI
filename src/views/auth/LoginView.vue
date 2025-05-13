<!-- App.vue (or your main login page component) -->
<script setup>
import LoginForm from '@/components/auth/LoginForm.vue'
</script>

<template>
  <v-app>
    <v-img src="/images/BackgroundIMG.png" cover class="background-img">
      <v-container class="fill-height d-flex align-center justify-center">
        <div class="login-content">
          <!-- University Branding -->
          <div class="text-center mb-6">
            <img src="/public/images/MasaoLMSIcon.png" alt="" height="100px" />
            <h2 class="text-h6 font-weight-bold mb-2 text-white">Caraga State University</h2>
            <div class="text-caption text-white mb-16 mt-n3">
              <span class="font-weight-bold">C</span>ompetence,
              <span class="font-weight-bold">S</span>ervice and
              <span class="font-weight-bold">U</span>prightness
            </div>
            <v-card color="grey-lighten-2" width="500px">
              <v-card-text opacity="20">
                <div>
                  <p class="text-start text-caption">
                    New to the website?
                    <span class="font-weight-bold cursor-pointer">Click here.</span>
                  </p>
                </div>
              </v-card-text>
            </v-card>
          </div>

          <!-- Login Card -->
          <v-card max-width="500" width="100%" class="pa-4 login-card mb-7">
            <v-card-text class="text-center">
              <!-- New to website notice -->

              <!-- Login Form Component -->
              <LoginForm />
            </v-card-text>
          </v-card>
          <v-card color="grey-lighten-2" width="500px">
            <v-card-text opacity="20" class="text-center">
              <div class="mt-6">
                <p>For concerns and inquiries kindly message on</p>
                <span class="font-weight-bold">MasaoLMS Facebook Page</span>
              </div>
              <v-divider class="mt-3"></v-divider>
              <!-- Footer -->
              <div class="mt-4 text-caption">
                <p class="font-weight-bold mb-0">
                  All rights reserved. Caraga State University | Powered by Moodle
                </p>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-container>
    </v-img>
  </v-app>
</template>

<style scoped>
.background-img {
  min-height: 100vh;
}

.login-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
}

.login-card {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
}
</style>
