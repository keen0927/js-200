class Blog {
  constructor() {
    console.log('Blog Start');
    this.registerEvents();
    this.likedSet = new Set();
  }

  registerEvents() {
    const startButton = document.querySelector('.start');
    const dataURL = "http://localhost:3000/api";

    const blogList = document.querySelector('.list > ul');
    startButton.addEventListener('click', () => {
      this.setInitData(dataURL);
    });

    blogList.addEventListener('click',({target}) => {
      const targetClassName = target.className;
      console.log(targetClassName);
      if (targetClassName !== "like") return;
      const postTitle = target.previousElementSibling.textContent;
      this.likedSet.add(postTitle);
      console.log(this.likedSet);
    });
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
        <li>
          <a href="#"> ${v.name}</a>
          <div class="like">찜하기</div>
        </li>
      `;
    });
  }
}

export default Blog;
