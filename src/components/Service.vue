<template>
    <div class="service-list-item">
        <i v-bind:class="Icon"></i>
        <div><router-link to="ServiceDetail">{{Name}}</div>
        <div><span>{{Description}}<span></div>
        <div><i v-bind:class="{statusClass}"></div>
    </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Service extends Vue {
    // fetch service details from vuex store
}
</script>

<style scoped lang="scss">
    .service-list-item {
        border-radius: 2px;
        border-style: solid;
        border-color: darkgray;
    }
</style>