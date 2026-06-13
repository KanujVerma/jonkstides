import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import DisclaimerGate from '@/components/disclaimer/DisclaimerGate'

const STORAGE_KEY = 'jonkstides_acknowledged'

beforeEach(() => {
  localStorage.clear()
})

it('renders gate when no acknowledgment in storage', () => {
  render(<DisclaimerGate />)
  expect(screen.getAllByText(/research purposes only/i).length).toBeGreaterThan(0)
})

it('does not render gate when acknowledgment is recent', () => {
  localStorage.setItem(STORAGE_KEY, String(Date.now()))
  render(<DisclaimerGate />)
  expect(screen.queryAllByText(/research purposes only/i)).toHaveLength(0)
})

it('enter button is disabled until checkbox is checked', () => {
  render(<DisclaimerGate />)
  const btn = screen.getByRole('button', { name: /enter site/i })
  expect(btn).toBeDisabled()
  fireEvent.click(screen.getByRole('checkbox'))
  expect(btn).not.toBeDisabled()
})

it('hides gate after entering site', async () => {
  render(<DisclaimerGate />)
  fireEvent.click(screen.getByRole('checkbox'))
  fireEvent.click(screen.getByRole('button', { name: /enter site/i }))
  await waitFor(() => {
    expect(localStorage.getItem(STORAGE_KEY)).toBeTruthy()
  })
})
