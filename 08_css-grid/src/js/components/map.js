import ymaps from 'ymaps';

ymaps
  .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
  .then(maps => {
    const map = new maps.Map('map-id', {
      center: [55.760295830234746, 37.61457454223628],
      zoom: 13
    });

    const placemark = new maps.Placemark([55.769756957447385, 37.63969595428278], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../../img/ellipse.svg',
      iconImageSize: [12, 12],
      iconImageOffset: [0, 10]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);

    // placemark.balloon.open();

    placemark.events.add('click', () => {
      const addrDiv = document.getElementsByClassName('contacts__addr')[0];
      addrDiv.classList.remove('hidden');
    });
  })
  .catch(error => console.log('Failed to load Yandex Maps', error));

document.getElementById('contactsCloseBtn').addEventListener('click', () => {
  const addrDiv = document.getElementsByClassName('contacts__addr')[0];
  addrDiv.classList.add('hidden');
});
