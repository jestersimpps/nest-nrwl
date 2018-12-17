import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import {Project} from "../../../models/project.model";

@Injectable()
export class ProjectApiService {
  url = '/api/demo-api/project';

  constructor(protected http: HttpClient, private location: Location) {}

  public loadAll(): Observable<Project[]> {
    const url = this.location.prepareExternalUrl(`${this.url}`);
    return this.http.get(url) as Observable<Project[]>;
  }
}
