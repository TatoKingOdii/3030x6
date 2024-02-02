import { Injectable } from '@angular/core';
import {Game} from "../../model/game";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private selectedContent?: Game;
  private contentList: Game[] = [
    {
      id: 1,
      title: 'GTA V',
      esrbRating: 'R',
      genre: 'RPG',
      releaseDate: '2015-01-01'
    },
    {
      id: 2,
      title: 'Palworld',
      esrbRating: 'PG13',
      genre: 'Creature Collector',
      releaseDate: '2024-01-18'
    }
  ]

  constructor() { }

  addContent(addedContent: Game) {
    this.contentList.push(addedContent);
  }

  updateContent(contentEvent: Game) {
    let idx: number = this.findIdxForContent(contentEvent);

    if (idx !== -1) {
      this.contentList[idx].esrbRating = contentEvent.esrbRating;
      this.contentList[idx].genre = contentEvent.genre;
      this.contentList[idx].title = contentEvent.title;
      this.contentList[idx].releaseDate = contentEvent.releaseDate;
    } else {
      this.addContent(contentEvent)
    }
    this.resetSelectedContent();
  }

  deleteContent(deletedContent: Game) {
    let idx: number = this.findIdxForContent(deletedContent);

    if (idx !== -1) {
      this.contentList.splice(idx, 1);
    }

    if (this.selectedContent && deletedContent.id === this.selectedContent.id) {
      this.selectedContent = undefined;
    }
  }

  getAllContent() : Game[] {
    return this.contentList;
  }

  selectContent(contentEvent: Game) {
    this.selectedContent = contentEvent;
  }
  getSelectedContent() : Game | undefined {
    return this.selectedContent;
  }
  resetSelectedContent() {
    this.selectedContent = undefined;
  }

  private findIdxForContent(searchContent: Game) : number {
    return this.contentList.findIndex(content => content.id == searchContent.id);
  }
}
