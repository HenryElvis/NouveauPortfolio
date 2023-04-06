class CMD {
    public inputElement: HTMLInputElement;
    public isCmdHide = true;
    private outputElement: HTMLDivElement;
    private result: string = '';

    constructor(inputId: string, outputId: string) {
      this.inputElement = document.getElementById(inputId) as HTMLInputElement;
      this.outputElement = document.getElementById(outputId) as HTMLDivElement;
    }
    
    public focusInput()
    {
        this.inputElement.focus();
    }

    public showPrompt() {
      this.inputElement.value = "";
      this.focusInput();
    }
    
    public runCommand(command: string) {
      switch(command) {
        case "help":
            this.result = "Output:\n" + "Liste des commandes disponibles : \n help - affiche cette aide \n contact - affiche mes informations de contact";
          this.writeOutput("Liste des commandes disponibles : \n help - affiche cette aide \n contact - affiche mes informations de contact \n clear - efface l'écran");
          break;
        case "contact":
            this.result = "Output:\n" + "Email :";
          this.writeOutput("Email : elvishenry2402@gmail.com \n Téléphone : 07 68 94 94 89");
          break;
        case "clear":
            this.clearCommand();
            break;
        default:
            this.result = "Output:\n" + `Commande inconnue : ${command}. Tapez 'help' pour afficher la liste des commandes disponibles.`;
          this.writeOutput(`Commande inconnue : ${command}. Tapez 'help' pour afficher la liste des commandes disponibles.`);
      }
    }

    public clearCommand() {
        this.inputElement.value = '';
        this.outputElement.textContent = '';
        this.result = '';
      }
    
    private writeOutput(message: string) {
      const p = document.createElement("p");
      p.innerText = message;
      this.outputElement.appendChild(p);
    }
  }

const cmd = new CMD("input", "output");
  
this.addEventListener("keydown", (e) => 
{
  if (cmd.isCmdHide) return;

  if (e.key === "Enter") {
    const command = cmd.inputElement.value;
    cmd.clearCommand();
    cmd.runCommand(command);
    cmd.showPrompt();
  }
});

const cmdContainer = document.getElementById("terminal")!;
const cmdButton = document.getElementById("cmd-toggle-btn")!;

cmdButton.addEventListener("click", () => 
{
  cmdContainer.classList.toggle("hidden");
  cmd.isCmdHide = !cmd.isCmdHide;

  if (cmd.isCmdHide)
  {
    cmd.inputElement.blur();
  }
  else
  {
    cmd.clearCommand();
    cmd.focusInput();
  }
});

cmdContainer.addEventListener("click", () => 
{
  cmd.focusInput();
});

const titleAnim = document.getElementById("titleAnim")!;

window.addEventListener("blur", () => 
{
  titleAnim.style.animationPlayState = "paused";
});

window.addEventListener("focus", () => 
{
  titleAnim.style.animationPlayState = "running";
});