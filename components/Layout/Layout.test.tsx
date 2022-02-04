import React from 'react'
import { render, screen } from '@testing-library/react'

import Layout from './Layout'

describe('Layout', () => {
  test('should render children data', () => {
    render(
      <Layout>
        <p>...</p>
      </Layout>,
    )
    const welcomeElement = screen.getByText(/Welcome to my blog/)
    expect(welcomeElement).toBeInTheDocument()
  })
})
