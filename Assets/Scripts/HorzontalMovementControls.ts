import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import {ZepetoCharacter, ZepetoPlayers, ZepetoScreenTouchpad} from "ZEPETO.Character.Controller";
import {ZepetoInputControl} from "RootNamespace";
import { Vector2 } from 'UnityEngine';

export default class HorzontalMovementControls extends ZepetoScriptBehaviour {
    private zepetoScreenPad: ZepetoScreenTouchpad;
    private myCharacter: ZepetoCharacter;
    private myInputControl: ZepetoInputControl;

    Awake() {
        this.myInputControl = new ZepetoInputControl();
    }
    
    Start() {
        this.myInputControl.Enable();
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
            this.myCharacter = ZepetoPlayers.instance.LocalPlayer.zepetoPlayer.character;
            this.zepetoScreenPad = ZepetoPlayers.instance.transform.Find("UIZepetoPlayerControl").Find("SafeArea").Find("Pad").GetComponent<ZepetoScreenTouchpad>();

            this.zepetoScreenPad.OnDragEvent.RemoveAllListeners();

            this.zepetoScreenPad.OnDragEvent.AddListener(deltaVector => {
                console.log(`[OnDragEvent] : ${deltaVector.ToString()}`);
                this.myCharacter.Move(new Vector2(-deltaVector.x, 0));
            });
        });
    }

}