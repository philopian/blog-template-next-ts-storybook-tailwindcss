type Props = {
  message: string
}

export default function Hello({ message }: Props) {
  return <div>{message}</div>
}
