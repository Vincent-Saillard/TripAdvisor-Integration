document.addEventListener("DOMContentLoaded", () => {
  console.log("content loaded");

  // Au clic sur le bouton "connectez-vous"

  document.querySelector("#connect").addEventListener("click", () => {
    console.log("click connect");
    // cibler la modal et changer le display mode en flex, empecher le scroll
    document.querySelector(".modal").classList.remove("none");
    document.querySelector(".modal").classList.add("flex");
    document.querySelector("body").classList.add("fixed");
  });

  // Au clic sur la croix de la modal

  document.querySelector("#close").addEventListener("click", () => {
    console.log("click close modal");
    // cibler la modal et changer le display mode en none, activer le scroll
    document.querySelector(".modal").classList.remove("flex");
    document.querySelector(".modal").classList.add("none");
    document.querySelector("body").classList.remove("fixed");
  });

  // A la soumission du formulaire

  document.querySelector("form").addEventListener("submit", async (event) => {
    console.log("form submit");
    event.preventDefault();

    // Récupération de inputs
    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    // Requête au back local
    const response = await axios.post("http://localhost:3000/form", {
      firstname,
      lastname,
      email,
      message,
    });

    console.log(response);
  });
});
