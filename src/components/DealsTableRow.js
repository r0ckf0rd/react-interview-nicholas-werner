import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { clone } from 'lodash';

import './DealsTableRow.css';

function currencyAmountToString(amount) {
  return "$" + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class DealsTableRow extends Component {
  static propTypes = {
    deal: PropTypes.shape({
      id: PropTypes.number.isRequired,
      institution: PropTypes.string.isRequired,
      dealType: PropTypes.string.isRequired,
      dealSize: PropTypes.string.isRequired,
      isPublished: PropTypes.bool.isRequired
    }).isRequired
  }

  publishDealHandler = () => {
    const { onPublishDeal, deal } = this.props;
    const modifiedDeal = clone(deal, true)
    modifiedDeal.isPublished = !modifiedDeal.isPublished;
    onPublishDeal(modifiedDeal);
  }

  render() {
    const { deal: { id, institution, dealType, dealSize, isPublished }, onDeleteDeal } = this.props;
    return (
      <tr className="DealsTableRow">
        <td className="DealsTableRow--cell">{institution}</td>
        <td className="DealsTableRow--cell">{dealType}</td>
        <td className="DealsTableRow--cell">{currencyAmountToString(dealSize)}</td>
        <td className="DealsTableRow--cell">{isPublished ? 'Yes' : 'No'}</td>
        <td className="DealsTableRow--cell">
          <button className="DealsPage--button" onClick={() => onDeleteDeal(id)}> Delete </button>
          <button className="DealsPage--button" onClick={this.publishDealHandler}> {isPublished ? 'Unpublish' : 'Publish'} </button> 
        </td>
      </tr>
    )
  }
}

export default DealsTableRow;
