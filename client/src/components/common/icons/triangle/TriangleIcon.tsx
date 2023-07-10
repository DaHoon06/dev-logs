import { ReactElement } from 'react'
import styles from './TriangleIcon.module.scss'

interface Props {
  checked: boolean
}

export const TriangleIcon = (props: Props): ReactElement => {
  const { checked = false } = props
  return (
    <svg
      className={`${
        checked ? styles.transform_active : styles.transform_unactive
      }`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M5.98856 9.46852C5.80846 9.24339 5.77334 8.93496 5.89824 8.67511C6.02312 8.41526 6.28591 8.25 6.57421 8.25H18.5742C18.8625 8.25 19.1253 8.41526 19.2502 8.67511C19.3751 8.93496 19.34 9.24339 19.1599 9.46852L13.1599 16.9685C13.0175 17.1464 12.802 17.25 12.5742 17.25C12.3464 17.25 12.1309 17.1464 11.9886 16.9685L5.98856 9.46852Z"
        fill="#BCBCBC"
        fillRule="evenodd"
      />
    </svg>
  )
}
