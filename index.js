let heroi = [
    ["HeroName", 10001]
]

let nivel = " "
if (heroi[0][1] <= 1000) {
    nivel = "Ferro"
}else if (heroi[0][1] <= 2000) {
    nivel = "Bronze"
}else if (heroi[0][1] <= 5000) {
    nivel = "Prata"
}else if (heroi[0][1] <= 7000) {
    nivel = "Ouro"
}else if (heroi[0][1] <= 8000) {
    nivel = "Platina"
}else if (heroi[0][1] <= 9000) {
    nivel = "Ascendente"
}else if (heroi[0][1] <= 10000) {
    nivel = "Imortal"
}else if (heroi[0][1] > 10000) {
    nivel = "Radiante"
}


console.log("O Herói de nome "  + heroi[0][0] + " está no nível de " + nivel)