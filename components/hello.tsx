import styles from './hello.module.css'
type Props = {
  message: string
  textColor?: string
}

export default function Hello({ message, textColor = 'red' }: Props) {
  return (
    <div className={styles.wrapper}>
      <span style={{ color: textColor }}>{message} </span>
    </div>
  )
}
