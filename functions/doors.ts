import DoorModel from "../models/doorModel";

export function createDoors(qty:number, selected: number) : DoorModel[]{
    return Array.from({length: qty}, (_,i)=> {
        const number = i + 1;
        const hasGift = number === selected
        return new DoorModel(number, hasGift)
    })
}


export function updateDoors(doors: DoorModel[], updatedDoor: DoorModel) : DoorModel[]{
    return doors.map(actualDoor => {
        const equalModifyDoor = actualDoor.number === updatedDoor.number

        if(equalModifyDoor){
            return updatedDoor
        } else{
            return updatedDoor.isOpen ? actualDoor : actualDoor.deselectDoor()
        }
    })
}