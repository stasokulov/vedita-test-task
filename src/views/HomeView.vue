<script setup lang="ts">
import { computed, onMounted, ref, type ComputedRef } from 'vue'
import { useCountriesStore, type TCountryArr } from '@/stores/countries'

import CountryCard from '@/components/CountryCard.vue'
import SearchIcon from '@/components/icons/IconSearch.vue'

const countriesStore = useCountriesStore()

const searchString = ref<string>('')

const countriesArr: ComputedRef<TCountryArr> = computed(() => countriesStore.countries)
const filtredCountriesArr: ComputedRef<TCountryArr> = computed(() => {
  return searchString.value
  ? countriesArr.value.filter(country => country.name.toLowerCase().includes(searchString.value.toLowerCase()))
  : countriesArr.value
})

onMounted(() => {
  countriesStore.fetchCountries()
})
</script>

<template>
  <main class="home-page">
    <div class="home-page__search">
      <SearchIcon class="home-page__search-icon" />
      <input class="home-page__search-input" placeholder="Search for a country…" v-model="searchString">
    </div>
    <div class="home-page__country-list">
      <RouterLink to="/about" v-for="country in filtredCountriesArr" :key="country.name" class="home-page__country-link">
        <CountryCard
          v-if="country.name"
          :country-data="country"
          class="home-page__country-item"
          @click="countriesStore.setActiveCountryName(country.name)"
        />
      </RouterLink>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  padding: 24px 16px;
  font-size: 14px;
}

.home-page__search {
  position: relative;
  width: 100%;
  max-width: 480px;
  padding: 14px 14px 14px 74px;
  margin-bottom: 24px;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  background-color: var(--color-background-light);
}

.home-page__search-icon {
  position: absolute;
  left: 32px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
}

.home-page__search-input {
  width: 100%;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;;
  border-width: 0;

  &::placeholder {
    color: hsl(0, 0%, 77%);
    opacity: 1; /* Firefox */
  }
}

.home-page__country-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.home-page__country-link {
  display: block;
  height: 100%;
  text-decoration: none;
}

.home-page__country-item {
  max-width: 264px;
  width: 100%;
  height: 100%;
  margin: auto;
  overflow: hidden;
}

@media (width >= 600px) {
  main {
    padding: 48px 80px;
  }

  .home-page__search {
    padding: 18px 18px 18px 74px;
    margin-bottom: 48px;
  }

  .home-page__search-icon {
    width: 18px;
    height: 18px;
  }

  .home-page__search-input {
    font-size: 14px;
  }

  .home-page__country-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 74px;
  }

}

@media (width >= 1024px) {
  .home-page__country-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (width >= 1200px) {
  .home-page__country-list {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
