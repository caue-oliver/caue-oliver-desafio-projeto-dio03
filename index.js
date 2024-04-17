class hero{
    constructor(name,age,type){
        this.name=name
        this.age=age
        this.type=type
    }
    getHeroAttack(){
        this.attack
        switch (this.type) {
            case "guerreiro":this.attack="espada"
                break;
            case "mago":this.attack="magia"
                break;
            case "monge":this.attack="artes marciais"
                break;
            case "ninja":this.attack="shuriken"
                break;
            default: this.attack="und"
                break;
        }
        return this.attack
    }
    showHeroAttack(){
        console.log(`O ${this.type} atacou usando ${ this.attack}`)
    }
}
let character= new hero("cauê",18,"mago")
character.getHeroAttack()
character.showHeroAttack()
