import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Submenu from "./Submenu";
import firebase, { firestore } from "../../firebase/FirebaseUtils";

import "./navbar.css";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      //clearSubmenu: true,
      navbarMenuTest: [
        {
          title: "парфуми",
          order: "01",
          submenuItemsInColumn: {
            first: "15",
            second: "50",
            third: "75",
            forth: "90",
            fifth: "115",
            sixth: "130",
          },

          subMenu: [
            { title: "", number: "000000" },

            { title: "-чоловiчi", number: "00000000" },
            { title: "-нишевi", number: "00000000" },
          ],
        },
        {
          title: "макияж",
          order: "02",
          submenuItemsInColumn: {
            first: "18",
            second: "38",
            third: "50",
            forth: "67",
            fifth: "84",
            sixth: "99",
          },

          subMenu: [
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fmakeupmakeup1.jpg?alt=media&token=66c02249-c53e-41f8-a952-f16693a1031a",
              number: "000000",
            },
            { title: "#БРОВИ", number: "000000" },
            { title: ".Фарбування брів і вій", number: "00000000" },
            { title: "-Фарби для брів і вій", number: "00000000" },
            { title: "-Хна для брів і вій", number: "00000000" },
            { title: "-Окисники", number: "00000000" },
            { title: "-Спеціальні засоби", number: "00000000" },
            { title: ".Макіяж брів", number: "00000000" },
            { title: "-Віск", number: "00000000" },
            { title: "-Гель", number: "00000000" },
            { title: "-Туш", number: "00000000" },
            { title: "-Тіні", number: "00000000" },
            { title: "-Пудра", number: "00000000" },
            { title: "-Олівці", number: "00000000" },
            { title: "-Маркери", number: "00000000" },
            { title: ".Тінти", number: "00000000" },
            { title: ".Сироватки для росту брів і вій", number: "00000000" },
            { title: ".Пінцети", number: "00000000" },
            { title: "#ОБЛИЧЧЯ", number: "00000000" },
            { title: ".Бази/основи/праймери", number: "00000000" },
            { title: ".Тональні креми", number: "00000000" },
            { title: "-Зволожуючі", number: "00000000" },
            { title: "-Матуючі", number: "00000000" },
            { title: "-ВВ креми", number: "00000000" },
            { title: "-СС креми", number: "00000000" },
            { title: ".Тональні основи", number: "00000000" },
            { title: ".Корекція недоліків", number: "00000000" },
            { title: "-Консилери", number: "00000000" },
            { title: "-Коректори", number: "00000000" },
            { title: ".Контурінг", number: "00000000" },
            { title: "-Хайлайтери", number: "00000000" },
            { title: "-Скульптори", number: "00000000" },
            { title: "-Бронзери", number: "00000000" },
            { title: "-Рум'яна", number: "00000000" },
            { title: "-Палетки", number: "00000000" },

            { title: ".Пудри", number: "00000000" },
            { title: ".Фіксатори макіяжу", number: "00000000" },
            { title: ".Палетки", number: "00000000" },

            { title: "#ГУБИ", number: "00000000" },
            { title: ".Губна помада", number: "00000000" },
            { title: "-Глянцеві помади", number: "00000000" },
            { title: "-Матові помади", number: "00000000" },
            { title: "-Помади з блиском", number: "00000000" },
            { title: ".Блиски для губ", number: "00000000" },
            { title: ".Бальзами для губ", number: "00000000" },
            { title: ".Олівці контурні для губ", number: "00000000" },
            { title: "-Дерев'яні", number: "00000000" },
            { title: "-Автоматичні", number: "00000000" },
            { title: ".Палетки", number: "00000000" },
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fmakeupmakeup2.jpg?alt=media&token=c117ff15-e225-450e-b578-6b2c2b95eaa7",
              number: "99999996",
            },
            { title: "#ОЧІ", number: "00000000" },
            { title: ".Для вій", number: "00000000" },
            { title: "-Основа під туш", number: "00000000" },
            { title: "-Туш для вій", number: "00000000" },
            {
              title: "-Сироватки для росту і укріплення вій",
              number: "00000000",
            },
            { title: ".Для повік", number: "00000000" },
            { title: "-Олівці контурні", number: "00000000" },
            { title: "-Підводки", number: "00000000" },
            { title: "-База для тіней", number: "00000000" },
            { title: "-Тіні для повік", number: "00000000" },
            { title: "-иалетки з тінями", number: "00000000" },

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
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fmakeupmakeup3.jpg?alt=media&token=1b2f4523-7a5d-4f5e-8b93-4a7ecf25b37e",
              number: "99999997",
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
          order: "03",
          code: "000001",
          submenuItemsInColumn: {
            first: "17",
            second: "39",
            third: "55",
            forth: "79",
            fifth: "98",
            sixth: "150",
          },
          subMenu: [
            {
              title: "#ФАРБУВАННЯ ",
              code: "000002",
              number: "03010000",
              level: "2",
            },

            {
              title: ".Фарбники",
              code: "000003",
              number: "03010100",
              level: "3",
            },
            {
              title: "-Аміачні",
              code: "000004",
              number: "03010101",
              level: "4",
            },
            {
              title: "-Безаміачні",
              code: "000005",
              number: "03010102",
              level: "4",
            },
            {
              title: "-Пігменти прямої дії",
              code: "000006",
              number: "03010103",
              level: "4",
            },
            {
              title: "-Фарбуючі шампуні, маски, спреї",
              code: "000007",
              number: "03010104",
              level: "4",
            },
            {
              title: "-Анти-жовті засоби",
              code: "000008",
              number: "03010105",
              level: "4",
            },
            {
              title: ".Освітлюючі засоби",
              code: "000009",
              number: "03010200",
              level: "3",
            },
            {
              title: ".Окисники",
              code: "000010",
              number: "03010300",
              level: "3",
            },
            {
              title: ".Технічні засоби",
              code: "000011",
              number: "03010400",
              level: "3",
            },
            {
              title: "-Глибока очистка",
              code: "000012",
              number: "03010401",
              level: "4",
            },
            {
              title: "-Стабілізатори",
              code: "000013",
              number: "03010402",
              level: "4",
            },
            {
              title: "-Деперманенти",
              code: "000014",
              number: "03010403",
              level: "4",
            },
            {
              title: "-Засоби д/зняття фарби з волосся",
              code: "000015",
              number: "03010404",
              level: "4",
            },
            {
              title: "-Засоби для видалення фарби з шкіри",
              code: "000016",
              number: "03010405",
              level: "4",
            },
            {
              title: "-Захистні сироватки",
              code: "000017",
              number: "03010406",
              level: "4",
            },
            {
              title: "-Добавки до фарби",
              code: "000018",
              number: "03010407",
              level: "4",
            },

            {
              title: "# ДОГЛЯД ЗА ВОЛОССЯМ ",
              code: "000019",
              number: "03020000",
              level: "2",
            },

            {
              title: ".Шампуні",
              code: "000020",
              number: "03020100",
              level: "3",
            },
            {
              title: "-Сульфатні",
              code: "000021",
              number: "03020101",
              level: "4",
            },
            {
              title: "-Безсульфатні",
              code: "000022",
              number: "03020102",
              level: "4",
            },
            {
              title: "-Лікувальні",
              code: "000023",
              number: "03020103",
              level: "4",
            },
            {
              title: "-Фарбуючі",
              code: "000024",
              number: "03020104",
              level: "4",
            },
            {
              title: "-Анти-жовті",
              code: "000025",
              number: "03020105",
              level: "4",
            },
            {
              title: "-Сульфатні",
              code: "000026",
              number: "03020106",
              level: "4",
            },
            {
              title: "-Сухі шампуні",
              code: "000027",
              number: "03020107",
              level: "4",
            },
            {
              title: "-Чоловічі",
              code: "000028",
              number: "03020108",
              level: "4",
            },
            {
              title: "-Дитячі",
              code: "000029",
              number: "03020109",
              level: "4",
            },
            {
              title: ".Кондиціонери",
              code: "000030",
              number: "03020200",
              level: "3",
            },
            { title: ".Маски", code: "000031", number: "03020300", level: "3" },
            {
              title: ".Незмивні засоби",
              code: "000032",
              number: "03020400",
              level: "3",
            },
            {
              title: "-Спреї/лосьйони",
              code: "000033",
              number: "03020401",
              level: "4",
            },
            {
              title: "-Для кінчиків",
              code: "000034",
              number: "03020402",
              level: "4",
            },
            {
              title: "-Сироватки/флюїди/емульсії/еліксири",
              code: "000035",
              number: "03020403",
              level: "4",
            },
            {
              title: "-Термозахист",
              code: "000036",
              number: "03020404",
              level: "4",
            },
            {
              title: "-Пілінги",
              code: "000037",
              number: "03020405",
              level: "4",
            },
            { title: "-Креми", code: "000038", number: "03020406", level: "4" },
            { title: "-Масло", code: "000039", number: "03020407", level: "4" },
            {
              title: "-Піни/муси",
              code: "000040",
              number: "03020408",
              level: "4",
            },

            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2Fimg36.jpg?alt=media&token=b4df2b85-bd8b-4043-ad10-7de71d7261a2",
              code: "000000",
              number: "99999998",
              level: "0",
            },
            {
              title: "#ПРИЗНАЧЕННЯ",
              code: "000041",
              number: "03030000",
              level: "2",
            },
            {
              title: "-Відновлення",
              code: "000042",
              number: "03030001",
              level: "4",
            },
            {
              title: "-Лікування",
              code: "000043",
              number: "03030002",
              level: "4",
            },
            { title: "-Об'єм", code: "000044", number: "03030003", level: "4" },
            {
              title: "-Гладкість",
              code: "000045",
              number: "03030004",
              level: "4",
            },
            {
              title: "-Кучеряве волосся",
              code: "000046",
              number: "03030005",
              level: "4",
            },
            {
              title: "-Для блонду",
              code: "000047",
              number: "03030006",
              level: "4",
            },
            {
              title: "-Зволоження",
              code: "000048",
              number: "03030007",
              level: "4",
            },
            {
              title: "-Фарбоване волосся",
              code: "000049",
              number: "03030008",
              level: "4",
            },
            {
              title: "-Фарбуючі та анти-жовті засоби",
              code: "000050",
              number: "03030009",
              level: "4",
            },
            {
              title: "-Захист волосся від сонця",
              code: "000051",
              number: "03030010",
              level: "4",
            },
            {
              title: "-Для довгого волосся",
              code: "000052",
              number: "03030011",
              level: "4",
            },
            {
              title: "-Для щоденного використання",
              code: "000053",
              number: "03030012",
              level: "4",
            },
            {
              title: "-Чоловікам",
              code: "000054",
              number: "03030013",
              level: "4",
            },
            { title: "-Дітям", code: "000055", number: "03030014", level: "4" },

            {
              title: "#КАТЕГОРІЇ ДЛЯ СТАЙЛІНГУ",
              code: "000056",
              number: "03040000",
              level: "2",
            },
            {
              title: "-Для об'єму",
              code: "000057",
              number: "03040001",
              level: "4",
            },
            {
              title: "-Для гладкості",
              code: "000058",
              number: "03040002",
              level: "4",
            },
            {
              title: "-Для текстури",
              code: "000059",
              number: "03040003",
              level: "4",
            },
            {
              title: "-Для фіксації зачіски",
              code: "000060",
              number: "03040004",
              level: "4",
            },
            {
              title: "-Для випрямлення",
              code: "000061",
              number: "03040005",
              level: "4",
            },
            {
              title: "-Для кучерів",
              code: "000062",
              number: "03040006",
              level: "4",
            },
            {
              title: "-Для блиску",
              code: "000063",
              number: "03040007",
              level: "4",
            },
            {
              title: "-Для чоловіків",
              code: "000064",
              number: "03040008",
              level: "4",
            },
            {
              title: "-Праймери/Термозахист",
              code: "000065",
              number: "03040009",
              level: "4",
            },

            {
              title: "#СТАЙЛІНГ",
              code: "000066",
              number: "03050000",
              level: "2",
            },
            { title: "-Лаки", code: "000110", number: "03050001", level: "4" },
            {
              title: "-Піни/муси",
              code: "000067",
              number: "03050002",
              level: "4",
            },
            {
              title: "-Спреї/лосьйони",
              code: "000069",
              number: "03050003",
              level: "4",
            },
            {
              title: "-Термозахист/праймери",
              code: "000070",
              number: "03050004",
              level: "4",
            },
            {
              title: "-Воски/помади",
              code: "000071",
              number: "03050005",
              level: "4",
            },
            { title: "-Гелі", code: "000072", number: "03050006", level: "4" },
            {
              title: "-Паста/глина",
              code: "000073",
              number: "03050007",
              level: "4",
            },
            {
              title: "-Желе/суфле",
              code: "000074",
              number: "03050008",
              level: "4",
            },

            { title: "-Пудри", code: "000075", number: "03050009", level: "4" },
            { title: "-Клеї", code: "000076", number: "03050010", level: "4" },
            {
              title: "-Крем/молочко",
              code: "000077",
              number: "03050011",
              level: "4",
            },
            {
              title: "-Сухі шампуні",
              code: "000078",
              number: "03050012",
              level: "4",
            },
            {
              title: "-Сироватки/флюїди/емульсії",
              code: "000079",
              number: "03050013",
              level: "4",
            },

            {
              title: "#АКСЕСУАРИ",
              code: "000080",
              number: "03060000",
              level: "2",
            },
            {
              title: ".Для фарбування",
              code: "000081",
              number: "03060100",
              level: "3",
            },
            {
              title: "-Пензлики для фарбування",
              code: "000082",
              number: "03060101",
              level: "4",
            },
            {
              title: "-Мисочки та шейкери",
              code: "000083",
              number: "03060102",
              level: "4",
            },
            {
              title: "-Вінчики та шпателі",
              code: "000084",
              number: "03060103",
              level: "4",
            },
            {
              title: "-Фартухи",
              code: "000085",
              number: "03060104",
              level: "4",
            },
            {
              title: "-Коміри",
              code: "000086",
              number: "03060105",
              level: "4",
            },
            {
              title: "-Пеньюари",
              code: "000087",
              number: "03060106",
              level: "4",
            },
            {
              title: "-Перукарські зажими",
              code: "000088",
              number: "03060107",
              level: "4",
            },
            {
              title: "-Фольга",
              code: "000089",
              number: "03060108",
              level: "4",
            },
            {
              title: "-Гребінці",
              code: "000090",
              number: "03060109",
              level: "4",
            },
            { title: "-Ваги", code: "000091", number: "03060110", level: "4" },
            {
              title: "-Ключики для фарби",
              code: "000092",
              number: "03060111",
              level: "4",
            },
            {
              title: "-Розпирскувачі",
              code: "000093",
              number: "03060112",
              level: "4",
            },
            {
              title: "-Рукавички",
              code: "000094",
              number: "03060113",
              level: "4",
            },
            {
              title: "-Шапочки для мелірування",
              code: "000095",
              number: "03060114",
              level: "4",
            },
            {
              title: ".Бігуді і папілоти",
              code: "000096",
              number: "03060200",
              level: "3",
            },
            {
              title: ".Краби і зажими",
              code: "000097",
              number: "03060300",
              level: "3",
            },
            {
              title: ".Резинки та шпильки",
              code: "000098",
              number: "03060400",
              level: "3",
            },
            {
              title: ".Фени, дифузори, праски",
              code: "000099",
              number: "03060500",
              level: "3",
            },
            {
              title: ".Ножиці для стрижки",
              code: "000100",
              number: "03060600",
              level: "3",
            },
            {
              title: ".Щітки і розчіски",
              code: "000101",
              number: "03060700",
              level: "3",
            },
            {
              title: "-Щітки для укладки",
              code: "000102",
              number: "03060701",
              level: "4",
            },
            {
              title: "-Масажні щітки",
              code: "000103",
              number: "03060702",
              level: "4",
            },
            {
              title: "-Гребінці",
              code: "000104",
              number: "03060703",
              level: "4",
            },
            {
              title: "-Чоловічі",
              code: "000105",
              number: "03060704",
              level: "4",
            },
            {
              title: "-Дитячі",
              code: "000106",
              number: "03060705",
              level: "4",
            },
            {
              title: "-Компактні",
              code: "000107",
              number: "03060706",
              level: "4",
            },

            { title: ".Ваги", code: "000108", number: "03060800", level: "3" },
            { title: ".Інше", code: "000109", number: "03060900", level: "3" },
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2Fimg34.jpg?alt=media&token=6ef63bc3-9636-4049-94d7-2f1ddfb7c52d",
              code: "00000",
              number: "99999999",
              level: "0",
            },
          ],
        },

        {
          title: "нiгтi",
          order: "04",
          submenuItemsInColumn: {
            first: "1",
            second: "50",
            third: "75",
            forth: "90",
            fifth: "115",
            sixth: "130",
          },
          subMenu: [
            {
              title: "#НІГТІ",
              code: "000171",
              number: "04010000",
              level: "2",
            },
            {
              title: ".Лікувальні та укріплюючі засоби",
              code: "000172",
              number: "04010100",
              level: "3",
            },

            {
              title: ".Догляд за кутикулою",
              code: "000173",
              number: "04010200",
              level: "3",
            },
            {
              title: "-Засоби для видалення кутикули",
              code: "000174",
              number: "04010201",
              level: "4",
            },
            {
              title: "-Засоби для змякчення кутикули",
              code: "000175",
              number: "04010202",
              level: "4",
            },
            {
              title: ".Засоби для покриття нігтів лаком",
              code: "000176",
              number: "04010300",
              level: "3",
            },
            {
              title: "-Знежирювачі",
              code: "000177",
              number: "04010301",
              level: "4",
            },
            {
              title: "-Основи",
              code: "000178",
              number: "04010302",
              level: "4",
            },
            {
              title: "-Лаки для нігтів",
              code: "000179",
              number: "04010303",
              level: "4",
            },
            {
              title: "-Закріплювачі",
              code: "000180",
              number: "04010304",
              level: "4",
            },
            {
              title: "-Прискорювачі сушіння",
              code: "000181",
              number: "04010305",
              level: "4",
            },
            {
              title: "-Засоби для зняття лаку",
              code: "000182",
              number: "04010306",
              level: "4",
            },
            {
              title: ".Нарощування і покриття нігтів гелем",
              code: "000183",
              number: "04010400",
              level: "3",
            },
            {
              title: "-Лампи",
              code: "000184",
              number: "04010401",
              level: "4",
            },
            {
              title: "-Гелі-архітектори",
              code: "000185",
              number: "04010402",
              level: "4",
            },
            {
              title: "-Знежирювачі",
              code: "000186",
              number: "04010403",
              level: "4",
            },
            {
              title: "-Підготовлювачі",
              code: "000187",
              number: "04010404",
              level: "4",
            },
            {
              title: "-Праймери",
              code: "000188",
              number: "04010405",
              level: "4",
            },
            {
              title: "-Бази",
              code: "000189",
              number: "04010406",
              level: "4",
            },
            {
              title: "-Гель-лаки",
              code: "000190",
              number: "04010407",
              level: "4",
            },
            {
              title: "-Топи",
              code: "000191",
              number: "04010408",
              level: "4",
            },
            {
              title: "-Засоби для зняття липкого шару",
              code: "000192",
              number: "04010409",
              level: "4",
            },
            {
              title: "-Засоби для зняття гель-лаку",
              code: "000193",
              number: "04010410",
              level: "4",
            },
            {
              title: "-Стартові набори",
              code: "000194",
              number: "04010411",
              level: "4",
            },
            {
              title: ".Інструменти для манікюру та педікюру",
              code: "000195",
              number: "04010500",
              level: "3",
            },
            {
              title: "-Пилочки",
              code: "000196",
              number: "04010501",
              level: "4",
            },
            {
              title: "-Кусачки",
              code: "000197",
              number: "04010502",
              level: "4",
            },
            {
              title: "-Ножиці",
              code: "000198",
              number: "04010503",
              level: "4",
            },
            {
              title: "-Кніпери",
              code: "000199",
              number: "04010504",
              level: "4",
            },
            {
              title: "-Лопатки і кюретки",
              code: "000200",
              number: "04010505",
              level: "4",
            },
            {
              title: "-Дерев'яні палички",
              code: "000201",
              number: "04010506",
              level: "4",
            },
            {
              title: "-Терки та пемзи",
              code: "000202",
              number: "04010507",
              level: "4",
            },
            {
              title: "-Щітки",
              code: "000203",
              number: "04010508",
              level: "4",
            },
            {
              title: "-Набори інструментів",
              code: "000204",
              number: "04010509",
              level: "4",
            },
            {
              title: "-Чохли для інструментів",
              code: "000205",
              number: "04010510",
              level: "4",
            },
            {
              title: "-Аксесуари",
              code: "000206",
              number: "04010511",
              level: "4",
            },
          ],
        },
        {
          title: "догляд за шкiрою",
          order: "05",
          submenuItemsInColumn: {
            first: "1",
            second: "17",
            third: "29",
            forth: "45",
            fifth: "64",
            sixth: "110",
          },
          subMenu: [
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fmakeupskin1.jpg?alt=media&token=ed13093c-e17d-4d28-9f7f-40f28f615ef7",
              code: "00000",
              number: "99999995",
              level: "0",
            },
            {
              title: "#ОБЛИЧЧЯ",
              code: "000108",
              number: "05010000",
              level: "2",
            },
            {
              title: ".Зволоження та живлення",
              code: "000109",
              number: "05010100",
              level: "3",
            },
            {
              title: "-Креми та гелі  денні",
              code: "000110",
              number: "05010101",
              level: "4",
            },
            {
              title: "-Креми нічні",
              code: "000111",
              number: "05010102",
              level: "4",
            },
            {
              title: "-Креми для шкіри навколо очей",
              code: "000112",
              number: "05010103",
              level: "4",
            },
            {
              title: "-Сироватки/бустери/філлери",
              code: "000113",
              number: "05010104",
              level: "4",
            },
            {
              title: "-Маски",
              code: "000114",
              number: "05010105",
              level: "4",
            },
            {
              title: ".Очищення обличчя",
              code: "000115",
              number: "05010200",
              level: "3",
            },
            {
              title: "-Гелі та піни для вмивання",
              code: "000116",
              number: "05010201",
              level: "4",
            },
            {
              title: "-Міцелярні води",
              code: "000117",
              number: "05010202",
              level: "4",
            },
            {
              title: "-Тоніки/лосьйони/молочко",
              code: "000118",
              number: "05010203",
              level: "4",
            },
            {
              title: "-Демакіяж",
              code: "000119",
              number: "05010204",
              level: "4",
            },
            {
              title: "-Пілінги та скраби",
              code: "000120",
              number: "05010205",
              level: "4",
            },
            {
              title: "-Очищуючі маски",
              code: "000121",
              number: "05010206",
              level: "4",
            },
            {
              title: "-Спонжі для очищення",
              code: "000122",
              number: "05010207",
              level: "4",
            },
            {
              title: ".Захист від сонця",
              code: "000123",
              number: "05010300",
              level: "3",
            },
            {
              title: ".Догляд за губами",
              code: "000124",
              number: "05010400",
              level: "3",
            },
            {
              title: "-Бальзами",
              code: "000125",
              number: "05010401",
              level: "4",
            },
            {
              title: "-Креми/сироватки",
              code: "000126",
              number: "05010402",
              level: "4",
            },
            {
              title: "-Скраби",
              code: "000127",
              number: "05010403",
              level: "4",
            },
            {
              title: ".Аксесуари для косметичних процедур",
              code: "000128",
              number: "05010500",
              level: "3",
            },
            {
              title: "-Косметологічні інструменти",
              code: "000129",
              number: "05010501",
              level: "4",
            },
            {
              title: "-Пензлики для нанесення масок",
              code: "000130",
              number: "05010502",
              level: "4",
            },
            {
              title: "-Миски та набори для масок",
              code: "000131",
              number: "05010503",
              level: "4",
            },
            {
              title: "-Спонжі для вмивання",
              code: "000132",
              number: "05010504",
              level: "4",
            },
            {
              title: ".Догляд за бровами та віями",
              code: "000133",
              number: "05010600",
              level: "3",
            },
            {
              title: "-Сироватки для росту та укріплення",
              code: "000134",
              number: "05010601",
              level: "4",
            },
            {
              title: "-Фарбування вій і брів",
              code: "000135",
              number: "05010602",
              level: "4",
            },
            {
              title: "#ТІЛО",
              code: "000136",
              number: "05020000",
              level: "2",
            },
            {
              title: ".Для душу та ванни",
              code: "000137",
              number: "05020100",
              level: "3",
            },
            {
              title: "-Гелі для душу",
              code: "000138",
              number: "05020101",
              level: "4",
            },
            {
              title: "-Скраби і пілінги",
              code: "000139",
              number: "05020102",
              level: "4",
            },
            {
              title: "-Піни для ванни",
              code: "000140",
              number: "05020103",
              level: "4",
            },
            {
              title: "-Мочалки для душу",
              code: "000141",
              number: "05020104",
              level: "4",
            },
            {
              title: ".Живлення та зволоження шкіри",
              code: "000142",
              number: "05020200",
              level: "3",
            },
            {
              title: "-Лосьйони",
              code: "000143",
              number: "05020201",
              level: "4",
            },
            {
              title: "-Креми",
              code: "000144",
              number: "05020202",
              level: "4",
            },
            {
              title: "-Олії",
              code: "000145",
              number: "05020203",
              level: "4",
            },
            {
              title: ".Антицелюлітні засоби",
              code: "000146",
              number: "05020300",
              level: "3",
            },
            {
              title: ".Захист від сонця",
              code: "000147",
              number: "05020400",
              level: "3",
            },
            {
              title: ".Засоби для засмаги",
              code: "000148",
              number: "05020500",
              level: "3",
            },
            {
              title: ".Догляд за руками",
              code: "000149",
              number: "05020600",
              level: "3",
            },
            {
              title: "-Креми для рук",
              code: "000150",
              number: "05020601",
              level: "4",
            },
            {
              title: "-Пілінг",
              code: "000151",
              number: "05020602",
              level: "4",
            },
            {
              title: "-Лікувальні креми",
              code: "000152",
              number: "05020603",
              level: "4",
            },
            {
              title: "-Маски для рук",
              code: "000153",
              number: "05020604",
              level: "4",
            },
            {
              title: "-Олії для рук і кутикули",
              code: "000154",
              number: "05020605",
              level: "4",
            },
            {
              title: "-Спеціальні засоби",
              code: "000155",
              number: "05020606",
              level: "4",
            },
            {
              title: ".Догляд за ногами",
              code: "000156",
              number: "05020700",
              level: "3",
            },
            {
              title: "-Крем для ступнів",
              code: "000157",
              number: "05020701",
              level: "4",
            },
            {
              title: "-Пілінг",
              code: "000158",
              number: "05020702",
              level: "4",
            },
            {
              title: "-Лікувальні креми",
              code: "000159",
              number: "05020703",
              level: "4",
            },
            {
              title: "-Пемзи і терки для ступнів",
              code: "000160",
              number: "05020704",
              level: "4",
            },
            {
              title: "-Спеціальні засоби",
              code: "000161",
              number: "05020705",
              level: "4",
            },
            {
              title: ".Депіляція",
              code: "000162",
              number: "05020800",
              level: "3",
            },
            {
              title: "-Креми та гелі",
              code: "000163",
              number: "05020801",
              level: "4",
            },
            {
              title: "-Воскова депіляція",
              code: "000164",
              number: "05020802",
              level: "4",
            },
            {
              title: "-Шугаринг",
              code: "000165",
              number: "05020803",
              level: "4",
            },
            {
              title: ".Дезодоранти",
              code: "000166",
              number: "05020900",
              level: "3",
            },
            {
              title: "-Спреї",
              code: "000167",
              number: "05020901",
              level: "4",
            },
            {
              title: "-Роликові",
              code: "000168",
              number: "05020902",
              level: "4",
            },
            {
              title: "-Стіки",
              code: "000169",
              number: "05020903",
              level: "4",
            },
            {
              title: "-Креми",
              code: "000170",
              number: "05020904",
              level: "4",
            },
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fmakeupskin2.jpg?alt=media&token=f61c5107-651e-4902-8262-49261a0b847b",
              code: "000000",
              number: "",
              level: "4",
            },
          ],
        },
        {
          title: "чоловiкам",
          order: "06",
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
          order: "07",
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
          order: "08",
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
          order: "09",
          submenuItemsInColumn: {
            first: "15",
            second: "50",
            third: "75",
            forth: "90",
            fifth: "115",
            sixth: "130",
          },
          subMenu: [],
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

  /*  last
      code: "000206",
      number: "04010511",*/
  /*
  componentDidMount() {
    const { navbarMenuTest } = this.state;
    console.log(navbarMenuTest, "navbarMenuTest");
    navbarMenuTest.map((mainmenu) => {
      firestore
        .collection("navbarTest")
        .doc()
        .set({ ...mainmenu });
    });
  }
*/

  //const navbarFBaseRef = firestore.collection("navbarTest").get();
  //navbarFBaseRef.map((element) => console.log(element.data()));
  //}
  /* componentDidMount() {
    const navbarFBaseRef = firebase.firestore().collection("navbar").get();
    navbarFBaseRef.map((element) => console.log(element.data()));
   */
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
