import { mount } from '@vue/test-utils'
import index from '@/pages/index.vue'

describe('main page', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(index, {
      stubs: ['no-ssr', 'vue-typer']
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
