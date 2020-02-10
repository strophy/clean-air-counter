<template>
    <select v-model="selected" name="dropdown" id="dropdown" @change="optionChanged" class="custom-select custom-select-lg">
        <option disabled value="select_your_city">
            {{ $t('select_your_city') }}
        </option>
        <option v-for="option in options" v-bind:key="option" v-bind:value="option">
            {{ $t('cities.' + option) }}
        </option>
    </select>
</template>

<script>
import cities from './cities.json';


export default {
    name: 'Dropdown',
    methods: {
        optionChanged: function() {
            this.$emit('update:option', this.selected)
        },
    },
    data: function() {
        return {
            selected: 'select_your_city',
            options: cities.global
        }
    }
}
</script>

<style>
select {
    width: 100%;
}
</style>
