class HelloWorld extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log("Custom element added to page.");
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.innerHTML = `
    <style>
      :host {
        display: block;
        padding: 1rem;
        border-radius: 1rem;
        font-family: sans-serif;
        color: white;
        background: cornflowerblue;
      }
    </style>
    <p>Hello World!</p>
    `;
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed.`);
  }
}

customElements.define("ccx-hello-world", HelloWorld);
