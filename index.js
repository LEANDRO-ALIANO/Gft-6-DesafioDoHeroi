let name = "Aragorn"
let experience = 11000
let level = ""

if(experience < 1000){
    level = "Ferro"
}else if (experience > 1000 && experience <=2000){
    level="Bronze"
}else if (experience > 2000 && experience <=5000){
    level="Prata"
}else if (experience > 5000 && experience <=7000){
    level="Ouro"
}else if (experience > 7000 && experience <=8000){
    level="Platina"
}else if (experience > 8000 && experience <=9000){
    level="Ascendente"
}else if (experience > 9000 && experience <=10000){
    level="Imortal"
}else{
    level="Radiante"
}

console.log("O Herói de nome " +name+" está no nível de "+level)