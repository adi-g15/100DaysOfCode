import { Component } from '@angular/core';
import { Observable, observable } from 'rxjs';
import * as offline from '../assets/todoist.json';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Aditya Gupta';

  constructor(){

  }

  getLocation(){
        /**An observable that will start listening to geolocation updates when a consumer subscribes */
        const location = new Observable((observer) => {
          let watchId: number //We will get it from geolocation.watchPosition()
          // let todos: JSON = offline
    
          // Simple geolocation API check provides values to publish
          if('geolocation' in navigator){
            watchId = navigator.geolocation.watchPosition((position: Position) => { //watchPosition() will pass the current `Position`, and after it has done so, it will return a watchId
              observer.next(position) //the observer will keep emitting position
            }, (err: PositionError) => {
              observer.error(err)
            })
          }
          else{
            observer.error('Geolocation not available')
          }
    
          // When consumer unsubscribes, clean up data ready for the next subscription
          return{
            unsubscribe(){
              navigator.geolocation.clearWatch(watchId)
            }
          }
        });
    
        let counter: number = 0
        location.subscribe((data) => {
          ++counter
          if(counter > 4){
            // IMPORTANT_QUESTION -> HOW TO UNSUBSCIBE ?
          }
        })
    
  }

}
