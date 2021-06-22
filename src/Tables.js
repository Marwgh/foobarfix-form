export default function Tables(props) {
    // $("input[type='radio'][name='table']:checked").value;
    // const t = document.querySelector('input[name="table"]:checked').value;
    // console.log(t);
    // if (t == "0") {
    // }
    function removeER() {
        document.querySelector("#tableER").classList.add("hideER");
    }

    return (
      <fieldset id="FieldsetPart1" className={`Form ${props.phoneClass}`}>
          <p className="TablesOrder">Ready to order?</p>
          <p className="TablesHeader">Select your table:</p>
          <section className="Tables">
            <div className="TablesGrid">
                <div className="Table">
                    <label>
                        <input  type="radio" className="tableChoice" id="table1" name="table" value="table1" checked={props.selectedT === "table1"} onChange={ () => {props.setSelectedT("table1"); removeER()}  } required="required"></input>
                        <img  className="TableRow1 Img1Collum1" alt="Table1" src="./Images/tableS@2x.png"></img>
                        <div className="TablesText">1</div> 
                    </label> 
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" className="tableChoice" id="table2" name="table" value="table2" checked={props.selectedT === "table2"} onChange={ () => {props.setSelectedT("table2"); removeER()} } required="required"></input>
                        <img  className="TableRow1 Img1Collum2" alt="Table1" src="./Images/tableS@2x.png"></img>
                        <div className="TablesText">2</div>
                    </label>
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" className="tableChoice" id="table3" name="table" value="table3" checked={props.selectedT === "table3"} onChange={ () => {props.setSelectedT("table3"); removeER()} } required="required"></input>
                        <img  className="TableRow1 Img1Collum3" alt="Table1" src="./Images/tableS@2x.png"></img>
                        <div className="TablesText">3</div>
                    </label>
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" className="tableChoice" id="table4" name="table" value="table4" checked={props.selectedT === "table4"} onChange={ () => {props.setSelectedT("table4"); removeER()} } required="required"></input>
                        <img  className="TableRow2 Img2Collum1" alt="Table2" src="./Images/tableR@2x.png"></img>
                        <div className="TablesText">4</div>
                    </label>
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" className="tableChoice" id="table5" name="table" value="table5" checked={props.selectedT === "table5"} onChange={ () => {props.setSelectedT("table5"); removeER()} } required="required"></input>
                        <img  className="TableRow2 Img2Collum2" alt="Table2" src="./Images/tableR@2x.png"></img>
                        <div className="TablesText">5</div>
                    </label>
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" className="tableChoice" id="tabl6"  name="table" value="table6" checked={props.selectedT === "table6"} onChange={ () => {props.setSelectedT("table6"); removeER()} } required="required"></input>
                        <img  className="TableRow2 Img2Collum3" alt="Table2" src="./Images/tableR@2x.png"></img>
                        <div className="TablesText">6</div>
                    </label>
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" className="tableChoice" id="table7" name="table" value="table7" checked={props.selectedT === "table7"} onChange={ () => {props.setSelectedT("table7"); removeER()} } required="required"></input>
                        <img  className="TableRow3 Img2Collum1" alt="Table2" src="./Images/tableR@2x.png"></img>
                        <div className="TablesText">7</div>
                    </label>
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" className="tableChoice" id="tabl8" name="table" value="table8" checked={props.selectedT === "table8"} onChange={ () => {props.setSelectedT("table8"); removeER()} } required="required"></input>
                        <img  className="TableRow3 Img2Collum2" alt="Table2" src="./Images/tableR@2x.png"></img>
                        <div className="TablesText">8</div>
                    </label>
                </div>
                <div className="Table">
                    <label>
                        <input type="radio" className="tableChoice" id="table9" name="table" value="table9" checked={props.selectedT === "table9"} onChange={ () => {props.setSelectedT("table9"); removeER()} } required="required"></input>
                        <img  className="TableRow3 Img2Collum3" alt="Table2" src="./Images/tableR@2x.png"></img>
                        <div className="TablesText">9</div>
                    </label>
                </div>
            </div>
          </section>
      </fieldset>
    );
    
  }