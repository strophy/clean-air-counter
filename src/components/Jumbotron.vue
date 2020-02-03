<template>
    <div id="cityinfo" class="jumbotron border-primary bg-info">
        <div class="btn-group btn-group-sm mb-3" role="group" aria-label="Basic example">
            <button @click="setLocale('en')" class="btn btn-primary">English</button>
            <button @click="setLocale('zh')" class="btn btn-primary">中文</button>
        </div>
        <Dropdown @update:option="getData" class="mb-5"></Dropdown>
        <ShowData :cityData=cityData></ShowData>
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
                .then(response => (this.cityData = response.data));
        },
        setLocale: function(locale) {
            this.$i18n.locale = locale;
        }
    },
    data: function() {
        return {
            cityData: null,
        }
    }
}
</script>
