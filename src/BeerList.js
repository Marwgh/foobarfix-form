import Beer from './Beer';

export default function BeerList(props) {

  
  const onAdd = props.onAdd;
  const onRemove =props.onRemove;
  const openModal = props.openModal;

props.validBeers.forEach(elements => { elements.beer =  elements.beer.replaceAll(" ", "") });

props.beers.forEach( item => {
  props.validBeers.forEach((x) => {
  if (item.name === x.beer) {  
    item.validity = true;
    
  }else{
    if(!item.validity){
      item.validity = "notinStock";
    }else{
      console.log("allreday in here");
    }

  }})
});



  return (
  <div className="mainS">
    <section className="beerbox">
      {props.beers.map(items => <Beer  setInfoSelected={props.setInfoSelected} openModal={openModal} {...items} key={items.key} onAdd={onAdd} onRemove={onRemove}/>)}
    </section>
</div>);

}
