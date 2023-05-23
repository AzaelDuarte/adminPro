import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

declare function customInitFunctions():void;

@Component({
  selector: 'app-navegacion-principal',
  templateUrl: './navegacion-principal.component.html',
  styleUrls: ['./navegacion-principal.component.scss']
})
export class NavegacionPrincipalComponent implements OnInit {


  constructor(private settingsService:SettingsService) { }

  ngOnInit(): void {
    customInitFunctions();
  }

}
