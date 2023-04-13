import { Transform } from 'UnityEngine';
import {LocalPlayer, SpawnInfo, ZepetoPlayer, ZepetoPlayers } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { WorldService } from 'ZEPETO.World';

export default class PlayerSpawn extends ZepetoScriptBehaviour {
    public spawnPoint : Transform;
    
    private player: LocalPlayer;
    Start() {    
        let spawnInfo : SpawnInfo = new SpawnInfo();
        spawnInfo.position = this.spawnPoint.position;
        spawnInfo.rotation = this.spawnPoint.rotation;
        
        ZepetoPlayers.instance.CreatePlayerWithUserId(WorldService.userId, spawnInfo, true);
        
        
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
           this.player = ZepetoPlayers.instance.LocalPlayer;
           this.player.zepetoPlayer.character.gameObject.name = this.player.zepetoPlayer.userId;
            this.player.zepetoPlayer.character.gameObject.tag = "Player";
        });
    }

}