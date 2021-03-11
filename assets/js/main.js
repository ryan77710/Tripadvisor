const $ = document;
$.addEventListener("DOMContentLoaded", () => {
  console.log("page loaded");

  $.addEventListener("click", () => {});
  $.querySelector("#button-header").addEventListener("click", () => {
    console.log("ok");
    $.querySelector(".modal-box").classList.toggle("display");
  });
  $.querySelector("#close").addEventListener("click", () => {
    $.querySelector(".modal-box").classList.remove("display");
  });
  $.querySelector("#contact").addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = {
      firstName: $.querySelector("#first-name").value,
      lastName: $.querySelector("#Name").value,
      email: $.querySelector("#Email").value,
      password: $.querySelector("#Password").value,
      detail: $.querySelector("#detail").value,
    };
    // console.log("data => ", data);

    if (
      data.firstName === "" ||
      data.lastName === "" ||
      data.email === "" ||
      data.password === ""
    ) {
      const str = "you must complete all thes fields";
      return console.log(str);
    } else {
      try {
        console.log("on envoie =>", data);
        const response = await axios.post("http://localhost:3000/form", data);
      } catch (error) {
        console.log(error);
      }
    }
  });
});
