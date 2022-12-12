var btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var body = "name: " + name + "<br/> email: " + email + "<br/> subject: " + subject + "<br/> message: " + message;

  Email.send({
    SecureToken: "1b2c2f64-49e0-4924-94b7-3c62ad4c5eb7",
    To: "farelskasenda88@gmail.com",
    From: email,
    Subject: subject,
    Body: body,
  }).then((message) => alert(message));
});
