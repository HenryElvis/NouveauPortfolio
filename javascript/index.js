"use strict";
var CMD = /** @class */ (function () {
    function CMD(inputId, outputId) {
        this.isCmdHide = true;
        this.result = '';
        this.inputElement = document.getElementById(inputId);
        this.outputElement = document.getElementById(outputId);
    }
    CMD.prototype.focusInput = function () {
        this.inputElement.focus();
    };
    CMD.prototype.showPrompt = function () {
        this.inputElement.value = "";
        this.focusInput();
    };
    CMD.prototype.runCommand = function (command) {
        switch (command) {
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
                this.result = "Output:\n" + "Commande inconnue : ".concat(command, ". Tapez 'help' pour afficher la liste des commandes disponibles.");
                this.writeOutput("Commande inconnue : ".concat(command, ". Tapez 'help' pour afficher la liste des commandes disponibles."));
        }
    };
    CMD.prototype.clearCommand = function () {
        this.inputElement.value = '';
        this.outputElement.textContent = '';
        this.result = '';
    };
    CMD.prototype.writeOutput = function (message) {
        var p = document.createElement("p");
        p.innerText = message;
        this.outputElement.appendChild(p);
    };
    return CMD;
}());
var cmd = new CMD("input", "output");
this.addEventListener("keydown", function (e) {
    if (cmd.isCmdHide)
        return;
    if (e.key === "Enter") {
        var command = cmd.inputElement.value;
        cmd.clearCommand();
        cmd.runCommand(command);
        cmd.showPrompt();
    }
});
var cmdContainer = document.getElementById("terminal");
var cmdButton = document.getElementById("cmd-toggle-btn");
cmdButton.addEventListener("click", function () {
    cmdContainer.classList.toggle("hidden");
    cmd.isCmdHide = !cmd.isCmdHide;
    if (cmd.isCmdHide) {
        cmd.inputElement.blur();
    }
    else {
        cmd.clearCommand();
        cmd.focusInput();
    }
});
cmdContainer.addEventListener("click", function () {
    cmd.focusInput();
});
var titleAnim = document.getElementById("titleAnim");
window.addEventListener("blur", function () {
    titleAnim.style.animationPlayState = "paused";
});
window.addEventListener("focus", function () {
    titleAnim.style.animationPlayState = "running";
});
