import React from 'react'
import { render, screen } from '@testing-library/react'
import Hello from './hello'

describe('Hello', () => {
  test('should have welcome message', () => {
    render(<Hello message="helllo" />)
    const welcomeElement = screen.getByText(/helllo/)
    expect(welcomeElement).toBeInTheDocument()
  })
})
