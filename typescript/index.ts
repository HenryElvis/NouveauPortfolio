var age:String = "5";
var myName:String = "Elvis";
// alert(myName);

class CMD {
    public inputElement: HTMLInputElement;
    private outputElement: HTMLDivElement;
    private result: string = '';

    constructor(inputId: string, outputId: string) {
      this.inputElement = document.getElementById(inputId) as HTMLInputElement;
      this.outputElement = document.getElementById(outputId) as HTMLDivElement;
    }
    
    public showPrompt() {
      this.inputElement.value = "";
      this.inputElement.focus();
    }
    
    public runCommand(command: string) {
      switch(command) {
        case "help":
            this.result = "Output:\n" + "Liste des commandes disponibles : \n help - affiche cette aide \n contact - affiche mes informations de contact";
          this.writeOutput("Liste des commandes disponibles : \n help - affiche cette aide \n contact - affiche mes informations de contact");
          break;
        case "contact":
            this.result = "Output:\n" + "Email :";
          this.writeOutput("Email : contact@monportfolio.com \n Téléphone : 01 23 45 67 89");
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
  
this.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const command = cmd.inputElement.value;
      cmd.clearCommand();
      cmd.runCommand(command);
      cmd.showPrompt();
    }
  });

const titleAnim = document.getElementById("titleAnim")!;

window.addEventListener("blur", () => {
    titleAnim.style.animationPlayState = "paused";
});

window.addEventListener("focus", () => {
    titleAnim.style.animationPlayState = "running";
});