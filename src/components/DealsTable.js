import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DealsTableRow from './DealsTableRow';

import './DealsTable.css';

class DealsList extends Component {
  static propTypes = {
    deals: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        institution: PropTypes.string.isRequired,
        dealSize: PropTypes.string.isRequired,
        dealType: PropTypes.string.isRequired,
        isPublished: PropTypes.bool.isRequired
      })
    ).isRequired
  }

  render() {
    const { deals, onDeleteDeal, onPublishDeal } = this.props;
    const dealsTableRows = deals.map(deal => <DealsTableRow key={deal.id} deal={deal} onDeleteDeal={onDeleteDeal} onPublishDeal={onPublishDeal} />);
    return(
      <div>
        <table className="DealsTable">
          <thead>
            <tr>
              <th className="DealsTable--headerCell">Institution</th>
              <th className="DealsTable--headerCell">Deal Type</th>
              <th className="DealsTable--headerCell">Deal Size</th>
              <th className="DealsTable--headerCell">Is Published?</th>
              <th className="DealsTable--headerCell">Manage</th>
            </tr>
          </thead>
          <tbody>
            {dealsTableRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DealsList;
