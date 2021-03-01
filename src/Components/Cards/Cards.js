import PillBotton from "./PillBotton";

function Cards() {
    return (
        <section className="Cards">
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div>
            <PillBotton text="Acción A" type="submit" click={(e) => { alert("Click A");}}></PillBotton>
            <PillBotton text="Acción B" type="submit" click={(e) => { alert("Click B");}}></PillBotton>   
            </div>
        </section>
    );
  }
  
  export default Cards;