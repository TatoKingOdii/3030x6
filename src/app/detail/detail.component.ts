import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatIcon} from "@angular/material/icon";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {Game} from "../../libs/model/game";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    MatCardHeader,
    MatCard,
    MatCardTitle,
    NgIf,
    FormsModule,
    MatFormField,
    MatCardContent,
    MatInput,
    MatCardActions,
    MatButton,
    MatCheckbox,
    MatIcon,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnChanges {

  title = 'Select a Game or add a new one!';
  @Input() selectedContent?: Game;
  @Input() contentList?: Game[] = [];
  @Output() onContentSave = new EventEmitter<Game>;
  @Output() onCancel = new EventEmitter;
  localContent: Game = this.getDefaultContent();

  ngOnChanges(changes: SimpleChanges): void {
    let newContent = changes['selectedContent'] && changes['selectedContent'].currentValue;

    if (newContent) {
      this.localContent = {
        id: newContent.id,
        title: newContent.title,
        esrbRating: newContent.esrbRating,
        releaseDate: newContent.releaseDate,
        genre: newContent.genre
      }
    } else {
      this.localContent = this.getDefaultContent();
    }
  }

  getDefaultContent() : Game {
    return {
      id: -1,
      title: '',
      esrbRating: '',
      releaseDate: undefined,
      genre: ''
    }
  }
}
