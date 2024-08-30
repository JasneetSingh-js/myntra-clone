const BagSummary=({})=>{
    const bagSummary={
        totaltem:3,
        totalMRP: 500,
        totalDiscount: 100,
        finalPayment: 401
    }

    return(
    <div className="bag-summary">
         <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">{bagSummary.totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">{bagSummary.totalDiscount}</span>
      <span className="price-item-value priceDetail-base-discount">-₹{}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹${bagSummary.finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </div>
    );
  
}

export default BagSummary;