import { connect } from 'react-redux';
import { deleteDeal } from '../actions';
import DealsTable from '../components/DealsTable';

const mapStateToProps = state => {
  const { deals } = state;
  return {
    deals
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteDeal: id => dispatch(deleteDeal(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DealsTable);
