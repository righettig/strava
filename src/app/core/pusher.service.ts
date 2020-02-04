import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

declare const Pusher: any;

@Injectable({
  providedIn: 'root'
})
export class PusherService {

  constructor() {
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    this._pusher = new Pusher(environment.pusher.key, {
      cluster: environment.pusher.cluster,
      forceTLS: true
    });
  }

  bind(channelName: string, eventName: string, fn) {
    let channel = this.channels[channelName];
    
    if (!channel) {
      channel = this._pusher.subscribe(channelName);
    }

    channel.bind(eventName, fn);
  }

  private channels: [ { key: string, channel: any} ];
  
  private _pusher;

}