type Props = {
  message: string
}

const styles = {
  wrapper:
    'bg-gray-100 border border-gray-200 dark:border-gray-700 rounded-md dark:bg-gray-900 text-sm text-red-600 p-4',
}
export default function Hello({ message }: Props) {
  return <div className={styles.wrapper}>{message}</div>
}
