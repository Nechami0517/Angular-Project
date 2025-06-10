import { Component } from '@angular/core';

import { AgGridAngular } from "ag-grid-angular";
import { ColDef, ModuleRegistry, AllCommunityModule, GridReadyEvent } from "ag-grid-community";

// רישום המודולים
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-registered',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './registered.component.html',
  styleUrl: './registered.component.css'
})

export class RegisteredComponent {
  
onGridReady($event: GridReadyEvent<any,any>) {
throw new Error('Method not implemented.');
}
  rowData: register[] | null = [
    { name: "יוסי כהן", id: 1, phone: "050-1234567", email: "yosi@example.com", lesson: "", price: 0, isPay: false },
  { name: "מיכל לוי", id: 2, phone: "050-2345678", email: "michal@example.com", lesson: "", price: 0, isPay: true },
  { name: "אבי ישראל", id: 3, phone: "050-3456789", email: "avi@example.com", lesson: "", price: 0, isPay: false },
  { name: "רוני פישר", id: 4, phone: "050-4567890", email: "roni@example.com", lesson: "", price: 0, isPay: true },
  { name: "שרה עזרא", id: 5, phone: "050-5678901", email: "sara@example.com", lesson: "", price: 0, isPay: false },
  { name: "דוד כהן", id: 6, phone: "050-6789012", email: "david@example.com", lesson: "", price: 0, isPay: true },
  { name: "תמר לוי", id: 7, phone: "050-7890123", email: "tamara@example.com", lesson: "", price: 0, isPay: false },
  { name: "שמעון רוזן", id: 8, phone: "050-8901234", email: "shimon@example.com", lesson: "", price: 0, isPay: true },
  { name: "אורית בן דוד", id: 9, phone: "050-9012345", email: "orit@example.com", lesson: "", price: 0, isPay: false },
  { name: "רפאל גולדשטין", id: 10, phone: "050-0123456", email: "rafael@example.com", lesson: "", price: 0, isPay: true },
  { name: "אנה ברק", id: 11, phone: "050-1234568", email: "anna@example.com", lesson: "", price: 0, isPay: false },
  { name: "יונתן עוז", id: 12, phone: "050-2345679", email: "yonatan@example.com", lesson: "", price: 0, isPay: true },
  { name: "מאיה שקד", id: 13, phone: "050-3456790", email: "maya@example.com", lesson: "", price: 0, isPay: false },
  { name: "אלון קרן", id: 14, phone: "050-4567891", email: "alon@example.com", lesson: "", price: 0, isPay: true },
  { name: "נטע ברקוביץ", id: 15, phone: "050-5678902", email: "netta@example.com", lesson: "", price: 0, isPay: false },
  { name: "עידן גולן", id: 16, phone: "050-6789013", email: "idan@example.com", lesson: "", price: 0, isPay: true },
  { name: "סיוון חן", id: 17, phone: "050-7890124", email: "sivan@example.com", lesson: "", price: 0, isPay: false },
  { name: "דניאל אברהם", id: 18, phone: "050-8901235", email: "daniel@example.com", lesson: "", price: 0, isPay: true },
  { name: "ליה קפלן", id: 19, phone: "050-9012346", email: "lia@example.com", lesson: "", price: 0, isPay: false },
  { name: "עומרי רוזנברג", id: 20, phone: "050-0123457", email: "omri@example.com", lesson: "", price: 0, isPay: true },
  { name: "יוסי כהן", id: 1, phone: "050-1234567", email: "yosi@example.com", lesson: "", price: 0, isPay: false },
  { name: "מיכל לוי", id: 2, phone: "050-2345678", email: "michal@example.com", lesson: "", price: 0, isPay: true },
  { name: "אבי ישראל", id: 3, phone: "050-3456789", email: "avi@example.com", lesson: "", price: 0, isPay: false },
  { name: "רוני פישר", id: 4, phone: "050-4567890", email: "roni@example.com", lesson: "", price: 0, isPay: true },
  { name: "שרה עזרא", id: 5, phone: "050-5678901", email: "sara@example.com", lesson: "", price: 0, isPay: false },
  { name: "דוד כהן", id: 6, phone: "050-6789012", email: "david@example.com", lesson: "", price: 0, isPay: true },
  { name: "תמר לוי", id: 7, phone: "050-7890123", email: "tamara@example.com", lesson: "", price: 0, isPay: false },
  { name: "שמעון רוזן", id: 8, phone: "050-8901234", email: "shimon@example.com", lesson: "", price: 0, isPay: true },
  { name: "אורית בן דוד", id: 9, phone: "050-9012345", email: "orit@example.com", lesson: "", price: 0, isPay: false },
  { name: "רפאל גולדשטין", id: 10, phone: "050-0123456", email: "rafael@example.com", lesson: "", price: 0, isPay: true },
  { name: "אנה ברק", id: 11, phone: "050-1234568", email: "anna@example.com", lesson: "", price: 0, isPay: false },
  { name: "יונתן עוז", id: 12, phone: "050-2345679", email: "yonatan@example.com", lesson: "", price: 0, isPay: true },
  { name: "מאיה שקד", id: 13, phone: "050-3456790", email: "maya@example.com", lesson: "", price: 0, isPay: false },
  { name: "אלון קרן", id: 14, phone: "050-4567891", email: "alon@example.com", lesson: "", price: 0, isPay: true },
  { name: "נטע ברקוביץ", id: 15, phone: "050-5678902", email: "netta@example.com", lesson: "", price: 0, isPay: false },
  { name: "עידן גולן", id: 16, phone: "050-6789013", email: "idan@example.com", lesson: "", price: 0, isPay: true },
  { name: "סיוון חן", id: 17, phone: "050-7890124", email: "sivan@example.com", lesson: "", price: 0, isPay: false },
  { name: "דניאל אברהם", id: 18, phone: "050-8901235", email: "daniel@example.com", lesson: "", price: 0, isPay: true },
  { name: "ליה קפלן", id: 19, phone: "050-9012346", email: "lia@example.com", lesson: "", price: 0, isPay: false },
  { name: "עומרי רוזנברג", id: 20, phone: "050-0123457", email: "omri@example.com", lesson: "", price: 0, isPay: true },
];
  columnDefs: ColDef[] = [
    { field: "name", headerName: "שם", filter: "agMultiColumnFilter" },
    { field: "id", headerName: `ת.ז`, filter: "agNumberColumnFilter" },
    { field: "phone", headerName: "טלפון", filter: "agTextColumnFilter" },
    { field: "email", headerName: `דוא"ל`, filter: "agMultiColumnFilter" },
    { field: "lesson", headerName: `שיעור`, filter: "agTextColumnFilter" },
    { field: "price", headerName: `מחיר`, filter: "agNumberColumnFilter" },
    { field: "isPay", headerName: "שולם", filter: false, cellRenderer: (params: { value: any; }) => params.value ? "✅" : "❎" },
    {field:"details",headerName:"פרטים", cellRenderer: (params: any) => {
      const button = document.createElement('button');
      button.innerText = 'פרטים';
      button.style.backgroundColor = '#0672CB';
      button.style.color = 'white';
      button.style.border = 'none';
      button.style.padding = '5px 10px';
      button.style.borderRadius = '5px';
      button.style.cursor = 'pointer';
      button.addEventListener('click', () => {
        this.showPopup(params.data);
      });
      return button;
    }}
  ];

  showPopup(rowData: any): void {
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = 'white';
    popup.style.padding = '20px';
    popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    popup.style.borderRadius = '8px';
    popup.style.zIndex = '1000';
    popup.style.width = '300px';
    popup.style.textAlign = 'center';
  
    popup.innerHTML = `
     
      <p><strong>שם:</strong> ${rowData.name}</p>
      <p><strong>ת.ז:</strong> ${rowData.id}</p>
      <p><strong>טלפון:</strong> ${rowData.phone}</p>
      <p><strong>דוא"ל:</strong> ${rowData.email}</p>
      <button style="margin-top: 10px; padding: 5px 10px; background-color: #0672CB; color: white; border: none; border-radius: 5px; cursor: pointer;">סגור</button>
    `;
  
    document.body.appendChild(popup);
  
    const closeButton = popup.querySelector('button');
    closeButton?.addEventListener('click', () => {
      document.body.removeChild(popup);
    });
  }
}
export interface register{
  name: string;
  id: number;
  phone: string;
  email: string;
  lesson: string;
  price: number;
  isPay: boolean;
}