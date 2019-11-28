class Blog {
  constructor() {
    console.log('Blog Start');
    const dataURL = "http://localhost:3000/api"
    this.setInitData(dataURL);
  }

  setInitData(dataURL) {
    this.getData(dataURL);
  }

  getData(dataURL) {
    const oReq = new XMLHttpRequest();

    oReq.addEventListener('load', () => {
      const list = JSON.parse(oReq.responseText);

      const listBeears = list.beers;

      listBeears.forEach( v => {
        console.log(v.name);
      })
    });

    oReq.open('GET',dataURL);
    oReq.send();
  }
}

export default Blog;
