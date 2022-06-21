import { Component, OnInit } from '@angular/core';
import { ElementsService } from '../elements.service';
import { ElementModel } from './element.model';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {
  element: ElementModel = new ElementModel;
  elements: Array<any> = new Array();

  constructor(private elementsService: ElementsService) { }

  ngOnInit(): void {
    this.listElements();
  }

  listElements() {
    this.elementsService.listElements().subscribe(elements => {
      this.elements = elements;
    }, err => {
      console.log('erro ao listar', err)
    })
  }

  creatElement() {
    this.elementsService.creatElement(this.element).subscribe(element => {
      this.element = new ElementModel();
      this.listElements();
    }, err => {
      console.log('erro ao criar', err)}
    )
  }

  updateElement(id: number){
    this.elementsService.updateElement(id, this.element).subscribe(element => {
      this.element = new ElementModel();
      this.listElements();
    }, err => {
      console.log('erro ao atualizar', err)}
    )
  }

  deleteElement(id:number){
    this.elementsService.deleteElement(id).subscribe(element => {
      this.element = new ElementModel();
      this.listElements();
    }, err => {
      console.log('erro ao deletar', err)}
    )
  }

}
