import pluginVue from 'eslint-plugin-vue'
import js from '@eslint/js'

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        localStorage: 'readonly',
        window: 'readonly',
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off'
    }
  }
]
