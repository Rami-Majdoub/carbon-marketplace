import { Observable, from } from 'rxjs';
import { CrudOperations } from '../crud-operations.interface';

export abstract class MockCrudService<T, ID> implements CrudOperations<T, ID> {

  constructor(
    protected _data: T[],
    protected _id: string = "id",
    protected _newInstanceId: Function = (t: T) => this._data.length,
  ) {}

  save(t: T): Observable<T> {
    // add id attribute to new object
    if(!t[this._id]){
      const newId = this._newInstanceId(t);
      t[this._id] = newId;
    }
    this._data.push(t);
    return from([t]);
  }

  update(id: ID, t: T): Observable<T> {
    const index = this._data.findIndex(element => element[this._id] == id);
    if (index == -1) {
      return from([]);
    }

    this._data[index] = t;
    return from([t]);
  }

  findOne(id: ID): Observable<T> {
    const index = this._data.findIndex(element => element[this._id] == id);
    if (index == -1) {
      return from([]);
    }
    
    return from([this._data[index]]);
  }

  findAll(): Observable<T[]> {
    return from([this._data]);
  }

  delete(id: ID): Observable<T> {
    const index = this._data.findIndex(element => element[this._id] == id);
    if (index == -1) {
      return from([]);
    }
    
    const element = this._data[index];
    delete this._data[index];
    return from([element]);
  }
}