import Link from './link'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../redux/actions'


const mapStoreToProps = (state, ownProp) => ({
  active: state.visibilityFilter === ownProp.filter
})

const mapDispatchToProps = (dispatch, ownProp) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProp.filter))
})

const FilterLink = connect(
  mapStoreToProps,
  mapDispatchToProps
)(Link)

export default FilterLink