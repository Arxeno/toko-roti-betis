class Card extends HTMLElement {
  render() {
    this.innerHTML = `<img src={imgLink}></img>
      <h2>Roti</h2>
      <p>Ini roti</p>
      <p>Exp 1-01-2023</p>
      <button>Edit</button>
      <button>Delete</button>`;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("card-div", Card);
