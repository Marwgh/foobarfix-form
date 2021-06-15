export default function Welcome() {

function HideWelcome() {
  document.querySelector(".Welcome").style.display = "none";
}
    return (
      <article className="Welcome">
          <h1 className="WelcomeTitle">WELCOME TO FOOBAR!</h1>
          <p className="WelcomeText1">Hi! We are happy to have you over. Please use the form to order from the bar and one of our waiters will be with your desired beers shortly.</p>
          <p className="WelcomeText2">Due to COVID-19 we are currently not taking cash. Thank you for the understanding! Stay safe and foonky!</p>
          <button onClick={HideWelcome} type="button" className="WelcomeButton">Start Order</button>
      </article>
    );
  }