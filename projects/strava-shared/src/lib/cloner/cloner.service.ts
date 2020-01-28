import { Injectable } from '@angular/core';
import * as clone_ from 'clone';
const clone = clone_;

@Injectable({
    providedIn: 'root'
})
export class ClonerService {

    deepClone<T>(value) : T {
        return clone<T>(value);
    }

}