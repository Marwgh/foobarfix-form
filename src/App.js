import './App.css';
import {useState ,useEffect} from "react";


// import Ordering from "./Ordering";
import BeerList from './BeerList';
import Payment from "./Payment";
import Tables from "./Tables";
import Basket from './Basket';
import Welcome from './Welcome';
import Modal from "./Modal";


function App() {

const beers = [ {id:"1", name:'HoppilyEverAfter', price: 20, key:"1" }, {id:"2", name:'Row26', price: 40, key:"2"}, {id:"3", name:'GitHop', price: 20, key:"3"}, {id:"4", name: 'Sleighride', price:20, key:"4"}, {id:"5", name:'Mowintime', price:30, key:"5"}, {id:"6", name:'ElHefe', price: 40, key:"6"}, {id:"7", name:'FairyTaleAle', price:20, key:"7"}, {id:"8", name:'HollabackLager', price: 30, key:"8"}, {id:"9", name:'RuinedChildhood', price: 30, key:"9"},{ id:"10", name:"Steampunk", price: 30, key:"10" }];

const [validBeers,setValidBeers] = useState([]);
useEffect(() => {
  fetch("https://beer-bar.herokuapp.com/")
  .then((res) => res.json())
  .then((data) => {
    setValidBeers(data.taps);
  });
} ,[]);
console.log(validBeers);
const [cartItems, setCartItems] = useState([]);
const [amount, setAmount] = useState(1);
const [readM , setReadM] = useState("");
const [info, setInfos] = useState([]);
const [infoSelected, setInfoSelected] = useState();
const [selectedT ,setSelectedT] = useState(null);
const [totalPrice  ,setTotalPrice] =useState("");
const [extras , setExtras] = useState("");


// ADD PRODUCTS ON CART ADD PRODUCTS ON CART ADD PRODUCTS ON CART ADD PRODUCTS ON CART ADD PRODUCTS ON CART ADD PRODUCTS ON CART

const onAdd = (beer) => {
  console.log(beer,cartItems);
  if (cartItems.findIndex((x) => x.id === beer.id) === -1) {
    const newcartItems = {...beer};
    newcartItems.amount = 1 ;
    setCartItems((newProd) => [...newProd, newcartItems]);
    console.log("not found");   
  } else{
    const newItem = cartItems.map((item) => {
       if (item.id === beer.id ) {
          item.amount += 1;
        }
         return (
          item
       )
     });
     setCartItems(newItem);
  }
  console.log(cartItems);
}

// REMOVE PRODUCTS FROM CART REMOVE PRODUCTS FROM CART REMOVE PRODUCTS FROM CART REMOVE PRODUCTS FROM CART REMOVE PRODUCTS FROM CART REMOVE PRODUCTS FROM CART

const onRemove = (beer) => {
  console.log(beer,cartItems);
  if (cartItems.findIndex((x) => x.id === beer.id) ) {
    if(beer.amount === 1) {
      console.log('i have nothibg');
      setCartItems(cartItems.filter(item => item.id !== beer.id));
    }else{
    
    const newItem = cartItems.map((item) => {
      if (item.id === beer.id ) {
         item.amount -= 1;
       }
        return (
         item
      )
    });
    setCartItems(newItem);
  }
    
  } else{
    
    if (cartItems.findIndex((x) => x.id === beer.id) ) {
      console.log('yes');
    }else{
      console.log('no');
      if(beer.amount === 1) {
        console.log('i have nothibg');
        setCartItems(cartItems.filter(item => item.id !== beer.id));
      }else{
      const newItem = cartItems.map((item) => {
        if (item.id === beer.id ) {
           item.amount -= 1;
         }
          return (
           item
        )
      });
      setCartItems(newItem);
    }
  }
    
  }
  console.log(cartItems);
}

function Clicked() {
  setAmount((prevState) => {
    if (prevState===3){
      return prevState
    } else {
      return prevState+1
    }
   });
}

// function ClickedMinus() {
//   setAmount((prevState) => {
//     if (!prevState){
//       return prevState
//     } else {
//       return prevState-1
//     }
//    });
// }

// MODAL FUNCTIONS  MODAL FUNCTIONS  MODAL FUNCTIONS  MODAL FUNCTIONS  MODAL FUNCTIONS  MODAL FUNCTIONS  MODAL FUNCTIONS  MODAL FUNCTIONS  MODAL FUNCTIONS 

const modal = document.querySelector(".container");
function openModal(item) {
    setReadM(item.name);
    modal.style.display = 'block';
}
function closeModal() {
    modal.style.display = 'none';
}

// POPULATE MODAL  POPULATE MODAL  POPULATE MODAL  POPULATE MODAL  POPULATE MODAL  POPULATE MODAL  POPULATE MODAL  POPULATE MODAL  POPULATE MODAL 
useEffect(() => {
  fetch("https://beer-bar.herokuapp.com/beertypes")
  .then((res) => res.json())
  .then((data) => {
    setInfos(data);
  });
} ,[]);

//Sending info to the data base

function dataSending (name) {
  const form = document.querySelector("form");
  console.log(form.elements);
  post({
      table_id: selectedT,
      beers: cartItems,
      extra_info:extras,
      card_name:name

  });
}
function post(data) {
const postData = JSON.stringify(data);
        fetch("https://foobar-1293.restdb.io/rest/foormidable", {
          method: "post",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": "60a4dea0e3b6e02545edaa5d",
            "cache-control": "no-cache",
          },
          body: postData,
        })
          .then((res) => res.json())
          .then((data) => {console.log(data);window.location.reload()});
  }
// MAIN RETURN FROM APP  MAIN RETURN FROM APP  MAIN RETURN FROM APP  MAIN RETURN FROM APP  MAIN RETURN FROM APP 
  return (
    <div className="App">

      <Template  validBeers={validBeers} setInfoSelected={setInfoSelected} amount={amount} beers={beers} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}  openModal={openModal} />
      <Form extras={extras} setExtras={setExtras}  dataSending={ dataSending}  totalPrice={totalPrice} setTotalPrice={setTotalPrice} selectedT={selectedT} setSelectedT={setSelectedT} openModal={openModal} amount={amount} beers={beers} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} Clicked={Clicked}  />
      <Modal readM={readM} info = {info} closeModal={closeModal} infoSelected={infoSelected} /> 

    </div>
  );

}

export default App;




function Template(props) {

  if (props.amount === 1) {
    return (
      <div>
        <Welcome />
      </div>
      )
  }else if (props.amount === 2){
    const onAdd = props.onAdd;
    const onRemove = props.onRemove;
    const openModal = props.openModal;
    const setInfoSelected = props.setInfoSelected ;

    return(
      <div>
        <BeerList validBeers={props.validBeers}  setInfoSelected={setInfoSelected} openModal={openModal} onAdd ={onAdd} onRemove = {onRemove} beers = {props.beers} /> 
      </div>      
    )
  }else{
    if (!window.matchMedia("(max-width: 749px)").matches) {
      return(
        <div>
          <Welcome />
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }
}




function Form (props) {

  return(
    <section className="base">
      <div className="box">
        <form>
          <Fieldset  amount={props.amount} dataSending={ props.dataSending} extras={props.extras} setExtras={props.setExtras} totalPrice={props.totalPrice} setTotalPrice={props.setTotalPrice} onAdd={props.onAdd} onRemove={props.onRemove} selectedT={props.selectedT} setSelectedT={props.setSelectedT} Clicked={props.Clicked} cartItems={props.cartItems} />
        </form>
      </div>
    </section>
  )
}




function Fieldset (props) {
  function checkValidityPart1() {
    const tableChoice = document.querySelectorAll(".tableChoice");
    let validity = "";

    tableChoice.forEach (t => {
      if (t.checked) {
        validity = true;
      }
    })

    if (validity) {
      console.log("Valid - Proceed with order");
      props.Clicked();
      // document.querySelector("#tableER").classList.add(".hide");
    } else {
      console.log("Invalid");
      document.querySelector("#tableER").classList.remove("hideER");
    }
  }
  
  function CheckValidityPart2() {
    let validity = "";
    const cartItems = props.cartItems;
    
    if (cartItems[0]) {
        validity = true;
      }else{
        console.log("no");
      }
    

    if (validity) {
      console.log("Valid - Payment");
      props.Clicked();
    } else {
      console.log("Invalid");
      document.querySelector("#basketER").classList.remove("hideER");
    }
  }
  
  function CheckValidityPart3() {
    const form = document.querySelector("form");
    let validity = form.checkValidity();
    const creditcardins =document.querySelector("#card-number").value
    const dateins =document.querySelector("#card-expiry").value
    const cvcins =document.querySelector("#cvc").value
    //let validity2 = creditcardins.checkValidity();
    console.log(form.elements.cardname.value);

    

    if (validity) {
      if(creditcardins.length < 15){
        console.log("Invalid");
      }else{
        if(dateins.length < 4){
          console.log("Invalid");
        }else{
          if(cvcins.length < 3){
            console.log("Invalid");
          }else{
            console.log("Valid - Pay"); 
          props.dataSending(form.elements.cardname.value);
          const thanksScreen = document.createElement("div");
          const thanksText = document.createElement("p");
          thanksText.textContent = "Thank you for ordering!";
          thanksScreen.classList.add("thankYou");
          thanksScreen.appendChild(thanksText);
          document.querySelector("body").appendChild(thanksScreen);
          }
        }
      }
      
    } else {
     
      console.log("Invalid");
      document.querySelector("#paymentER").classList.remove("hideER");
    }
  } 




  const cartItems = props.cartItems;
  if (props.amount === 1) {
    return (
      <div>
        <Tables phoneClass={"phoneTable"} selectedT={props.selectedT} setSelectedT={props.setSelectedT} />
        <span className="hideER" id="tableER">*please select a table first</span>
        <button onClick={checkValidityPart1} type="button" className="Button">Next</button>
      </div>
      )
  }else if (props.amount === 2){
    
    const onAdd = props.onAdd;
    const onRemove = props.onRemove;

    return(
        <div>
          <Basket  setExtras={props.setExtras} setTotalPrice={props.setTotalPrice} onAdd ={onAdd} onRemove= {onRemove} cartItems={cartItems}/>
            {/* <Ordering /> */}
          <button onClick={CheckValidityPart2} type="button" className="Button">Payment</button>
          <span className="hideER" id="basketER">*please add an item to your cart</span>
        </div>
    )
  }else{
    return( 
      <div>
        <Payment  extras={props.extras} totalPrice={props.totalPrice} cartItems={cartItems} />
        <span className="hideER" id="paymentER">*incorrect payment information inserted</span>
        <button type="button" className="Button" onClick={CheckValidityPart3}>Pay</button>
      </div>
    )
  }

}
