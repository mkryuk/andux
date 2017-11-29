import {
  FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR,
  FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_ERROR
} from './../actions';
import { IPostsState } from './../store';
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

@Injectable()
export class PostsLocalService {
  private readonly posts = [
    {
      'userId': 1,
      'id': 1,
      'title': 'Ученые показали пойманную на глубине 8 км рыбу',
      'body': 'Морской обитатель напоминает слегка разбухшее куриное филе.\nМеждународная группа ученых дала название самой глубоководной рыбе в мире, которая проживает на глубине 8 километров в Марианской впадине. Морского обитателя нарекли Mariana snailfish (Марианский морской слизняк), передает Earther.'
    },
    {
      'userId': 1,
      'id': 2,
      'title': 'Занялись делом. Ученые провели анализ ДНК "останков снежного человека"',
      'body': 'Последние анализы ДНК показали, что кости, которые местные жители считали останками йети, на самом деле принадлежали нескольким медведям.'
    },
    {
      'userId': 1,
      'id': 3,
      'title': 'Facebook тестирует селфи-защиту аккаунтов',
      'body': 'Социальная сеть Facebook тестирует новую защитную функцию с использованием селфи владельца. Сообщается, что в случае, если система заподозрит что-то неладное, она попросит пользователя сделать свое селфи для подтверждения личности, передает Wired.'
    },
    {
      'userId': 1,
      'id': 4,
      'title': 'Уязвимость в ОС macOS High Sierra позволяет получить права root-пользователя в обход пароля',
      'body': 'Временами в сети появляются сообщения касательно уязвимостей в том или ином продукте. От подобного не застрахован никто. И вот сейчас стало известно, что операционная система macOS High Sierra содержит ошибку, которая создает огромную проблему с безопасностью. Впрочем, уже есть решение, которым пользователи компьютеров Mac могут воспользоваться.'
    },
    {
      'userId': 1,
      'id': 5,
      'title': 'На картах Google обнаружили инопланетный корабль',
      'body': 'Житель австралийского города Дарвин Дин Стокс (Dean Stocks) обнаружил на картах Google изображение объекта, напоминающего инопланетную летающую тарелку. Об этом сообщает The Daily Mail.'
    },
  ];
  private readonly comments = [
    {
      'postId': 1,
      'id': 1,
      'name': 'Віталька',
      'email': 'vitalka@gardner.biz',
      'body': 'Та то, мабуть, вони нашу тюльку одеську побачили'
    },
    {
      'postId': 1,
      'id': 2,
      'name': 'Valera62',
      'email': 'Valera62@sydney.com',
      'body': 'Приїздіть до мене на дачу, ви там ще не те побачите'
    },
    {
      'postId': 2,
      'id': 3,
      'name': 'Nikita',
      'email': 'Nikita@garfield.biz',
      'body': 'Та ви шо, знущаетесь, "занялись делом" серйозно? Занялись делом це провести метро на Троєщину, дороги нормальні покладіть, ледарі.'
    },
    {
      'postId': 2,
      'id': 4,
      'name': 'Николай',
      'email': 'nik@garfield.biz',
      'body': '"Занялись делом." Ну и ну... "Отличный" заголовок!'
    },
    {
      'postId': 3,
      'id': 5,
      'name': 'асклепий',
      'email': 'asklepiy@alysha.tv',
      'body': 'Ну, разумеется. Всё исключительно из самых лучших побуждений. И "по заявкам трудящихся"...)))'
    },
    {
      'postId': 3,
      'id': 6,
      'name': 'Румата',
      'email': 'rumata@alysha.tv',
      'body': 'Большой брат хочет знать меньших в лицо.'
    },
    {
      'postId': 4,
      'id': 7,
      'name': 'Alex',
      'email': 'Alex@garfield.biz',
      'body': 'З останнім оновленням (наче) перестав тухнути екран через зазначений час для енергозбереження як від батареї, так і від мережі. У когось є теж саме? Як вирішити?'
    },
    {
      'postId': 4,
      'id': 8,
      'name': 'Олег',
      'email': 'Oleg@althea.biz',
      'body': 'Apple косячит, как может... это ж amazing :D'
    },
    {
      'postId': 5,
      'id': 9,
      'name': 'NO COMMENTS',
      'email': '',
      'body': ''
    }];

  constructor(private ngRedux: NgRedux<IPostsState>) { }

  public loadPosts() {
    this.ngRedux.dispatch({ type: FETCH_POSTS_REQUEST });
    return this.ngRedux.dispatch({ type: FETCH_POSTS_SUCCESS, posts: this.posts });

  }

  public loadPostComments(postId: number) {
    this.ngRedux.dispatch({ type: FETCH_COMMENTS_REQUEST });
    return this.ngRedux.dispatch({ type: FETCH_COMMENTS_SUCCESS, comments: this.comments.filter(c => c.postId === postId)});
  }
}
