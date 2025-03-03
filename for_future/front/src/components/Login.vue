<template>
  <v-card
    class="mx-auto"
    max-width="344"
    title="LOG IN"
  >
    <v-container>
      <v-text-field
        v-model="userId"
        label="User ID"
        variant="underlined"
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Password"
        variant="underlined"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        @click:append-inner="visible = !visible"
      ></v-text-field>
    </v-container>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="success"
        @click="login()"
      >
        LOGIN <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>

import { ref } from 'vue'

const visible = ref(false)
const userId = ref('')
const password = ref('')

function login() {
  const params = {
    userId: userId.value,
    password: password.value
  }

  this.$axios.post(`${process.env.VUE_APP_USER_API}/login`, params)
    .then(res => {
      alert(res)
    })
    .catch(err => {
      alert(err)
    })
}

</script>