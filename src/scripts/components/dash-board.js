class dashBoard extends HTMLElement {
  render() {
    this.innerHTML = `<nav>Selamat Datang User!</nav>
    <section id="main-container">
      <h1>Daftar Roti</h1>
      <div id="cards-container"></div>
    </section>`;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("dash-board", dashBoard);
