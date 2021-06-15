export default function Ordering() {
    return (
    <fieldset>
          <div className="NumItems">0 items</div>
          <div className="Item">
              <div className="ItemNum">1</div>
              <div className="DrinkImg">DrinkIMG</div>
              <div className="DrinkInfo">
                  <div className="DrinkName">DrinkName</div>
                  <div className="DrinkPrice">0 DKK</div>
              </div>
              <div className="DrinkTotal">0 DKK</div>
              
          </div>
          <div className="Extra">
              <input placeholder="Extra..."></input>
          </div>
          <div className="SubTotalVat">
              <div className="SubTotalTitle">Sub Total</div>
              <div className="SubTotalNum">0 DKK</div>
              <div className="VatTitle">Include VAT</div>
              <div className="VatNum">0 DKK</div>
          </div>
          <div className="Total">
              <div className="TotalTitle">Total</div>
              <div className="TotalNum">0 DKK</div>
          </div>
          <span>
              <input className="Button" type="Submit" value="Payment"></input>
          </span>
    </fieldset>
    );
  }