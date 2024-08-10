const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
<<<<<<< HEAD
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

=======
=======
>>>>>>> 6397c045a0407241223db5b5657ac5ece2a10106
>>>>>>> Stashed changes
  <div class="post">
    <div class="post-date">
      投稿日時：${item.created_at}
    </div>
    <div class="post-content">
      ${item.content}
    </div>
  </div>`;
  return html;
};



<<<<<<< Updated upstream
=======
<<<<<<< HEAD
>>>>>>> 6397c045a0407241223db5b5657ac5ece2a10106
=======
>>>>>>> 6397c045a0407241223db5b5657ac5ece2a10106
>>>>>>> Stashed changes
function post() {
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
<<<<<<< HEAD
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
=======
=======
>>>>>>> 6397c045a0407241223db5b5657ac5ece2a10106
>>>>>>> Stashed changes
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");

      list.insertAdjacentHTML("afterend", html);
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
>>>>>>> 6397c045a0407241223db5b5657ac5ece2a10106
=======
>>>>>>> 6397c045a0407241223db5b5657ac5ece2a10106
>>>>>>> Stashed changes
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
};

window.addEventListener('turbo:load', post);
