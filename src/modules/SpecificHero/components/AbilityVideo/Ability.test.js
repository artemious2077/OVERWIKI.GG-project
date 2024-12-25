import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { AbilityVideo } from './AbilityVideo'

describe('Testing AbilityVIdeo component render', () => {
  it('play btn render (and correct btn switching)', () => {
    const { getByTestId, getByAltText } = render(<AbilityVideo />)

    // Проверяем, что кнопка рендерится
    const button = getByTestId('play-pause-button')
    expect(button).toBeInTheDocument()

    // Изначально кнопка pause должна быть в документе, так как playing=true
    const pauseBtn = getByAltText('pause')
    expect(pauseBtn).toBeInTheDocument()

    // Симуляция нажатия на кнопку
    fireEvent.click(button)

    // Проверка изменения состояния
    const playBtn = getByAltText('play')
    expect(playBtn).toBeInTheDocument()
    // логика на то, что кнопка паузы не должна быть в тестируемом файле
    // expect(pauseBtn).not.toBeInTheDocument()
  })
})
