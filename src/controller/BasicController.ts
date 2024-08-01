import PrimaryScreen from "../view/PrimaryScreen";
import SuplementController from "./SuplementController";

export default class BasicController{

    private primaryScreen: PrimaryScreen = new PrimaryScreen(new SuplementController());
    
    public startSystem():void {
       this.primaryScreen.getFirstScreen();
    }

}