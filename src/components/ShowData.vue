<template>
    <div v-if="this.$parent.cityData">
        <h2>In the city of</h2>
        <h1 class="display-4 font-weight-bold">
            {{ this.$parent.cityData.name }}
        </h1>
        <p>which is in the country of {{ this.$parent.cityData.country }}</p>
        <p class="lead">
            {{ this.$parent.cityData.pollutants.ytd.no2 }} adults and
            {{ this.$parent.cityData.pollutants.ytd.pm25 }} children
        </p>
        <p>
            have died so far this year as a result of
            <strong>PM2.5 pollution</strong>.
        </p>
        <hr class="my-4" />
        <p>{{ $t('share') }}</p>
        <a class="btn btn-primary" href="#" role="button">Facebook</a>
        <a class="btn btn-primary" href="#" role="button">Twitter</a>
    </div>
</template>

<script>
export default {
    name: 'ShowData',
}
</script>