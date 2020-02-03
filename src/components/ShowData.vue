<template>
    <div v-if="this.$parent.cityData">
        <i18n path="deaths" tag="p">
            <template #city>
                <h2><strong>{{ $t('cities.' + cityData.cityID) }}</strong></h2>
            </template>
            <template #adultDeaths>
                <span>{{ cityData.pollutants.ytd.no2 }}</span>
            </template>
        </i18n>
        <hr />
        <strong>{{ $t('share') }}</strong><br />
        <strong>{{ $t('hashtag' )}}</strong>
    </div>
</template>

<script>
export default {
    name: 'ShowData',
    props: ['cityData'],
    data: function() {
        return {
        }
    }
}
</script>
