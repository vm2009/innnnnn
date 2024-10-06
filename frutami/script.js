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
              video.src = 'videos/episode-1.mp4'; // Змініть на реальний шлях до 1 епізоду
              break;
          case 2:
              video.src = 'videos/episode-2.mp4'; // Змініть на реальний шлях до 2 епізоду
              break;
          case 3:
              video.src = 'videos/episode-3.mp4'; // Змініть на реальний шлях до 3 епізоду
              break;
          default:
              video.src = 'videos/episode-1.mp4';
      }
      video.load(); // Перезавантаження відео
  }

  // Зміна якості відео
  qualitySelect.addEventListener('change', function () {
      const quality = qualitySelect.value;
      // Визначте шлях до відео на основі якості
      if (quality === "480p") {
          video.src = 'videos/episode-1_480p.mp4'; // Змініть на реальний шлях до 480p
      } else if (quality === "720p") {
          video.src = 'videos/episode-1_720p.mp4'; // Змініть на реальний шлях до 720p
      } else if (quality === "1080p") {
          video.src = 'videos/episode-1_1080p.mp4'; // Змініть на реальний шлях до 1080p
      }
      video.load(); // Перезавантаження відео
  });

  // Завантажити перший епізод за замовчуванням
  loadEpisode(currentEpisode);
});
