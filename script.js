"use strict;"

// Масив з назвами пісень
const songs = [
    "Пісня 1: Назва пісні 1",
    "Пісня 2: Назва пісні 2",
    "Пісня 3: Назва пісні 3",
    "Пісня 4: Назва пісні 4",
    "Пісня 5: Назва пісні 5",
  ];

  let playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
    ];

  // Отримуємо елемент списку
  const songList = document.getElementById("songList");

  // Додаємо кожну пісню до списку
  playList.forEach((song) => {
    const li = document.createElement("li"); // Створюємо новий елемент списку
    li.textContent = `${song.author}    - ${song.song}`; // Встановлюємо текст елемента
    // const authorName = li.textContent = song.author; // Встановлюємо текст елемента
    // const authorSong = li.textContent = song.song; // Встановлюємо текст елемента
    songList.appendChild(li); // Додаємо елемент до списку
  });

  