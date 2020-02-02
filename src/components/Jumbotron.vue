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
        getData: function(value) {
            const url = 'https://y2mta1n6vj.execute-api.us-east-1.amazonaws.com/prod/pollutionCostCounter/' + value;
            this.axios
                .get(url)
                .then(response => (this.cityData = response.data))
        }
    },
    data: function() {
        return {
            cityData: null,
        }
    }
}
</script>
