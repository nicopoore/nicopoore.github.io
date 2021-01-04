import { connect } from 'react-redux'

const Divider = (props) => {
  return (
    <div className={`divider-${props.type}`}>
    </div>
  )
}

export default connect(null)(Divider)