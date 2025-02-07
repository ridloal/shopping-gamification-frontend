import { createI18n } from 'vue-i18n'
import { messages } from './assets/locales'

const i18n = createI18n({
  locale: 'id', // default locale
  fallbackLocale: 'en',
  messages,
  silentTranslationWarn: true
})

export default i18n