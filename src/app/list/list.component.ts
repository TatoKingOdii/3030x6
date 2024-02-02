import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatActionList, MatListItem} from "@angular/material/list";
import {DatePipe, NgClass, NgForOf} from "@angular/common";
import {MatLine} from "@angular/material/core";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {DetailComponent} from "../detail/detail.component";
import {Game} from "../../libs/model/game";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatActionList,
    MatCardContent,
    NgForOf,
    MatLine,
    MatListItem,
    MatIcon,
    MatButton,
    DetailComponent,
    NgClass,
    DatePipe
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  title = 'Games';
  @Input() contentList?: Game[];
  @Output() onContentSelected = new EventEmitter<Game>;
  @Output() onContentDelete = new EventEmitter<Game>;
}
