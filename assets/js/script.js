// add a click event listener on the form submit button

//document.getElementById("comment-submit").addEventListener("click", preventDefault);

const button = document.getElementById("comment-submit");
let info = document.getElementById('comment-content');
let autre = document.getElementById('comment-username')

function preventDefault(e) {
    //console.log("L'élément #" + e.currentTarget.id + " a reçu un événement " + e.type);
    e.preventDefault();
    //  console.log(autre.value)
    //  console.log(info.value)

    let info = document.getElementById('comment-content').value;
    let autre = document.getElementById('comment-username').value;

    let ul = document.querySelector('#comments-list');

    let li = document.createElement("li");
    let h5 = document.createElement("h5");
    let h6 = document.createElement("h6");
    let message = document.createElement("p");
    let date = new Date();

    // let addMessage = document.createElement(info);
    // let name = document.createElement(autre);

    h5.append(autre);
    li.append(h5);
    h6.append(date.toLocaleDateString('fr-FR'));
    li.append(h6);
    message.append(info);
    li.append(info);
    ul.append(li);


}

button.addEventListener("click", preventDefault);




// don't forget to "prevent" the form from being sent

// create a new comment with the user name, the current date (french format: dd/mm/yyyy)

// new comments must have the same HTML structure as existing comments.