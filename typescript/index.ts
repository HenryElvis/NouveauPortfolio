interface CommandsList {
  [key: string]: string;
}

class CMD {
    public inputElement: HTMLInputElement;
    public isCmdHide = true;
    private outputElement: HTMLDivElement;

    private commands: CommandsList = 
    {
      help: 'help - affiche cette aide \n contact - affiche mes informations de contact',
      clear: "",
      contact: "contact - affiche mes informations de contact",
      "contact -email": "elvishenry2402@gmail.com",
      "contact -telephone": "07 68 94 94 89",
      "adresse": "Place du marché, 92200 Neuilly-sur-Seine",
    };

    constructor(inputId: string, outputId: string) 
    {
      this.inputElement = document.getElementById(inputId) as HTMLInputElement;
      this.outputElement = document.getElementById(outputId) as HTMLDivElement;
    }

    public focusInput()
    {
        this.inputElement.focus();
    }

    public showPrompt() 
    {
      this.inputElement.value = "";
      this.focusInput();
    }
    
    public runCommand(command: string) 
    {
      if (command in this.commands) 
      {
        if (command == "clear")
          this.clearCommand();
        else
          this.writeOutput(this.commands[command]);
      }
      else
        this.writeOutput(`Commande inconnue : ${command}. Tapez 'help' pour afficher la liste des commandes disponibles.`);
    }

    public clearCommand() 
    {
      this.inputElement.value = '';
      this.outputElement.textContent = '';
    }
    
    private writeOutput(message: string) 
    {
      const p = document.createElement("p");
      p.innerText = message;
      this.outputElement.appendChild(p);
    }
  }

const cmd = new CMD("input", "output");
  
this.addEventListener("keydown", (e) => 
{
  if (cmd.isCmdHide) return;

  if (e.key === "Enter") 
  {
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
    cmdContainer.scrollIntoView({behavior: "smooth"});
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