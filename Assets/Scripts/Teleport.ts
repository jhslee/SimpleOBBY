import {Collider, Transform } from 'UnityEngine';
import {ZepetoPlayer, ZepetoPlayers } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class Teleport extends ZepetoScriptBehaviour {
    public teleportPoint: Transform;
    
    public OnTriggerEnter(other: Collider)
    {
        if (other.gameObject.tag == "Player")
        {
            let player : ZepetoPlayer = ZepetoPlayers.instance.GetPlayer(other.gameObject.name);
            player.character.Teleport(this.teleportPoint.position, this.teleportPoint.rotation);
        }
    }

}