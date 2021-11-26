let messages = [
  {
    user: "Marian Kowalski",
    content: "tekst testowy",
  },
  {
    user: "Ja",
    content: "drugi tekst",
  },
];

function render() {
  let htmlFragment = "";

  for (let message of messages) {
    htmlFragment += `<div class="chat-message ${
      message.user === "Ja" ? "chat-self" : "chat-other"
    }">
            <p>${message.content}</p>
        </div>`;
  }

  let container = document.getElementById("chat-container");
  if (container == null) return;
  container.innerHTML = htmlFragment;
}

function sendMessage() {
  let input = document.getElementById("chat-input");
  if (input == null) return;
  if (!(input instanceof HTMLInputElement)) return;
  if (input.value === "") return;

  messages.push({
    user: "Ja",
    content: input.value,
  });

  input.value = "";
}

let form = document.getElementById("chat-form");
if (form == null) throw new Error("Button not found");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendMessage();
  render();
});

render();
// input.value
// button.addEventListener("click", () => {})
