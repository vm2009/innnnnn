document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('animeVideo');
  const qualitySelect = document.getElementById('quality-select');
  const prevEpisodeBtn = document.getElementById('prev-episode');
  const nextEpisodeBtn = document.getElementById('next-episode');
  let currentEpisode = 1;

  // Перемикач епізодів
  prevEpisodeBtn.addEventListener('click', function () {
      if (currentEpisode > 1) {
          currentEpisode--;
          loadEpisode(currentEpisode);
      }
  });

  nextEpisodeBtn.addEventListener('click', function () {
      if (currentEpisode < 3) { // Змініть 3 на загальну кількість епізодів
          currentEpisode++;
          loadEpisode(currentEpisode);
      }
  });

  // Завантаження епізоду
  function loadEpisode(episodeNumber) {
      switch (episodeNumber) {
          case 1:
              video.src = "C:\Downloaded Web Sites\jut.su\kimetsu-no-yaiba\1.1080.d2abb5726c3f2e44.mp4"; // Змініть на реальний шлях до 1 епізоду
              break;
          case 2:
              video.src = "C:\Downloaded Web Sites\jut.su\kimetsu-no-yaiba\2.1080.b973d09a1da1afb9.mp4"; // Змініть на реальний шлях до 2 епізоду
              break;
          case 3:
              video.src = "C:\Downloaded Web Sites\jut.su\kimetsu-no-yaiba\3.1080.03f6d22449a6f510.mp4"; // Змініть на реальний шлях до 3 епізоду
              break;
          default:
              video.src = "C:\Downloaded Web Sites\jut.su\kimetsu-no-yaiba\1.1080.d2abb5726c3f2e44.mp4";
      }
      video.load(); // Перезавантаження відео
  }

  // Зміна якості відео
  qualitySelect.addEventListener('change', function () {
      const quality = qualitySelect.value;
      // Визначте шлях до відео на основі якості
      if (quality === "480p") {
          video.src = "C:\Downloaded Web Sites\jut.su\kimetsu-no-yaiba\1.480.c81ba9cc95926096.mp4"; // Змініть на реальний шлях до 480p
      } else if (quality === "720p") {
          video.src = 'videos/episode-1_720p.mp4'; // Змініть на реальний шлях до 720p
      } else if (quality === "1080p") {
          video.src = "C:\Downloaded Web Sites\jut.su\kimetsu-no-yaiba\1.1080.d2abb5726c3f2e44.mp4"; // Змініть на реальний шлях до 1080p
      }
      video.load(); // Перезавантаження відео
  });

  // Завантажити перший епізод за замовчуванням
  loadEpisode(currentEpisode);
});
