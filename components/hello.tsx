import styles from './hello.module.css'
type Props = {
  message: string
}

export default function Hello({ message }: Props) {
  return <div className={styles.wrapper}>{message}</div>
}
