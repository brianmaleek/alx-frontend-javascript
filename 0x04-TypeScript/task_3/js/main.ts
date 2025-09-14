/// <reference path="./crud.d.ts" />
/// <reference path="./interface.ts" />

import { RowElement, RowID } from './interface';
import * as CRUD from './crud';

// Sample row object
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

// Insert a new row
const newRowID: RowID = CRUD.insertRow(row);

// Updated row object
const updatedRow: RowElement = { ...row, age: 23 };

// Update the newly created row
CRUD.updateRow(newRowID, updatedRow);

// Delete the newly created row
CRUD.deleteRow(newRowID);


console.log('Initial Row:', row);
console.log('New Row ID:', newRowID);
console.log('Updated Row:', updatedRow);
