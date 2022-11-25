export default class DoorModel{
    #number:number
    #hasGift:boolean
    #selected:boolean
    #isOpen:boolean

    constructor(number:number, hasGift=false, selected = false, isOpen=false){
        this.#number = number
        this.#hasGift = hasGift
        this.#selected = selected
        this.#isOpen = isOpen
    }

    get number(){
        return this.#number
    }

    get hasGift(){
        return this.#hasGift
    }

    get selected(){
        return this.#selected
    }

    get isOpen(){
        return this.#isOpen
    }

    switchSelectedDoor(){
        const selected = !this.selected
        return new DoorModel (this.number, this.hasGift, selected, this.isOpen)
    }

    deselectDoor(){
        const selected = false
        return new DoorModel (this.number, this.hasGift, selected, this.isOpen)
    }

    openDoor(){
        const isOpen = true
        return new DoorModel(this.number, this.hasGift, this.selected, isOpen)
    }

    
}
