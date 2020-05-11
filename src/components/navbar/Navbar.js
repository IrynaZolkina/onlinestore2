import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Submenu from "./Submenu";
import firebase from "../../firebase/FirebaseUtils";

import "./navbar.css";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      //clearSubmenu: true,
      navbarMenuTest: [
        {
          title: "парфуми",
          submenuItemsInColumn: {
            first: "15",
            second: "50",
            third: "75",
            forth: "90",
            fifth: "115",
            sixth: "130",
          },
          subMenu: [
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-24.jpg?alt=media&token=ffb4d6d7-e6b6-4d3a-aeb0-084b0d190bfe",
            "",
            "жiночi",
            "чоловiчi",
            "нишевi",
            "",
            "",
            "",
            "мiнiатюри",
            "вiалки",
            "дитячи",

            "",
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-22.jpg?alt=media&token=69c69d39-558c-4a84-bcda-b7bed0f76a75",
          ],
          subMenu: [
            { title: "", number: "000000" },

            { title: "-чоловiчi", number: "00000000" },
            { title: "-нишевi", number: "00000000" },
          ],
        },
        {
          title: "макияж",
          submenuItemsInColumn: {
            first: "12",
            second: "23",
            third: "30",
            forth: "44",
            fifth: "61",
            sixth: "90",
          },
          subMenu: [
            { title: "#БРОВИ", number: "000000" },
            { title: ".Фарбування брів і вій", number: "00000000" },
            { title: "-Фарби для брів і вій", number: "00000000" },
            { title: "-Хна для брів і вій", number: "00000000" },
            { title: "-Окисники", number: "00000000" },
            { title: "-Спеціальні засоби", number: "00000000" },
            { title: ".Воски/гелі/туш", number: "00000000" },
            { title: ".Тінти", number: "00000000" },
            { title: ".Тіні/пудри", number: "00000000" },
            { title: ".Олівці/маркери", number: "00000000" },
            { title: ".Сироватки для росту брів і вій", number: "00000000" },
            { title: ".Пінцети", number: "00000000" },
            { title: "#ОБЛИЧЧЯ", number: "00000000" },
            { title: ".Бази/основи/праймери", number: "00000000" },
            { title: ".ВВ та СС креми", number: "00000000" },
            { title: ".Тональні основи", number: "00000000" },
            { title: ".Коректори/консилери", number: "00000000" },
            { title: ".Хайлайтери/бронзери", number: "00000000" },
            { title: ".Контурінг/скульптор", number: "00000000" },
            { title: ".Рум'яна.", number: "00000000" },
            { title: ".Пудри", number: "00000000" },
            { title: ".Фіксатори макіяжу", number: "00000000" },
            { title: ".Палетки", number: "00000000" },

            { title: "#ГУБИ", number: "00000000" },
            { title: ".Губна помада", number: "00000000" },
            { title: ".Блиски для губ", number: "00000000" },
            { title: ".Бальзами для губ", number: "00000000" },
            { title: ".Олівці контурні для губ", number: "00000000" },
            { title: ".Палетки", number: "00000000" },
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2Fimg36.jpg?alt=media&token=b4df2b85-bd8b-4043-ad10-7de71d7261a2",
              number: "00000000",
            },
            { title: "#ОЧІ", number: "00000000" },
            { title: ".Туш для вій", number: "00000000" },
            { title: ".Основа під туш", number: "00000000" },
            { title: ".База для тіней", number: "00000000" },
            { title: ".Тіні для повік/палетки з тінями", number: "00000000" },
            { title: ".Олівці контурні", number: "00000000" },
            { title: ".Підводка для очей", number: "00000000" },
            {
              title: ".Сироватки для росту і укріплення вій",
              number: "00000000",
            },
            { title: ".Накладні вії", number: "00000000" },
            { title: "-Пучкові вії", number: "00000000" },
            { title: "-Комплекти вій", number: "00000000" },
            { title: "-Клей для вій", number: "00000000" },
            { title: "-Ремувер", number: "00000000" },
            { title: "-Пінцети", number: "00000000" },

            { title: "#АКСЕСУАРИ", number: "00000000" },
            { title: ".Аплікатори", number: "00000000" },
            { title: ".Пензлики", number: "00000000" },
            { title: "-Для тіней", number: "00000000" },
            { title: "-Для брів", number: "00000000" },
            { title: "-Для вій", number: "00000000" },
            { title: "-Для підводки", number: "00000000" },
            { title: "-Для тональних основ", number: "00000000" },
            { title: "-Для контурінгу", number: "00000000" },
            { title: "-Для рідких скульпторів", number: "00000000" },
            { title: "-Для пудри", number: "00000000" },
            { title: "-Для рум'ян", number: "00000000" },
            { title: "-Для губ", number: "00000000" },
            { title: ".Спонжі", number: "00000000" },
            { title: ".Пуховки для пудри", number: "00000000" },
            { title: ".Набори пензлів", number: "00000000" },
            { title: ".Пінцети", number: "00000000" },
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2Fimg36.jpg?alt=media&token=b4df2b85-bd8b-4043-ad10-7de71d7261a2",
              number: "00000000",
            },
            { title: "#ЗНЯТТЯ МАКІЯЖУ", number: "00000000" },
            { title: ".Міцелярні води", number: "00000000" },
            { title: ".Демакіяжи", number: "00000000" },
            { title: ".Спонжі для демакіяжу", number: "00000000" },
            { title: ".Серветки для демакіяжу", number: "00000000" },
            { title: "", number: "00000000" },
            { title: "", number: "00000000" },
            { title: "", number: "00000000" },
            { title: "", number: "00000000" },
            { title: "", number: "00000000" },
            { title: "", number: "00000000" },
            { title: "", number: "00000000" },
            { title: "", number: "00000000" },
            { title: "", number: "00000000" },
            { title: "", number: "00000000" },
            { title: "", number: "00000000" },
            { title: "", number: "00000000" },
            { title: "", number: "00000000" },
            { title: "", number: "00000000" },
            { title: "", number: "00000000" },
            { title: "", number: "00000000" },
          ],
        },
        {
          title: "волосся",
          submenuItemsInColumn: {
            first: "17",
            second: "39",
            third: "55",
            forth: "79",
            fifth: "98",
            sixth: "150",
          },
          subMenu: [
            { title: "#ФАРБУВАННЯ ", number: "10000001" },

            { title: ".Фарбники", number: "00000000" },
            { title: "-Аміачні", number: "00000000" },
            { title: "-Безаміачні", number: "00000000" },
            { title: "-Пігменти прямої дії", number: "00000000" },
            { title: "-Фарбуючі шампуні, маски, спреї", number: "00000000" },
            { title: "-Анти-жовті засоби", number: "00000000" },
            { title: ".Освітлюючі засоби", number: "00000000" },
            { title: ".Окисники", number: "00000000" },
            { title: ".Технічні засоби", number: "00000000" },
            { title: "-Глибока очистка", number: "00000000" },
            { title: "-Стабілізатори", number: "00000000" },
            { title: "-Деперманенти", number: "00000000" },
            { title: "-Засоби д/зняття фарби з волосся", number: "00000000" },
            {
              title: "-Засоби для видалення фарби з шкіри",
              number: "00000000",
            },
            { title: "-Захистні сироватки", number: "00000000" },
            { title: "-Добавки до фарби", number: "00000000" },

            { title: "# ДОГЛЯД ЗА ВОЛОССЯМ ", number: "00000000" },

            { title: ".Шампуні", number: "00000000" },
            { title: "-Сульфатні", number: "00000000" },
            { title: "-Безсульфатні", number: "00000000" },
            { title: "-Лікувальні", number: "00000000" },
            { title: "-Фарбуючі", number: "00000000" },
            { title: "-Анти-жовті", number: "00000000" },
            { title: "-Сульфатні", number: "00000000" },
            { title: "-Сухі шампуні", number: "00000000" },
            { title: "-Чоловічі", number: "00000000" },
            { title: "-Дитячі", number: "00000000" },
            { title: ".Кондиціонери", number: "00000000" },
            { title: ".Маски", number: "00000000" },
            { title: ".Незмивні засоби", number: "00000000" },
            { title: "-Спреї/лосьйони", number: "00000000" },
            { title: "-Для кінчиків", number: "00000000" },
            {
              title: "-Сироватки/флюїди/емульсії/еліксири",
              number: "00000000",
            },
            { title: "-Термозахист", number: "00000000" },
            { title: "-Пілінги", number: "00000000" },
            { title: "-Креми", number: "00000000" },
            { title: "-Масло", number: "00000000" },
            { title: "-Піни/муси", number: "00000000" },

            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2Fimg36.jpg?alt=media&token=b4df2b85-bd8b-4043-ad10-7de71d7261a2",
              number: "00000000",
            },
            { title: "#ПРИЗНАЧЕННЯ", number: "00000000" },
            { title: "-Відновлення", number: "00000000" },
            { title: "-Лікування", number: "00000000" },
            { title: "-Об'єм", number: "00000000" },
            { title: "-Гладкість", number: "00000000" },
            { title: "-Кучеряве волосся", number: "00000000" },
            { title: "-Для блонду", number: "00000000" },
            { title: "-Зволоження", number: "00000000" },
            { title: "-Фарбоване волосся", number: "00000000" },
            { title: "-Фарбуючі та анти-жовті засоби", number: "00000000" },
            { title: "-Захист волосся від сонця", number: "00000000" },
            { title: "-Для довгого волосся", number: "00000000" },
            { title: "-Для щоденного використання", number: "00000000" },
            { title: "-Чоловікам", number: "00000000" },
            { title: "-Дітям", number: "00000000" },

            { title: "#КАТЕГОРІЇ ДЛЯ СТАЙЛІНГУ", number: "00000000" },
            { title: "-Для об'єму", number: "00000000" },
            { title: "-Для гладкості", number: "00000000" },
            { title: "-Для текстури", number: "00000000" },
            { title: "-Для фіксації зачіски", number: "00000000" },
            { title: "-Для випрямлення", number: "00000000" },
            { title: "-Для кучерів", number: "00000000" },
            { title: "-Для блиску", number: "00000000" },
            { title: "-Для чоловіків", number: "00000000" },
            { title: "-Праймери/Термозахист", number: "00000000" },

            { title: "#СТАЙЛІНГ", number: "00000000" },
            { title: "-Лаки", number: "00000000" },
            { title: "-Піни/муси", number: "00000000" },
            { title: "-Спреї/лосьйони", number: "00000000" },
            { title: "-Термозахист/праймери", number: "00000000" },
            { title: "-Воски/помади", number: "00000000" },
            { title: "-Гелі", number: "00000000" },
            { title: "-Паста/глина", number: "00000000" },
            { title: "-Желе/суфле", number: "00000000" },

            { title: "-Пудри", number: "00000000" },
            { title: "-Клеї", number: "00000000" },
            { title: "-Крем/молочко", number: "00000000" },
            { title: "-Сухі шампуні", number: "00000000" },
            { title: "-Сироватки/флюїди/емульсії", number: "00000000" },

            { title: "#АКСЕСУАРИ", number: "00000000" },
            { title: ".Для фарбування", number: "00000000" },
            { title: "-Пензлики для фарбування", number: "00000000" },
            { title: "-Мисочки та шейкери", number: "00000000" },
            { title: "-Вінчики та шпателі", number: "00000000" },
            { title: "-Фартухи", number: "00000000" },
            { title: "-Коміри", number: "00000000" },
            { title: "-Пеньюари", number: "00000000" },
            { title: "-Перукарські зажими", number: "00000000" },
            { title: "-Фольга", number: "00000000" },
            { title: "-Гребінці", number: "00000000" },
            { title: "-Ваги", number: "00000000" },
            { title: "-Ключики для фарби", number: "00000000" },
            { title: "-Розпирскувачі", number: "00000000" },
            { title: "-Рукавички", number: "00000000" },
            { title: "-Шапочки для мелірування", number: "00000000" },
            { title: ".Бігуді і папілоти", number: "00000000" },
            { title: ".Краби і зажими", number: "00000000" },
            { title: ".Резинки та шпильки", number: "00000000" },
            { title: ".Фени, дифузори, праски", number: "00000000" },
            { title: ".Ножиці для стрижки", number: "00000000" },
            { title: ".Щітки і розчіски", number: "00000000" },
            { title: "-Щітки для укладки", number: "00000000" },
            { title: "-Масажні щітки", number: "00000000" },
            { title: "-Гребінці", number: "00000000" },
            { title: "-Чоловічі", number: "00000000" },
            { title: "-Дитячі", number: "00000000" },
            { title: "-Компактні", number: "00000000" },

            { title: ".Ваги", number: "00000000" },
            { title: ".Інше", number: "00000000" },
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2Fimg34.jpg?alt=media&token=6ef63bc3-9636-4049-94d7-2f1ddfb7c52d",
              number: "00000000",
            },
          ],
        },
        {
          title: "нiгтi",
          submenuItemsInColumn: {
            first: "15",
            second: "50",
            third: "75",
            forth: "90",
            fifth: "115",
            sixth: "130",
          },
          subMenu: [
            { title: "https/мiнiатюри", number: "000000" },
            { title: "-вiалки", number: "000000" },
          ],
        },
        {
          title: "догляд за шкiрою",
          submenuItemsInColumn: {
            first: "15",
            second: "50",
            third: "75",
            forth: "90",
            fifth: "115",
            sixth: "130",
          },
          subMenu: [
            { title: "https/мiнiатюри", number: "000000" },
            { title: "-вiалки", number: "000000" },
          ],
        },
        {
          title: "чоловiкам",
          submenuItemsInColumn: {
            first: "15",
            second: "50",
            third: "75",
            forth: "90",
            fifth: "115",
            sixth: "130",
          },
          subMenu: [
            { title: "https/мiнiатюри", number: "000000" },
            { title: "-вiалки", number: "000000" },
          ],
        },
        {
          title: "дiтям",
          submenuItemsInColumn: {
            first: "15",
            second: "50",
            third: "75",
            forth: "90",
            fifth: "115",
            sixth: "130",
          },
          subMenu: [
            { title: "https/мiнiатюри", number: "000000" },
            { title: "-вiалки", number: "000000" },
          ],
        },
        {
          title: "аксесуари",
          submenuItemsInColumn: {
            first: "15",
            second: "50",
            third: "75",
            forth: "90",
            fifth: "115",
            sixth: "130",
          },
          subMenu: [
            { title: "https/мiнiатюри", number: "000000" },
            { title: "-вiалки", number: "000000" },
          ],
        },
        {
          title: "подарунки",
          submenuItemsInColumn: {
            first: "15",
            second: "50",
            third: "75",
            forth: "90",
            fifth: "115",
            sixth: "130",
          },
          subMenu: [
            { title: "https/мiнiатюри", number: "000000" },
            { title: "-вiалки", number: "000000" },
          ],
        },
      ],
      navbarMenu: [
        {
          title: "парфуми",
          subMenu: [
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-24.jpg?alt=media&token=ffb4d6d7-e6b6-4d3a-aeb0-084b0d190bfe",
            "",
            "жiночi",
            "чоловiчi",
            "нишевi",
            "",
            "",
            "",
            "мiнiатюри",
            "вiалки",
            "дитячи",

            "",
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-22.jpg?alt=media&token=69c69d39-558c-4a84-bcda-b7bed0f76a75",
          ],
        },
        {
          title: "макияж",
          subMenu: [
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fnavbar%2Fnavbar-02.jpg?alt=media&token=997e0703-bf7a-4f3e-864d-f2df315486a9",
            "чоловiчi",
            "#жiночi",
            "нишевi",
            "мiнiатюри",
            "вiалки",
            "#жiночi",
            "нишевi",
            "https/мiнiатюри",
            "вiалки",
            "",
            "",
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-17.jpg?alt=media&token=420b1a6a-8c01-47f4-a6ae-4a5c9ab12b5e",
          ],
        },

        {
          title: "волосся",
          subMenu: [
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2Fimg36.jpg?alt=media&token=b4df2b85-bd8b-4043-ad10-7de71d7261a2",
            "# ФАРБУВАННЯ ",
            ".Фарбники",
            "-Аміачні",
            "-Безаміачні",
            "-Пігменти прямої дії",
            "-Фарбуючі шампуні, маски, спреї",
            "-Анти-жовті засоби",
            ".Освітлюючі засоби",
            ".Окисники",
            ".Технічні засоби",
            "-Глибока очистка",
            "-Стабілізатори",
            "-Деперманенти",
            "-Засоби д/зняття фарби з волосся",
            "",
            "-Засоби для видалення фарби з шкіри",
            "-Захистні сироватки",
            "-Добавки до фарби",
            "# ДОГЛЯД ЗА ВОЛОССЯМ ",
            ".Шампуні",
            "-Сульфатні",
            "-Безсульфатні",
            "-Лікувальні",
            "-Фарбуючі",
            "-Анти-жовті",
            "-Сульфатні",
            "-Сухі шампуні",
            "-Чоловічі",
            "-Дитячі",
            ".Кондиціонери",
            ".Маски",
            ".Незмивні засоби",
            "-Спреї/лосьйони",
            "-Для кінчиків",
            "-Сироватки/флюїди/емульсії/еліксири",
            "-Термозахист",
            "",
            "",
            "",
            "",
            "",
            "",
            "-Пілінги",
            "-Креми",
            "-Масло",
            "-Піни/муси",

            "#ПРИЗНАЧЕННЯ",
            "-Відновлення",
            "-Лікування",
            "-Об'єм",
            "-Гладкість",
            "-Кучеряве волосся",
            "-Для блонду",
            "-Зволоження",
            "-Фарбоване волосся",
            "-Фарбуючі та анти-жовті засоби",
            "-Захист волосся від сонця",
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2Fimg34.jpg?alt=media&token=6ef63bc3-9636-4049-94d7-2f1ddfb7c52d",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "-Для довгого волосся",
            "-Для щоденного використання",
            "-Чоловікам",
            "-Дітям",
            "#КАТЕГОРІЇ ДЛЯ СТАЙЛІНГУ",
            "-Для об'єму",
            "-Для гладкості",
            "-Для текстури",
            "-Для фіксації зачіски",
            "-Для випрямлення",
            "-Для кучерів",
            "-Для блиску",
            "-Для чоловіків",
            "-Праймери/Термозахист",

            "#СТАЙЛІНГ",
            "-Лаки",
            "-Піни/муси",
            "-Спреї/лосьйони",
            "-Термозахист/праймери",
            "-Воски/помади",
            "-Гелі",
            "-Паста/глина",
            "-Желе/суфле",
            "",
            "",
            "",
            "",
            "",
            "",
            "-Пудри",
            "-Клеї",
            "-Крем/молочко",
            "-Сухі шампуні",
            "-Сироватки/флюїди/емульсії",

            "#АКСЕСУАРИ",
            ".Для фарбування",
            "-Пензлики для фарбування",
            "-Мисочки та шейкери",
            "-Вінчики та шпателі",
            "-Фартухи",
            "-Коміри",
            "-Пеньюари",
            "-Перукарські зажими",
            "-Фольга",
            "-Гребінці",
            "-Ваги",
            "-Ключики для фарби",
            "-Розпирскувачі",
            "-Рукавички",
            "-Шапочки для мелірування",
            ".Бігуді і папілоти",
            ".Краби і зажими",
            "",
            "",
            "",
            "",
            "",
            "",
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2Fimg36.jpg?alt=media&token=b4df2b85-bd8b-4043-ad10-7de71d7261a2",
            ".Щітки і розчіски",
            "-Щітки для укладки",
            "-Масажні щітки",
            "-Гребінці",
            "-Чоловічі",
            "-Дитячі",
            "-Компактні",
            ".Резинки та шпильки",
            ".Ножиці для стрижки",
            ".Фени, дифузори, праски",
            ".Ваги",
            ".Інше",
            "",
          ],
        },
        {
          title: "нiгтi",
          subMenu: [
            "чоловiчi",
            "#жiночi",
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg19.jpg?alt=media&token=baff45ef-8ed3-49e3-8feb-ad6f0eebe6e0",
            "нишевi",
            "мiнiатюри",
            "вiалки",
            "#жiночi",
            "нишевi",
            "https/мiнiатюри",
            "вiалки",
            "дитячи",
          ],
        },
        {
          title: "догляд за шкiрою",
          subMenu: [
            "чоловiчi",
            "#жiночi",
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg19.jpg?alt=media&token=baff45ef-8ed3-49e3-8feb-ad6f0eebe6e0",
            "нишевi",
            "мiнiатюри",
            "вiалки",
            "#жiночi",
            "нишевi",
            "https/мiнiатюри",
            "вiалки",
            "дитячи",
          ],
        },
        {
          title: "чоловiкам",
          subMenu: [
            "чоловiчi",
            "#жiночi",
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg19.jpg?alt=media&token=baff45ef-8ed3-49e3-8feb-ad6f0eebe6e0",
            "нишевi",
            "мiнiатюри",
            "вiалки",
            "#жiночi",
            "нишевi",
            "https/мiнiатюри",
            "вiалки",
            "дитячи",
          ],
        },
        {
          title: "дiтям",
          subMenu: [
            "чоловiчi",
            "#жiночi",
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg19.jpg?alt=media&token=baff45ef-8ed3-49e3-8feb-ad6f0eebe6e0",
            "нишевi",
            "мiнiатюри",
            "вiалки",
            "#жiночi",
            "нишевi",
            "https/мiнiатюри",
            "вiалки",
            "дитячи",
          ],
        },
        {
          title: "аксесуари",
          subMenu: [
            "чоловiчi",
            "#жiночi",
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg19.jpg?alt=media&token=baff45ef-8ed3-49e3-8feb-ad6f0eebe6e0",
            "нишевi",
            "мiнiатюри",
            "вiалки",
            "#жiночi",
            "нишевi",
            "https/мiнiатюри",
            "вiалки",
            "дитячи",
          ],
        },
        {
          title: "подарунки",
          subMenu: [
            "чоловiчi",
            "#жiночi",
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg19.jpg?alt=media&token=baff45ef-8ed3-49e3-8feb-ad6f0eebe6e0",
            "нишевi",
            "мiнiатюри",
            "вiалки",
            "#жiночi",
            "нишевi",
            "https/мiнiатюри",
            "вiалки",
            "дитячи",
          ],
        },
      ],
    };
  }

  /* componentDidMount() {
    const navbarFBaseRef = firebase.firestore().collection("navbar").get();
    navbarFBaseRef.map((element) => console.log(element.data()));
  } */
  render() {
    // if (this.state.clearSubmenu === true) {
    const navbarMenuTest2 = this.state.navbarMenuTest.map((el) =>
      el.subMenu.map((ell) => ell.title)
    );
    //console.log(navbarMenuTest2, "navbarMenuTest2");
    return (
      <div>
        <nav>
          <div className="container1">
            <ul className="menu-main">
              {/* 
                <li className="menu-main-link">
                  <a className="hover-border" href="">
                    {"парфуми".toUpperCase()}
                  </a>
                  <Submenu navbarSubMenu={this.state.navbarMenu[0].subMenu} />
                </li> */}

              {this.state.navbarMenuTest.map((element, index) => {
                return (
                  <li className="menu-main-link" key={index}>
                    {" "}
                    <NavLink to="/" className="hover-border">
                      {element.title.toUpperCase()}
                      {/* {element.title} */}
                    </NavLink>
                    <Submenu
                      navbarSubMenu={element.subMenu}
                      submenuItemsInColumn={element.submenuItemsInColumn}
                    />
                  </li>
                );
              })}

              {/* <li>
                  <a className="hover-border" href="">
                    {"макияж".toUpperCase()}
                  </a>
                  <Submenu title={"PARUM"} />
                </li>

                <li>
                  <a className="hover-border" href="">
                    {"волосся".toUpperCase()}
                  </a>
                  <Submenu title={"HAIR"} />
                </li>

                <li>
                  <a className="hover-border" href="">
                    {"нiгтi".toUpperCase()}
                  </a>
                  <Submenu title={"MMM"} />
                </li>
                <li>
                  <a className="hover-border" href="">
                    {"догляд за шкiрою".toUpperCase()}
                  </a>
                  <Submenu title={"HHHH"} />
                </li>
                <li>
                  <a className="hover-border" href="">
                    {"чоловiкам".toUpperCase()}
                  </a>
                  <Submenu title={"HAIR"} />
                </li>
                <li>
                  <a className="hover-border" href="">
                    {"дiтям".toUpperCase()}
                  </a>
                  <Submenu title={"JJJJIR"} />
                </li>
                <li>
                  <a className="hover-border" href="">
                    {"аксесуари".toUpperCase()}
                  </a>
                  <Submenu title={"XXXXX"} />
                </li>
                <li>
                  <a className="hover-border" href="">
                    {"подарунки".toUpperCase()}
                  </a>
                  <Submenu title={"XXXXX"} />
                </li> */}
            </ul>
          </div>
        </nav>
      </div>
    );
    //} else {
    //return null;
    //}
  }
}

export default Navbar;
