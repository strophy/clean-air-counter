<template>
    <div id="cityinfo" class="jumbotron border-primary bg-info">
        <Dropdown @update:option="getData"></Dropdown>
        <ShowData></ShowData>
    </div>
</template>

<script>
import Dropdown from './Dropdown.vue'
import ShowData from './ShowData'
export default {
    name: 'Jumbotron',
    components: {
        Dropdown,
        ShowData,
    },
    methods: {
        //
    },
    data: function() {
        return {
            cityData: null,
        }
    }
}
</script>
