class PartnershipForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          margin-top: 50px;
          text-align: left;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 30px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
          max-width: 500px;
          margin: 0 auto;
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .field-group:has(input:focus, textarea:focus, select:focus) label {
          color: var(--btn-text);
          transform: translateX(5px);
        }

        label {
          font-size: 0.9rem;
          color: var(--text-color);
          font-weight: 600;
          transition: all 0.3s ease;
          opacity: 0.8;
        }

        input, textarea, select {
          padding: 12px 15px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-color);
          font-family: inherit;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
        }

        input:focus, textarea:focus, select:focus {
          background: rgba(255, 255, 255, 0.2);
          border-color: var(--btn-text);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
        }

        textarea {
          resize: vertical;
          min-height: 100px;
        }

        button {
          margin-top: 10px;
          padding: 15px;
          border-radius: 10px;
          border: none;
          background: var(--btn-bg);
          color: var(--btn-text);
          font-weight: bold;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
          filter: brightness(1.1);
        }

        button:active {
          transform: translateY(0);
        }

        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .message {
          padding: 15px;
          border-radius: 10px;
          font-size: 0.9rem;
          text-align: center;
          display: none;
        }

        .message.success {
          display: block;
          background: rgba(76, 175, 80, 0.2);
          color: #81c784;
          border: 1px solid rgba(76, 175, 80, 0.3);
        }

        .message.error {
          display: block;
          background: rgba(244, 67, 54, 0.2);
          color: #e57373;
          border: 1px solid rgba(244, 67, 54, 0.3);
        }

        h2 {
          text-align: center;
          margin-top: 0;
          color: var(--text-color);
          font-size: 1.8rem;
          text-shadow: var(--text-shadow);
        }

        option {
          background: #333;
          color: white;
        }
      </style>

      <form id="contact-form">
        <h2>제휴 문의</h2>
        <div id="status-message" class="message"></div>
        
        <div class="field-group">
          <label for="name">성함</label>
          <input type="text" id="name" name="name" placeholder="성함을 입력해주세요" required>
        </div>

        <div class="field-group">
          <label for="email">이메일 주소</label>
          <input type="email" id="email" name="_replyto" placeholder="email@company.com" required>
        </div>

        <div class="field-group">
          <label for="company">회사명</label>
          <input type="text" id="company" name="company" placeholder="회사명을 입력해주세요">
        </div>

        <div class="field-group">
          <label for="type">문의 유형</label>
          <select id="type" name="type">
            <option value="marketing">마케팅 협업</option>
            <option value="tech">기술 통합</option>
            <option value="content">콘텐츠 시너지</option>
            <option value="other">기타</option>
          </select>
        </div>

        <div class="field-group">
          <label for="message">문의 내용</label>
          <textarea id="message" name="message" placeholder="제안 내용을 상세히 적어주세요..." required></textarea>
        </div>

        <input type="hidden" name="_subject" value="새로운 제휴 문의가 접수되었습니다">
        
        <button type="submit" id="submit-btn">제안서 보내기</button>
      </form>
    `;

    this.setupForm();
  }

  setupForm() {
    const form = this.shadowRoot.getElementById('contact-form');
    const statusMsg = this.shadowRoot.getElementById('status-message');
    const submitBtn = this.shadowRoot.getElementById('submit-btn');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      submitBtn.disabled = true;
      submitBtn.textContent = '보내는 중...';
      statusMsg.className = 'message';
      statusMsg.textContent = '';

      try {
        // REPLACE 'your-id' with your actual Formspree ID
        const response = await fetch('https://formspree.io/f/mvzvgyrg', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          statusMsg.textContent = '감사합니다! 제안서가 성공적으로 접수되었습니다.';
          statusMsg.classList.add('success');
          form.reset();
        } else {
          const errorData = await response.json();
          throw new Error(errorData.error || '오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        }
      } catch (error) {
        statusMsg.textContent = error.message;
        statusMsg.classList.add('error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = '제안서 보내기';
      }
    });
  }
}

customElements.define('partnership-form', PartnershipForm);

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
