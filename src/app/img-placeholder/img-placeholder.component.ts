import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Article} from './interface';
import { Observable} from 'rxjs';
import {DataSrvService} from './data-srv.service';



@Component({
  selector: 'app-img-placeholder',
  templateUrl: './img-placeholder.component.html',
  styleUrls: ['./img-placeholder.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgPlaceholderComponent implements OnInit {
  data: Observable<Article[]>;

  // activeUser$: BehaviorSubject<string> = new BehaviorSubject<string>('Шляпа');

  article: Article = {
    tittle: 'Чу',
    subtitle: 'Боец',
    subData: {
      imgLink: 'https://mobilelegends.metaplay.ru/wp-content/uploads/2019/01/chu-1024x576.jpg',
      text: 'Чу – боец, который может собираться как в урон, так и в танка. Является сильнейшим бойцом в Mobile legends. Мало кто смог бы посоревноваться с ним в мобильности.'
    }
  };

  constructor(
    private dataSrv: DataSrvService
  ) {
  }

  ngOnInit(): void {
    // this.data = this.dataSrv.articles$.pipe(mergeMap((articles) => this.activeUser$.pipe(map((owner) => articles.map((article) => ({
    //   ...article,
    //   owner
    // }))))));


    this.data = this.dataSrv.articles$;
    //   .pipe(
    //  mergeMap((articles) => {
    //       return this.activeUser$.pipe(map((user) => {
    //           return articles.map((article) => {
    //             return {
    //               ...article,
    //               owner: user
    //             };
    //           });
    //         })
    //       );
    //     }
    //   )
    // );
  }

  deleteLast(): void {
    this.dataSrv.deleteLast();
  }

  addPost(): void {
    this.dataSrv.add(this.article);
  }

  delete2post(): void {
    this.dataSrv.deleteSecond();
  }

  deleteThis(dataCard): void {
    this.dataSrv.deleteThis(dataCard);
  }

  // changeUser(): void {
  //   this.activeUser$.next('Лугабе');
  // }
}
