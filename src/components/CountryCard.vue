<script setup lang="ts">
import { type ICountry } from '@/stores/countries'
import { NO_DATA } from '@/constans'
import { getStringWithCommasFromNumber } from '@/composables/populationWithCommas'

const props = defineProps<{
  countryData: ICountry
}>()

const populationWithCommas = getStringWithCommasFromNumber(props.countryData.population)
</script>

<template>
  <div class="card">
    <RouterLink :to="`/about/${countryData.alpha2Code.toLowerCase()}`" class="card__link">
      <div class="card__flag">
        <img :alt="countryData.name" class="card__flag-img" :src="countryData.flag" />
      </div>
      <div class="card__discription">
        <h2 class="card__country-name">{{ countryData.name ?? NO_DATA }}</h2>
        <p class="card__country-prop">
          <span class="card__country-prop-title">Population</span>:
          {{ populationWithCommas ?? NO_DATA }}
        </p>
        <p class="card__country-prop">
          <span class="card__country-prop-title">Region</span>: {{ countryData.region ?? NO_DATA }}
        </p>
        <p class="card__country-prop">
          <span class="card__country-prop-title">Capital</span>:
          {{ countryData.capital ?? NO_DATA }}
        </p>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.card {
  background-color: var(--color-background-light);
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
  border-radius: 5px;
  color: var(--color-text);
}

.card__link {
  text-decoration: none;
}

.card__flag {
  display: flex;
  height: 160px;
}

.card__flag-img {
  object-fit: cover;
  width: 100%;
}

.card__discription {
  padding: 24px 24px 46px;
  color: var(--color-text);
}

.card__country-name {
  margin-bottom: 16px;
  font-weight: 800;
  font-size: 18px;
  line-height: 26px;
}

.card__country-prop {
  font-weight: 300;
  line-height: 16px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
}

.card__country-prop-title {
  font-weight: 600;
}
</style>
