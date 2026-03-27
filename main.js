class ThemeToggle extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const button = document.createElement('button');
    button.setAttribute('aria-label', 'Toggle light/dark mode');
    button.textContent = '🌙';
    const style = document.createElement('style');
    style.textContent = `
      button {
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        font-size: 1.2rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        backdrop-filter: blur(5px);
      }
      button:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: scale(1.1);
      }
    `;
    shadow.appendChild(style);
    shadow.appendChild(button);

    const updateUI = (theme) => {
      button.textContent = theme === 'light' ? '☀️' : '🌙';
      button.style.background = theme === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.2)';
    };

    button.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateUI(newTheme);
    });

    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateUI(savedTheme);
  }
}

customElements.define('theme-toggle', ThemeToggle);

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
