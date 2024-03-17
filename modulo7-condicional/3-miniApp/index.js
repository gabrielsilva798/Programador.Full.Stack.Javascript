let departureDateEntry = prompt("Digite a data de partida: (formata DD/MM/YYYY");

let departDate = moment(departureDateEntry, "DD/MM/YYYY");

let today = moment()

let dateDiff = today - departDate;

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida:\n1- Segundos"+
    "\n2- Mínuto\n3- Doras\n4- Dias")

if(chosenOption == 1) {
    let secondOfDepature = Math.round(dateDiff / 1000);
    alert("Tempo de vôo: " + secondOfDepature + " segundos")
} else if(chosenOption == 2) {
    let minutesOfDepature = Math.round(dateDiff / 1000 / 60);
    alert("Tempo de vôo: " + minutesOfDepature + " minutos")
} else if(chosenOption == 3) {
    let hoursOfDepature = Math.round(dateDiff / 1000 / 60 / 60);
    alert("Tempo de vôo: " + hoursOfDepature + " horas")
} else if(chosenOption == 4) {
    let daysOfDepature = Math.round(dateDiff / 1000 / 60 / 60 / 24);
    alert("Tempo de vôo: " + daysOfDepature + " dias")
} else {
    alert("Opição inválida.")
}