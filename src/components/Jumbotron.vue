<template>
    <div id="cityinfo" class="jumbotron border bg-transparent">
        <div class="btn-group btn-group-sm mb-3" role="group" aria-label="Select your city">
            <button @click="setLocale('id')" class="btn btn-primary">Bahasa Indonesia</button>
            <button @click="setLocale('en')" class="btn btn-primary">English</button>
            <button @click="setLocale('es')" class="btn btn-primary">Español</button>
            <button @click="setLocale('ro')" class="btn btn-primary">Română</button>
            <button @click="setLocale('tr')" class="btn btn-primary">Türkçe</button>
            <button @click="setLocale('th')" class="btn btn-primary">ไทย</button>
            <button @click="setLocale('zh')" class="btn btn-primary">中文</button>
        </div>
        <h2>{{ $t('lead_text') }}</h2>
        <Dropdown @update:option="getData" class="mb-5"></Dropdown>
        <ShowData :cityData=cityData></ShowData>
        <i18n path="created" tag="p">
            <template #greenpeace>
                <a href="https://www.greenpeace.org/southeastasia/" target="_blank">{{ $t('greenpeace') }}</a>
            </template>
            <template #airvisual>
                <a href="https://www.airvisual.com/" target="_blank">Air Visual</a>
            </template>
        </i18n>
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

<style>
    #cityinfo {
        border-width: 5px !important;
        padding: 1rem !important;
    }

</style>