
import { Badge } from 'react-bootstrap'
//import './MyBadge.css'


const MyBadge = (props) => {
  return (
   <Badge bg={props.color}>{props.branding}</Badge>
  )
}

export default MyBadge