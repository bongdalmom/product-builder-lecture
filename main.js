
class LottoNumbers extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.textContent = `
      .numbers {
          display: flex;
          gap: 10px;
      }
      .number {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          background-image: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          transition: transform 0.3s ease;
      }
      .number:hover {
        transform: scale(1.1);
      }
    `;
    const container = document.createElement('div');
    container.setAttribute('class', 'numbers');

    shadow.appendChild(style);
    shadow.appendChild(container);
  }

  set numbers(numbers) {
    const container = this.shadowRoot.querySelector('.numbers');
    container.innerHTML = '';
    for (const number of numbers) {
        const numberEl = document.createElement('div');
        numberEl.setAttribute('class', 'number');
        numberEl.textContent = number;
        container.appendChild(numberEl);
    }
  }
}

customElements.define('lotto-numbers', LottoNumbers);

const generateBtn = document.getElementById('generate-btn');
const lottoNumbersEl = document.querySelector('lotto-numbers');

generateBtn.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    lottoNumbersEl.numbers = [...numbers].sort((a,b) => a-b);
});

// Initial generation
generateBtn.click();
