import { ref, computed, type ComputedRef } from 'vue'
import { defineStore } from 'pinia'

import countriesArr from '@/assets/data.json'

export interface IFlags {
  svg?: string
  png?: string
}
export interface ICurrenciesEntity {
  code?: string
  name?: string
  symbol?: string
}
export interface ILanguagesEntity {
  iso639_1?: string
  iso639_2?: string
  name?: string
  nativeName?: string
}
export interface ITranslations {
  br?: string
  pt?: string
  nl?: string
  hr?: string
  fa?: string
  de?: string
  es?: string
  fr?: string
  ja?: string
  it?: string
  hu?: string
}
export interface IRegionalBlocsEntity {
  acronym: string
  name: string
}
export interface ICountry {
  name: string
  topLevelDomain: string[]
  alpha2Code: string
  alpha3Code: string
  callingCodes: string[]
  capital?: string
  altSpellings?: string[]
  subregion: string
  region: string
  population: number
  latlng?: number[]
  demonym: string
  area?: number
  timezones: string[]
  borders?: string[]
  nativeName: string
  numericCode: string
  flags: IFlags
  currencies?: ICurrenciesEntity[]
  languages: ILanguagesEntity[]
  translations: ITranslations
  flag: string
  regionalBlocs?: IRegionalBlocsEntity[]
  cioc?: string
  independent: boolean
}
export type TCountryArr = ICountry[] | []

export const useCountriesStore = defineStore('countries', () => {
  // State
  const countries = ref<TCountryArr>([])
  const activeCountryCode = ref<string>('')

  // Actions
  const fetchCountries = async () => {
    countries.value = countriesArr
  }
  const setActiveCountryCode = async (code: string) => {
    activeCountryCode.value = code
  }

  // Getters
  const getActiveCountry: ComputedRef<ICountry | undefined> = computed(() =>
    countries.value.find((country) => country.alpha2Code.toLowerCase() === activeCountryCode.value)
  )

  return { countries, fetchCountries, setActiveCountryCode, getActiveCountry }
})
