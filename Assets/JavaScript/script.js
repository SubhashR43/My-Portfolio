//Access of form in JS
const form = document.querySelector("#contactForm");

//Detect submit on form
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#e-mail").value,
    number: document.querySelector("#number").value,
    comment: document.querySelector("#comment").value,
  };

  //Try or catch for dtect error
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbw4uaKws0eZ3imcNvAyDLOT2IBlIov67mx_y0J4WVut_dxj8cKUk8xM6yxJITavCY1dvQ/exec",
      {
        method: "POST",
        body: JSON.stringify(data),
      },
    );

    const result = await response.text();
    alert("Data submit successfully!");
    form.reset();
  } catch (error) {
    console.log(error);
    alert("Failed to sent data try Agin!");
  }
});
