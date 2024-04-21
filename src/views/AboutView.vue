<script setup lang="ts">
import { computed, type ComputedRef } from 'vue'

import { useCountriesStore, type ICountry } from '@/stores/countries'
import { NO_DATA } from '@/constans'
import { getStringWithCommasFromNumber } from '@/composables/populationWithCommas'

import BackIcon from '@/components/icons/IconBack.vue'

const countriesStore = useCountriesStore()

const country: ComputedRef<ICountry | undefined> = computed(() => countriesStore.getActiveCountry)
const populationWithCommas: ComputedRef<string | undefined> = computed(() => {
  if (typeof country.value?.population !== 'number') return
  return getStringWithCommasFromNumber(country.value.population)
})
const curenciesWithCommas: ComputedRef<string[] | undefined> = computed(() => {
  if (!country.value?.currencies) return
  const nameArr = country.value.currencies.map((item) => item.name)
  if (!nameArr) return
  return getStringWithCommaByIndex(nameArr)
})
const languagesWithCommas: ComputedRef<string[] | undefined> = computed(() => {
  if (!country.value?.languages) return
  const nameArr = country.value.languages.map((item) => item.name)
  if (!nameArr) return
  return getStringWithCommaByIndex(nameArr)
})

const getCountryNameByAlpha3Code = (code: string): string | undefined =>
  countriesStore.countries.find((country) => country.alpha3Code === code)?.name

const getStringWithCommaByIndex = (arr: (string | undefined)[]): string[] => {
  const checkedNameArr: string[] = []
  arr.forEach((item) => {
    if (typeof item === 'string') checkedNameArr.push(item)
  })
  const nameArrWithCommas = checkedNameArr.map((item, index) => (index === 0 ? item : `, ${item}`))
  return nameArrWithCommas
}
</script>

<template>
  <main class="country">
    <RouterLink to="/">
      <button class="country__back-button">
        <BackIcon class="country__back-icon" />
        Back
      </button>
    </RouterLink>
    <div v-if="country" class="country__content">
      <div class="country__flag">
        <img :alt="country.name" class="country__flag-img" :src="country.flag" />
      </div>
      <div class="country__discription">
        <h2 class="country__name">{{ country.name }}</h2>
        <div class="country__props">
          <div class="country__sub-props">
            <p class="country__prop">
              <span class="country__prop-title">Native Name</span>:
              {{ country.nativeName ?? NO_DATA }}
            </p>
            <p class="country__prop">
              <span class="country__prop-title">Population</span>:
              {{ populationWithCommas ?? NO_DATA }}
            </p>
            <p class="country__prop">
              <span class="country__prop-title">Region</span>: {{ country.region ?? NO_DATA }}
            </p>
            <p class="country__prop">
              <span class="country__prop-title">Sub Region</span>:
              {{ country.subregion ?? NO_DATA }}
            </p>
            <p class="country__prop">
              <span class="country__prop-title">Capital</span>: {{ country.capital ?? NO_DATA }}
            </p>
          </div>
          <div class="country__sub-props">
            <p class="country__prop">
              <span class="country__prop-title">Top Level Domain</span>:
              {{ country.topLevelDomain[0] ?? NO_DATA }}
            </p>
            <p class="country__prop">
              <span class="country__prop-title">Currencies</span>:
              <template v-if="curenciesWithCommas?.length">
                <span v-for="currency in curenciesWithCommas" :key="currency">
                  {{ currency }}
                </span>
              </template>
              <span v-else>{{ NO_DATA }}</span>
            </p>
            <p class="country__prop">
              <span class="country__prop-title">Languages</span>:
              <template v-if="languagesWithCommas?.length">
                <span v-for="language in languagesWithCommas" :key="language">
                  {{ language }}
                </span>
              </template>
              <span v-else>{{ NO_DATA }}</span>
            </p>
          </div>
        </div>
        <div class="country__borders">
          <h3 class="country__borders-title">Border&nbsp;Countries:</h3>
          <ul v-if="country.borders" class="country__borders-list">
            <li v-for="item in country.borders" :key="item" class="country__borders-state">
              {{ getCountryNameByAlpha3Code(item) ?? NO_DATA }}
            </li>
          </ul>
          <div v-else>{{ NO_DATA }}</div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.country {
  padding: 40px 28px 60px;
}

.country__back-button {
  position: relative;
  background-color: var(--color-background-light);
  color: var(--color-text);
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
  border-radius: 2px;
  border-width: 0;
  padding: 6px 23px 6px 50px;
  margin-bottom: 64px;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
}

.country__back-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 24px;
  width: 18px;
  height: 18px;
}

.country__flag {
  display: flex;
  // max-width: 560px;
}

.country__flag-img {
  object-fit: contain;
  width: 100%;
  border-radius: 5.71755px;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.0294384);
}

.country__discription {
  padding-top: 44px;
}

.country__name {
  margin-bottom: 16px;
  font-weight: 800;
  font-size: 22px;
  line-height: 30px;
}

.country__props {
  margin-bottom: 34px;
}

.country__sub-props {
  &:not(:last-child) {
    margin-bottom: 32px;
  }
}

.country__prop {
  font-weight: 300;
  font-size: 14px;
  line-height: 32px;
}

.country__prop-title {
  font-weight: 600;
}

.country__borders-title {
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}

.country__borders-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
}

.country__borders-state {
  padding: 6px 30px;
  background: var(--color-background-light);
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
  border-radius: 2px;

  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
}

@media (width > 820px) {
  .country {
    padding: 80px;
  }

  .country__back-button {
    padding: 10px 39px 10px 62px;
    margin-bottom: 80px;
    font-size: 16px;
  }

  .country__back-icon {
    width: 20px;
    height: 20px;
    left: 32px;
  }

  .country__content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 80px;
    align-items: flex-start;
  }

  .country__discription {
    padding-top: 40px;
  }

  .country__name {
    margin-bottom: 23px;
    font-size: 32px;
    line-height: 44px;
  }

  .country__prop {
    font-size: 16px;
  }

  .country__borders-state {
    padding: 4px 20px;
    font-size: 14px;
    line-height: 19px;
  }
}

@media (width >= 1280px) {
  .country__content {
    grid-template-columns: 560px 1fr;
    column-gap: 120px;
  }

  .country__props {
    display: flex;
    column-gap: 140px;
    margin-bottom: 68px;
  }

  .country__sub-props {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }

  .country__borders {
    display: flex;
    gap: 16px;
  }

  .country__borders-title {
    margin-bottom: 0;
  }
}
</style>
