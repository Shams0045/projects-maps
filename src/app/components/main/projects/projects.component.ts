import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../../_services/project.service";

import * as mapboxgl from 'mapbox-gl';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  maps: mapboxgl.map;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.showMaps();
    this.getProjectsInfo();
  }

  showMaps(): void {
   mapboxgl.accessToken = environment.mapboxKey;
   let maps = new mapboxgl.Map({
      container: 'maps-mapbox',
     style: 'mapbox://styles/mapbox/streets-v11',
     center: [43.37478851081459, 34.78427250153706],
     zoom: 2
   });
  }

  getProjectsInfo(): void {
    this.projectService.getProjectsInfo()
      .subscribe(data => {
        console.log(data);
      });
  }



}
