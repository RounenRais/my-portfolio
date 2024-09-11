import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Navbar from '../navbar.vue'

describe('Navbar', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Navbar Vitest' } })
    expect(wrapper.text()).toContain('Navbar Vitest')
  })
})
