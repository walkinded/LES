ymaps.ready(function () {
  var myMap = new ymaps.Map('location--map', {
          center: [44.667309, 34.398253],
          zoom: 14,
          controls: ['zoomControl']
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark1 = new ymaps.Placemark([44.672412, 34.41178], {
          balloonContentHeader: "<img src='img/news1.jpg' alt=''>",
          balloonContentBody: "<p>Крепость Алустон</p>"
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'img/pin_location.png',
          // Размеры метки.
          iconImageSize: [30, 40],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-15, -24],

          hideIconOnBalloonOpen: false,
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      }),
      myPlacemark2 = new ymaps.Placemark([44.653909, 34.399861], {
        balloonContentHeader: "<img src='img/news1.jpg' alt=''>",
        balloonContentBody: "<p>Профессорский уголок</p>"
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'img/pin_location.png',
          // Размеры метки.
          iconImageSize: [30, 40],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-15, -24],

          hideIconOnBalloonOpen: false,
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      }),
      myPlacemark3 = new ymaps.Placemark([44.658239, 34.405439], {
        balloonContentHeader: "<img src='img/news1.jpg' alt=''>",
        balloonContentBody: "<p>Литературный музей И. С. Шмелёва</p>"
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'img/pin_location.png',
          // Размеры метки.
          iconImageSize: [30, 40],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-15, -24],

          hideIconOnBalloonOpen: false,
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      }),
      myPlacemark4 = new ymaps.Placemark([44.66168, 34.402118], {
        balloonContentHeader: "<img src='img/news1.jpg' alt=''>",
        balloonContentBody: "<p>Дом-музей С. Н. Сергеева-Ценского</p>"
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'img/pin_location.png',
          // Размеры метки.
          iconImageSize: [30, 40],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-15, -24],

          hideIconOnBalloonOpen: false,
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      }),
      myPlacemark5 = new ymaps.Placemark([44.660461, 34.407575], {
        balloonContentHeader: "<img src='img/news1.jpg' alt=''>",
        balloonContentBody: "<p>Аквапарк</p>"
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'img/pin_location.png',
          // Размеры метки.
          iconImageSize: [30, 40],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-15, -24],

          hideIconOnBalloonOpen: false,
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      }),
      myPlacemark6 = new ymaps.Placemark([44.654678, 34.40455], {
        balloonContentHeader: "<img src='img/news1.jpg' alt=''>",
        balloonContentBody: "<p>Центральная набережная</p>"
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'img/pin_location.png',
          // Размеры метки.
          iconImageSize: [30, 40],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-15, -24],

          hideIconOnBalloonOpen: false,
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      }),
      myPlacemark7 = new ymaps.Placemark([44.670974, 34.411278], {
        balloonContentHeader: "<img src='img/news1.jpg' alt=''>",
        balloonContentBody: "<p>Алуштинский аквариум</p>"
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'img/pin_location.png',
          // Размеры метки.
          iconImageSize: [30, 40],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-15, -24],

          hideIconOnBalloonOpen: false,
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      }),
      myPlacemark8 = new ymaps.Placemark([44.670765, 34.409612], {
        balloonContentHeader: "<img src='img/news1.jpg' alt=''>",
        balloonContentBody: "<p>Дельфинарий</p>"
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'img/pin_location.png',
          // Размеры метки.
          iconImageSize: [30, 40],

          hideIconOnBalloonOpen: false,
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-15, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      }),
      myPlacemark9 = new ymaps.Placemark([44.674807, 34.399576], {
        balloonContentHeader: "<img src='img/news1.jpg' alt=''>",
        balloonContentBody: "<p>Автовокзал Алушта</p>"
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'img/pin_location.png',

          hideIconOnBalloonOpen: false,
          // Размеры метки.
          iconImageSize: [30, 40],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-15, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      }),
      myPlacemark10 = new ymaps.Placemark([44.676639, 34.403915], {
        balloonContentHeader: "<img src='img/news1.jpg' alt=''>",
        balloonContentBody: "<p>Городская больница</p>"
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'img/pin_location.png',

          hideIconOnBalloonOpen: false,
          // Размеры метки.
          iconImageSize: [30, 40],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-15, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      }),
      myPlacemark11 = new ymaps.Placemark([44.678199, 34.414355], {
        balloonContentHeader: "<img src='img/news1.jpg' alt=''>",
        balloonContentBody: "<p>Тренировочный центр спортивной подготовки</p>"
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'img/pin_location.png',

          hideIconOnBalloonOpen: false,
          // Размеры метки.
          iconImageSize: [30, 40],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-15, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      }),
      myPlacemark12 = new ymaps.Placemark([44.638248, 34.39695], {
        balloonContentHeader: "<img src='img/news1.jpg' alt=''>",
        balloonContentBody: "<p>Приморский парк</p>"
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'img/pin_location.png',
          // Размеры метки.
          iconImageSize: [30, 40],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-15, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout,
          hideIconOnBalloonOpen: false
      }),
      myPlacemarkMain = new ymaps.Placemark([44.653979, 34.394255], {
        balloonContentHeader: "<img src='img/news1.jpg' alt=''>",
        balloonContentBody: "<p>Санаторий ЛЕС</p>"
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'img/pin_location.png',
          // Размеры метки.
          iconImageSize: [30, 40],
          hideIconOnBalloonOpen: false,
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-15, -24],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout,
          state: true
      });


  myMap.geoObjects
    .add(myPlacemark1)
    .add(myPlacemark2)
    .add(myPlacemark3)
    .add(myPlacemark4)
    .add(myPlacemark5)
    .add(myPlacemark6)
    .add(myPlacemark7)
    .add(myPlacemark8)
    .add(myPlacemark9)
    .add(myPlacemark10)
    .add(myPlacemark11)
    .add(myPlacemark12)
    .add(myPlacemarkMain);
  myMap.behaviors.disable('scrollZoom');
});