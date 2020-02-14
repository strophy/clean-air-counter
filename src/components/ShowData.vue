<template>
    <div v-if="this.$parent.cityData">
        <i18n path="deaths" tag="h2" id="costtext">
            <template #city>
                <strong class="bg-warning">{{ $t('cities.' + cityData.cityID) }}</strong>
            </template>
            <template #costLine><br />
                <span class="bg-warning font-weight-bold">{{ Math.round(cityData.estimations.ytd["PM2.5"][1].number_central).toLocaleString() }} {{ $t('life_cost')}}</span>
                <span class="bg-transparent"> {{ $t('and') }} </span>
                <span class="bg-warning font-weight-bold">US${{ Math.round(cityData.estimations.ytd["PM2.5"][0]["cost.USD_central"]).toLocaleString() }}</span><br />
            </template>
            <template #showDate>
                <span>{{ $d(new Date(2020, 0, 1), 'long') }}</span>
            </template>
        </i18n>
        <hr />
        <div>
            <strong>{{ $t('share') }}</strong><br />
            <a class="btn btn-warning m-1" href="" role="button">{{ $t('twitter') }}</a>
            <a class="btn btn-warning m-1" href="" role="button">{{ $t('facebook') }}</a>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
var twitterShare = '';
var facebookShare = '';
export default {
    name: 'ShowData',
    props: ['cityData'],
    data: function() {
        return {
        }
    },
    updated: function () {
        var twitterBase = "https://twitter.com/intent/tweet?";
        var facebookBase = "https://www.facebook.com/sharer/sharer.php?";

        var shareText = document.getElementById("costtext").textContent;
        var shareUrl = "https://www.airvisual.com/";
        var shareHashtag = this.$t('hashtag');

        twitterShare = twitterBase + 'text=' + shareText + '&url=' + shareUrl + '&hashtags=' + shareHashtag;
        facebookShare = facebookBase + 'u=' + shareUrl;
        console.log(encodeURI(twitterShare))
        console.log(encodeURI(facebookShare))
    }
}
</script>
