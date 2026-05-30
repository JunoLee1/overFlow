import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import SummaryCards from './SummaryCards'

const mockCards = [
  { key: '1', label: '총 매출', value: '1,200,000' },
  { key: '2', label: '주문 수', value: 42 },
]

describe('SummaryCards', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn())
  })

  it('로딩 중 텍스트를 표시한다', () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      json: () => new Promise(() => {}),
    } as Response)

    render(<SummaryCards />)

    expect(screen.getByText('불러오는 중....')).toBeInTheDocument()
  })

  it('API 응답 후 카드 목록을 렌더링한다', async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      json: async () => ({ card: mockCards }),
    } as Response)

    render(<SummaryCards />)

    await waitFor(() => {
      expect(screen.getByText('총 매출')).toBeInTheDocument()
      expect(screen.getByText('1,200,000')).toBeInTheDocument()
      expect(screen.getByText('주문 수')).toBeInTheDocument()
      expect(screen.getByText('42')).toBeInTheDocument()
    })
  })

  it('로딩 완료 후 로딩 텍스트가 사라진다', async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      json: async () => ({ card: mockCards }),
    } as Response)

    render(<SummaryCards />)

    await waitFor(() => {
      expect(screen.queryByText('불러오는 중....')).not.toBeInTheDocument()
    })
  })
})
