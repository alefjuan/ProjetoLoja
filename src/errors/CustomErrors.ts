export default class CustomErrors extends Error {
    constructor(message: string) {
        super(message); 
        this.name = "CustomErrors"; 
    }
}
