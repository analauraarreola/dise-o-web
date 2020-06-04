console.log('Hola mundo');
   
const menu = document.querySelector('.menu');
console.log (menu);
const burgerButton = document.querySelector ('#burger');
console.log (burgerButton);

burgerButton.addEventListener('click', hideShow)

function hideShow (){
if (menu.classList.contains('is-active')){
menu.classList.remove('is-active');
} else {
menu.classList.add('is-active');
}
}
renderResponses();

  function UserAction() {
    var input = document.getElementById('my-inpyt').value
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 201) {
            var response = JSON.parse(this.responseText);
            localStorage.setItem(response.hashid, this.response)
            renderResponses();
         } else if (this.readyState == 4 && this.status != 201) {
           document.getElementById('my-inpyt').style.border = "1px solid red";
           document.getElementsByClassName('error')[0].style.display = "block";
         }
    };

    xhttp.open('POST', 'https://rel.ink/api/links/', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify({url : input}))
  }

  function renderResponses() {
    var elements = document.querySelectorAll('.test');  
    for (var element of elements) {
      element.remove();
    }

    for (var value in localStorage) {
      var object = JSON.parse(localStorage.getItem(value))
      var shortenLink = "https://rel.ink/" + object.hashid;
      document.getElementsByClassName('info-statistics')[0].insertAdjacentHTML('afterbegin', `<div class='test'> \
                                                                                                <p>${object.url}/p>\
                                                                                                <div class='shorten-links'>\
                                                                                                <a>${shortenLink}</a> \
                                                                                                <button>Copy</button> </div> \
                                                                                              </div>`);
    }
  }

  function clearError() {
    document.getElementsByClassName('error')[0].style.display = "none";
    document.getElementById('my-inpyt').style.border = "none";
  }
