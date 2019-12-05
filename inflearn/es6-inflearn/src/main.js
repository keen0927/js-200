class Blog {
  constructor() {
    console.log('Blog Start');
    this.setVariable();
    this.registerEvents();
    this.likedSet = new Set();
  }

  setVariable() {
    this.blogList = document.querySelector('.list > ul');
  }

  registerEvents() {
    const startButton = document.querySelector('.start');
    const dataURL = "http://localhost:3000/api";

    
    startButton.addEventListener('click', () => {
      this.setInitData(dataURL);
    });

    this.blogList.addEventListener('click',({target}) => {
      const targetClassName = target.className;
      const postTitle = target.previousElementSibling.textContent;

      if (targetClassName === "like") {

        target.className = 'unlike';
        target.innerHTML = '노찜';
        this.likedSet.add(postTitle);
        console.log(this.likedSet);
      } else {
        target.className = 'like';
        target.innerHTML = '찜하기';
        console.log(postTitle);
        this.likedSet.delete(postTitle);
        console.log(this.likedSet);
      }

      this.updateLikedList();
    });
  }

  updateLikedList() {
    const target = document.querySelector('.like-list');
    let likedState = "";

    this.likedSet.forEach(v => {
      likedState += `<li>${v}</li>`;
      console.log(`likedState : ${likedState}`);
    });

    target.innerHTML = likedState;

  }

  setInitData(dataURL) {
    this.getData(dataURL, this.insertPosts.bind(this));
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
    list.forEach(v => {
      // debugger;
      this.blogList.innerHTML += `
        <li>
          <a href="#"> ${v.name}</a>
          <div class="like">찜하기</div>
        </li>
      `;
    });
  }
}

export default Blog;
