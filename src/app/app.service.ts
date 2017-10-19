import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

@Injectable()
export class AppService {
    constructor(private http: Http) { }
    headers = new Headers();
    
    addAuthHeaders(){
        this.headers.append('Authorization', 'Basic ' + btoa(environment.userName + ':' + environment.password));
    }

    doGet(url, headers){
        return this.http.get(url, { headers: headers }).map(res => res.text());
    }

    doPost(url, formData, headers){
        return this.http.post(url, formData, { headers: headers }).map(res => res.text());
    }

    getVersion() {
        let url = environment.apiUrl + 'management/engine';
        this.addAuthHeaders();
        return this.doGet(url,this.headers);
    }

    uploadBpmn(file){
        //TODO
        let url = environment.apiUrl + 'repository/deployments';
        return this.doPost(url, file,this.headers);
    }

    getProcessDefs(){
        let url = environment.apiUrl + 'repository/process-definitions';
        this.addAuthHeaders();
        return this.doGet(url, this.headers);
    }
}