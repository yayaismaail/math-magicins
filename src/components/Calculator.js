import './Calculator.css';

function Calculator() {
  return (
    <div id="Calcu">
      <div className="rowA Display">011</div>
      <div className="rowB">
        <button type="button" className="Calc-button">AC</button>
        <button type="button" className="Calc-button">+/-</button>
        <button type="button" className="Calc-button">&#37;</button>
        <button type="button" className="Calc-button Calcu-operator">&#247;</button>
      </div>
      <div className="rowC">
        <button type="button" className="Calc-button">7</button>
        <button type="button" className="Calc-button">8</button>
        <button type="button" className="Calc-button">9</button>
        <button type="button" className="Calc-button Calcu-operator">&#215;</button>
      </div>
      <div className="rowD">
        <button type="button" className="Calc-button">4</button>
        <button type="button" className="Calc-button">5</button>
        <button type="button" className="Calc-button">6</button>
        <button type="button" className="Calc-button Calcu-operator">&minus;</button>
      </div>
      <div className="rowE">
        <button type="button" className="Calc-button">1</button>
        <button type="button" className="Calc-button">2</button>
        <button type="button" className="Calc-button">3</button>
        <button type="button" className="Calc-button Calcu-operator">+</button>
      </div>
      <div className="rowF">
        <button type="button" className="Calc-button-zero">&#48;</button>
        <button type="button" className="Calc-button">&middot;</button>
        <button type="button" className="Calc-button Calcu-operator">&#61;</button>
      </div>
    </div>
  );
}

export default Calculator;
