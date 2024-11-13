'use client'
import styles from './Typography.module.scss'

export const Typography = (props) => {
  const {
    variant,
    //weight можно указать в стилях типографии
    // weight = 'regular',
    children,
    className,
    //по необходимости можно сразу задать цвет, но его так же можно задать в стилях типографии,
    // так что этот параметр не нужен
    // color,
    // truncate позволяет ограничивать длину текста, не превышая определённое число символов
    truncate = false,
    onClick,
    // Поле id позволяет задать уникальный идентификатор для компонента Typography
    id,
  } = props

  const Tags = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    button: 'button',
    p: 'p',
    span: 'span',
  }

  //генерация стилей для variant, если укажем в этом пропсе h6, то будут приминяться стили для этого
  // пропса. Аналогично такое происходит с weight и color
  const classNamedGenerated = [
    // Обработка ошибки отсутствия variant пропса +styles будет выдавать ошибку если не привязать
    // к типографии стиль, здесь он под 'use client'
    styles[variant] || '',
    // styles[weight],
    // styles[color],
    className,
  ]
    .join(' ')
    .trim()

  const truncateString = (stroke, maxNumber) => {
    if (typeof stroke === 'string') {
      return stroke.length <= maxNumber
        ? stroke
        : stroke.slice(0, maxNumber) + '...'
    }
    return stroke
  }

  const TagName = Tags[variant in Tags ? variant : 'body']

  return (
    <>
      <TagName onClick={onClick} id={id} className={classNamedGenerated}>
        {!truncate ? children : truncateString(children, truncate)}
      </TagName>
    </>
  )
}
