<template>
    <div>
        <a href="#" @click="SignOut()" v-if="user">{{user.displayName}} Sign out</a>
        <a href="#" @click="SignIn()" v-else>Sign in</a>
    </div>
</template>

<script lang="ts">
    
    import firebase from 'firebase/app';
    import "firebase/auth";
    import auth from '../classes/auth';
    import { Component, Vue } from 'vue-property-decorator';

    @Component({})
    export default class Account extends Vue {

        user: firebase.User|null = auth.auth.user();

        async SignIn() {
            await auth.auth.login();
            this.user = auth.auth.user();
        }
        
        SignOut() {
            auth.auth.logout();
            this.user = null;
        }
    }
</script>