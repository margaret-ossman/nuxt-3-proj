<template>
    <v-layout class="rounded rounded-md">
        <v-navigation-drawer class="bg-deep-purple" theme="dark" expand-on-hover rail permanent>
            <v-list>
                <v-list-item prepend-icon="mdi-account" title="User Name" subtitle="user@asurion.com"></v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list density="" nav>
                <!-- Vuetify supports Material Design Icons, Material Icons, Font Awesome 4 and Font Awesome 5 -->
                <v-list-item to="/" prepend-icon="mdi-table-large" title="Dashboard" link nuxt></v-list-item>
                <v-list-item to="/edit" prepend-icon="mdi-table-edit" title="Edit" link nuxt></v-list-item>
                <v-list-item to="/security" prepend-icon="mdi-security" title="Security" link nuxt></v-list-item>
                <v-list-item to="/contact" prepend-icon="mdi-card-account-mail" title="Contact" link nuxt></v-list-item>
                <v-list-item to="/demos/demo1" prepend-icon="mdi-card-account-mail" title="Demos" link nuxt></v-list-item>
                <!-- https://pictogrammers.com/library/mdi/ -->
            </v-list>
        </v-navigation-drawer>


        <v-navigation-drawer location="right" class="bg-deep-purple" theme="dark" expand-on-hover rail permanent>
            <v-list>
                <v-list-item prepend-icon="mdi-table-large" title="Title" subtitle="subtitle"></v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list density="compact">
                <v-list-item to="/demos" prepend-icon="mdi-table-large" title="Btn" link nuxt></v-list-item>

            </v-list>


        </v-navigation-drawer>
        <v-app-bar order="-1" color="grey-darken-3" title="Application bar">
            <template v-slot:append>

            </template>
        </v-app-bar>

        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
            <!-- output the page content -->
            <slot />
        </v-main>
    </v-layout>
</template>
  
<script setup>
import { ref } from 'vue'

const order = ref(0)
</script>
  
<script>
export default {
    data: () => ({
        order: 0,
    }),
}
</script>