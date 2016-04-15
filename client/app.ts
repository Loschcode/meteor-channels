import 'reflect-metadata';
import 'zone.js/dist/zone';
import {NgZone, Component} from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {Parties} from '../collections/parties';
import {Tracker} from 'meteor/tracker';

import {Mongo} from 'meteor/mongo';
 
@Component({
  selector: 'app',
  templateUrl: 'client/app.html'
})

class Socially {
  parties: Mongo.Cursor<Object>;
 
  constructor () {
    this.parties = Parties.find();
  }
}
 
bootstrap(Socially);