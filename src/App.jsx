import './App.scss';

function App() {
  return (
    <div className='container'>
      <header>
        <div className="img"></div>
        <nav>
          <a href="#">Coffee house</a>
          <a href="#">Our coffee</a>
          <a href="#">For your pleasure</a>
        </nav>
        <h1>Our Coffee</h1>
      </header>
      <main>
        <div className="descriptin">
          <div className="img"></div>

          <div className="texts">
            <span>About our beans</span>
            <div className="bean_icon"></div>
            <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br /><br />

              Afraid at highly months do things on at. Situation recommend objection do intention
              so questions.<br />
              As greatly removed calling pleased improve an. Last ask him cold feel <br />
              met spot shy want. Children me laughing we prospect answered followed. At it went
              is song that held help face.</p>
          </div>
        </div>
        <div className="looking_for">
          <div className="left">
            <form action="">
              <p>Lookiing for</p>
              <input type="text" placeholder='start typing here...' />
            </form>
          </div>
          <div className="right">
            <p>Or filter</p>
            <button>Brazil</button>
            <button>Kenya</button>
            <button>Columbia</button>
          </div>

        </div>
        <div className="cards">
          <div className="card">
            <div className="card_img"></div>
            <span>AROMISTICO Coffee 1 kg</span>
            <p>Brazil</p>
            <p>6.99$</p>
          </div>
          <div className="card">
            <div className="card_img"></div>
            <span>AROMISTICO Coffee 1 kg</span>
            <p>Brazil</p>
            <p>6.99$</p>
          </div>
          <div className="card">
            <div className="card_img"></div>
            <span>AROMISTICO Coffee 1 kg</span>
            <p>Brazil</p>
            <p>6.99$</p>
          </div>
          <div className="card">
            <div className="card_img"></div>
            <span>AROMISTICO Coffee 1 kg</span>
            <p>Brazil</p>
            <p>6.99$</p>
          </div>
          <div className="card">
            <div className="card_img"></div>
            <span>AROMISTICO Coffee 1 kg</span>
            <p>Brazil</p>
            <p>6.99$</p>
          </div>
          <div className="card">
            <div className="card_img"></div>
            <span>AROMISTICO Coffee 1 kg</span>
            <p>Brazil</p>
            <p>6.99$</p>
          </div>
        </div>

      </main>
      <footer>
        <div className="img"></div>
        <nav>
          <a href="#">Coffee house</a>
          <a href="#">Our coffee</a>
          <a href="#">For your pleasure</a>
        </nav>

      </footer>
        <div className="foot_img"></div>
    </div>
  );
}

export default App;
