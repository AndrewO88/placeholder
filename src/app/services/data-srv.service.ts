import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Article} from '../config/interface';

@Injectable({
  providedIn: 'root'
})
export class DataSrvService {

  // Готовы все методы
  articles$: BehaviorSubject<Article[]>;

  constructor() {
    this.articles$ = new BehaviorSubject<Article[]>([
      {
        tittle: 'Циклоп',
        subtitle: 'Маг',
        subData: {
          imgLink: 'https://mobilelegends.metaplay.ru/wp-content/uploads/2019/02/ciklop-1024x576.jpg',
          text: 'Связь со звездами дает Циклопу возможность контролировать время. Время восстановления всех умений будет уменьшено на 0,5 секунды.'
        }
      },
      {
        tittle: 'Франко',
        subtitle: 'Танк',
        subData: {
          imgLink: 'https://mobilelegends.metaplay.ru/wp-content/uploads/2019/02/franko-1024x576.jpg',
          text: 'Вне боя Франко получает дополнительно 10% скорости движения и восстанавливает 1% своего здоровья каждую секунду.'
        }
      },
      {
        tittle: 'Горд',
        subtitle: 'Маг',
        subData: {
          imgLink: 'https://mobilelegends.metaplay.ru/wp-content/uploads/2019/02/gord-1024x576.jpg',
          text: 'Горд атакует ту же цель 4 раза за короткое время, дает дополнительный 160 (+ 70% магической силы) истинного урона к следующей атаке.'
        }
      },
      {
        tittle: 'Грок',
        subtitle: 'Танк',
        subData: {
          imgLink: 'https://mobilelegends.metaplay.ru/wp-content/uploads/2019/02/grok-1024x576.jpg',
          text: 'Стреляет ударной волной в целевое местоположение, нанося 300 (+ 50% физической атаки) физического урона. Эта ударная волна затем поднимает каменную стену, которая блокирует дорогу на 5 секунд.'
        }
      },
      {
        tittle: 'Одетта',
        subtitle: 'Маг',
        subData: {
          imgLink: 'https://mobilelegends.metaplay.ru/wp-content/uploads/2019/02/odetta-e1586423604979.jpg',
          text: 'После использования этого умения следующая атака издаст звуковые волны, которые отскакивают от врагов, нанося 144 ~ 200 (+ 50% магической силы) магического урона.'
        }
      },
    ]);
  }

  add(article: Article): void {
    const articles: Article[] = [...this.articles$.value];
    articles.push(article);
    this.articles$.next(articles);
  }

  deleteLast(): void {
    const articles: Article[] = [...this.articles$.value];
    articles.pop();
    this.articles$.next(articles);
  }

  deleteSecond(): void {
    const articles: Article[] = [...this.articles$.value];
    articles.splice(1, 1);
    this.articles$.next(articles);
  }

  deleteThis(dataCard): void {
    const articles: Article[] = [...this.articles$.value];
    const index = articles.indexOf(dataCard);
    articles.splice(index, 1);
    this.articles$.next(articles);

    // const index = this.articles$.value.indexOf(dataCard);
    // setTimeout(() => {
    //   this.articles$.value.splice(index, 1);
    // }, 2000);
  }
}
