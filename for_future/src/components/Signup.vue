<template>
  <v-card
    class="mx-auto"
    max-width="344"
    title="SIGN UP"
  >
    <v-container>
      <v-form v-model="form">
        <v-text-field
          v-model="userName"
          label="User Name"
          variant="underlined"
          :rules="rules.userName"
        ></v-text-field>
        <v-text-field
          v-model="userId"
          label="User ID"
          variant="underlined"
          :rules="rules.userId"
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          variant="underlined"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          @click:append-inner="visible = !visible"
          :rules="rules.password"
        ></v-text-field>
        <v-text-field
          v-model="email"
          label="Email"
          variant="underlined"
          :rules="rules.email"
        ></v-text-field>
      </v-form>
    </v-container>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="success"
        :disabled="!form"
      >
        SIGNUP <v-icon icon="mdi-chevron-right" end></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>

import { ref } from 'vue'

let form = ref(true)
const visible = ref(false)
const userName = ref('')
const userId = ref('')
const password = ref('')
const email = ref('')

const rules = {
  userName: [
    v => !!v || '이름을 입력해주세요.'
  ],
  userId: [
    v => !!v || '아이디를 입력해주세요.'
  ],
  password: [
    v => !!v || '패스워드를 입력해주세요.'
  ],
  email: [
    v => !!v || '이메일을 입력해주세요.'
  ],
}

const func = () => {}

</script>