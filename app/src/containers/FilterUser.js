import { connect } from 'react-redux'
import { toggleFilter } from '../actions/index'
import User from '../components/User'

const mapStateToProps = (state, ownProps) => {
  return {
    isFiltered: typeof(state.filteredUserIds.find(id => ownProps.id === id)) !== 'undefined',
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(toggleFilter(ownProps.id))
    }
  }
}

const FilterUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(User)

export default FilterUser