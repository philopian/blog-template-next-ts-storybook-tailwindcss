import React from 'react'
import { render, screen } from '@testing-library/react'

import Layout from './Layout'

describe('Layout', () => {
  test('should render children data', () => {
    const title = 'hello there'
    render(
      <Layout title={title}>
        <p>...</p>
      </Layout>,
    )
    const welcomeElement = screen.getByText(/hello there/)
    expect(welcomeElement).toBeInTheDocument()
  })
})
