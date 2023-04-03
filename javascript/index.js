"use strict";
var age = "5";
var myName = "Elvis";
// alert(myName);
var CMD = /** @class */ (function () {
    function CMD(inputId, outputId) {
        this.result = '';
        this.inputElement = document.getElementById(inputId);
        this.outputElement = document.getElementById(outputId);
    }
    CMD.prototype.showPrompt = function () {
        this.inputElement.value = "";
        this.inputElement.focus();
    };
    CMD.prototype.runCommand = function (command) {
        switch (command) {
            case "help":
                this.result = "Output:\n" + "Liste des commandes disponibles : \n help - affiche cette aide \n contact - affiche mes informations de contact";
                this.writeOutput("Liste des commandes disponibles : \n help - affiche cette aide \n contact - affiche mes informations de contact");
                break;
            case "contact":
                this.result = "Output:\n" + "Email :";
                this.writeOutput("Email : contact@monportfolio.com \n Téléphone : 01 23 45 67 89");
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
document.getElementById("submit").addEventListener("click", function () {
    var command = cmd.inputElement.value;
    cmd.clearCommand();
    cmd.runCommand(command);
    cmd.showPrompt();
});
