import CreditCardInput from 'react-credit-card-input';

export default function Pmethod (props) {
    console.log(props.methodP);

    function removePayER() {
    if (document.querySelector("#namePayment").value) {

        document.querySelector("#paymentER").classList.add("hideER");
        }
    }
    

    if(props.methodP==="Credit card") {
        return (
            <div className="paymentInformation ">
                <h1>Payment Information</h1>
                <div>
                    <label className="paymentLabel"  htmlFor="namePayment" >Full Name </label>
                    <input id="namePayment" type="text" name="cardname" placeholder="John Doe" onKeyPress={removePayER} required ></input>
                </div>
                <div >
                <label className="paymentLabel">Card Information </label>
                <CreditCardInput/>
                </div>
                
                
            </div>
        )
    }else if(props.methodP==="cash") {
        return (
            <div id="cashPaying">
                <p>Please go the to the counter to pay, we will call you when order is ready .</p>
            </div>
        )
    }else  {
        return (
            <div id="mobilePaying">
                <p>Mobile pay code:</p>
                <strong>755566</strong>
            </div>
        )
    }
    
}