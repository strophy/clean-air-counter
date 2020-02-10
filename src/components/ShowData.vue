<template>
    <div v-if="this.$parent.cityData">
        <i18n path="deaths" tag="p" id="costtext">
            <template #city>
                <strong class="bg-primary">{{ $t('cities.' + cityData.cityID) }}</strong>
            </template>
            <template #costLine><br />
                <span class="bg-primary font-weight-bold">{{ Math.round(cityData.estimations.ytd["PM2.5"][1].number_central).toLocaleString() }} {{ $t('life_cost')}}</span>
                <span class="bg-transparent"> {{ $t('and') }} </span>
                <span class="bg-primary font-weight-bold">${{ Math.round(cityData.estimations.ytd["PM2.5"][0]["cost.USD_central"]).toLocaleString() }}</span><br />
            </template>
            <template #showDate>
                <span>{{ $d(new Date(2020, 0, 1), 'long') }}</span>
            </template>
        </i18n>
        <hr />
        <strong>{{ $t('share') }}</strong><br />
        <a 
          class="btn btn-secondary m-1 twitter-share-button" 
          data-text="Test text" 
          data-lang="en"
          data-show-count="false"
          data-hashtags="CleanAirNow" 
          href='https://twitter.com/share?ref_src=twsrc%5Etfw' 
          role="button">
          {{ $t('twitter') }}
        </a>
        <a class="btn btn-secondary m-1" :href="$t('f_share_url')" role="button">{{ $t('facebook') }}</a>
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

<style scoped>
    #costtext{
        font-size: 1.7rem
    }
</style>
