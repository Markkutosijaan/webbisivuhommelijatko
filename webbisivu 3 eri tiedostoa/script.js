document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contactForm");
  const formFeedback = document.getElementById("formFeedback");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      
      formFeedback.textContent = "Kiitos yhteyden otosta kissat vastaavat viestiisi mahdollisimman pian.";
      formFeedback.style.color = "green";

      contactForm.reset();
    } else {
      formFeedback.textContent = "Täytä kaikki kentät ennen lähettämistä!.";
      formFeedback.style.color = "red";
    }
  });
}); 

//voi olla että opettajan koodia hieman lainattu mutta parhaani yritin kiisujen verkkosivuun!