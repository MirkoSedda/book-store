
import { Alert } from 'react-bootstrap'
//import './WarningSign.css'


const WarningSign = (props) => {
  return (
   <Alert variant={'danger'}>
    {props.branding}
  </Alert>
  )
}

export default WarningSign

