import { useHistory } from 'react-router-dom'

export default function useEidt() {
  const history = useHistory()
  const startClick = () => {
    history.push('/edit')
  }
  return [startClick]
}
