import { connect } from 'react-redux';
import { deleteDeal, modifyDeal } from '../actions';
import DealsTable from '../components/DealsTable';

const mapStateToProps = state => {
  const { deals } = state;
  return {
    deals
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteDeal: id => dispatch(deleteDeal(id)),
    onPublishDeal: deal => dispatch(modifyDeal(deal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DealsTable);
