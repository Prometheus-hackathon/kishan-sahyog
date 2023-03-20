import {Button} from 'react-native'
import {SvgUri} from 'react-native-svg'
function ButtonHomeScreen({children}:{children:string}) {
  return (
    <Button title={children} />
  )
}

export default ButtonHomeScreen