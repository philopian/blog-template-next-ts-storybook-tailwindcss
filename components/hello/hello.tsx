type Props = {
  message: string
  textColor?: string
}

const styles = {
  wrapper: `bg-gray-100 border border-gray-200 dark:border-gray-700 rounded-md dark:bg-green-600 text-sm p-4`,
}

export default function Hello({
  message,
  textColor = 'white',
}: Props) {
  return (
    <div className={styles.wrapper}>
      <span style={{ color: textColor }}>{message} </span>
    </div>
  )
}
