class Blog {
  constructor() {
    console.log('Blog Start');
    const dataURL = "http://localhost:3000/api"
    this.setInitData(dataURL);
  }

  setInitData(dataURL) {
    this.getData(dataURL, this.insertPosts);
  }

  getData(dataURL, fn) {
    const oReq = new XMLHttpRequest();

    oReq.addEventListener('load', () => {
      const list = JSON.parse(oReq.responseText);

      const listBeears = list.beers;
      fn(listBeears);
    });

    oReq.open('GET',dataURL);
    oReq.send();
  }

  insertPosts(list) {
    const target = document.querySelector('.list ul');

    list.forEach(v => {
      target.innerHTML += `
        <li>${v.name}</li>
      `;
    });
  }
}

export default Blog;
