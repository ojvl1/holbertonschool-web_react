/// <reference path="crud.d.ts" />
import { type RowID, RowElement } from "./interface";
import * as CRUD from "./crud.js"
import { insertRow } from "./crud";

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23
}

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
