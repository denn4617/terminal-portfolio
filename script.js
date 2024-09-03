document.addEventListener("DOMContentLoaded", () => {
  const commands = {
    about:
      "This is the about section. Here you would put information about yourself.",
    projects:
      "This is the projects section. You can showcase your projects here.",
    skills: "This is the skills section. List your technical skills here.",
    contact:
      "This is the contact section. Provide your contact information here.",
  };

  const commandList = document.querySelectorAll(".command");
  const userInput = document.getElementById("user-input");
  const output = document.getElementById("output");

  // Handle command click
  commandList.forEach((command) => {
    command.addEventListener("click", () => {
      const commandText = command.getAttribute("data-command");
      executeCommand(commandText);
    });
  });

  // Handle command typing
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const commandText = userInput.value.trim();
      userInput.value = "";
      executeCommand(commandText);
    }
  });

  function executeCommand(commandText) {
    if (commands[commandText]) {
      output.innerHTML = commands[commandText];
    } else {
      output.innerHTML = `Command not found: ${commandText}`;
    }
  }
});
