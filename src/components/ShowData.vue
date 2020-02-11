<template>
    <div v-if="this.$parent.cityData">
        <i18n path="deaths" tag="p" id="costtext">
            <template #city>
                <strong class="bg-warning">{{ $t('cities.' + cityData.cityID) }}</strong>
            </template>
            <template #costLine><br />
                <span class="bg-warning font-weight-bold">{{ Math.round(cityData.estimations.ytd["PM2.5"][1].number_central).toLocaleString() }} {{ $t('life_cost')}}</span>
                <span class="bg-transparent"> {{ $t('and') }} </span>
                <span class="bg-warning font-weight-bold">${{ Math.round(cityData.estimations.ytd["PM2.5"][0]["cost.USD_central"]).toLocaleString() }}</span><br />
            </template>
            <template #showDate>
                <span>{{ $d(new Date(2020, 0, 1), 'long') }}</span>
            </template>
        </i18n>
        <hr />
        <strong>{{ $t('share') }}</strong><br />
        <a 
        class="btn btn-warning m-1"
        :href=ohai
        role="button">
          {{ $t('twitter') }}
        </a>
        <a class="btn btn-warning m-1" :href="$t('f_share_url')" role="button">{{ $t('facebook') }}</a>
    </div>
</template>

<script>
const working = "Try using custom formatting https://kazupon.github.io/vue-i18n/guide/formatting.html#custom-formatting"
const ohai = "https://twitter.com/intent/tweet?text=hello+world&url=https://www.airvisual.com/&hashtags=CleanAirNow"

export default {
    name: 'ShowData',
    props: ['cityData'],
    data: function() {
        return {
            ohai,
            working
        }
    }
}
</script>

<style>
    #costtext{
        font-size: 1.5rem
    }
</style>
