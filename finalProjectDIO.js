// hero class definition
class hero{
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
        this.attack = this.heroAttack(type) // define attack during hero creation
    }
    // method to define hero attack type
    heroAttack(type) {
        if(type === "mage") {
            return "a spell"
        } else if(type === "warrior") {
            return "a sword"
        } else if(type === "monk") {
            return "martial arts"
        } else if(type === "ninja") {
            return "a shuriken"
        } else{
            return "invalid hero job"
        }
    }
    // hero attack message
    heroToString() {
        console.log(`the ${this.type} attacked using ${this.attack}`)
    }
}

let createHeroMage = new hero("Webston", 24, "mage")
let createHeroWarrior = new hero("Webston", 24, "warrior")
let createHeroMonk = new hero("Webston", 24, "monk")
let createHeroNinja = new hero("Webston", 24, "ninja")

createHeroMage.heroToString()
createHeroWarrior.heroToString()
createHeroMonk.heroToString()
createHeroNinja.heroToString()