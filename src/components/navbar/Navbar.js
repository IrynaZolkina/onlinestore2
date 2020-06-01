import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import Submenu from "./Submenu";
import firebase, { firestore } from "../../firebase/FirebaseUtils";

import "./navbar.css";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      showSubmenu: true,
      navbarMenuTest: [
        //********* */  "подарунки",
        {
          title: "парфуми",
          order: "01",
          number: "01000000",
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
        //********* */  "макияж"
        {
          title: "макияж",
          order: "02",
          code: "000208",
          number: "02000000",
          submenuItemsInColumn: {
            first: "17",
            second: "37",
            third: "49",
            forth: "66",
            fifth: "83",
            sixth: "98",
          },

          subMenu: [
            { title: "#БРОВИ", code: "000210", number: "02010000" },
            {
              title: ".Фарбування брів і вій",
              code: "000211",
              number: "02010100",
            },
            {
              title: "-Фарби для брів і вій",
              code: "000212",
              number: "02010101",
            },
            {
              title: "-Хна для брів і вій",
              code: "000213",
              number: "02010102",
            },
            { title: "-Окисники", code: "000214", number: "02010103" },
            { title: "-Спеціальні засоби", code: "000215", number: "02010104" },
            { title: ".Макіяж брів", code: "000216", number: "02010200" },
            { title: "-Віск", code: "000217", number: "02010201" },
            { title: "-Гель", code: "000218", number: "02010202" },
            { title: "-Туш", code: "000219", number: "02010203" },
            { title: "-Тіні", code: "000220", number: "02010204" },
            { title: "-Пудра", code: "000221", number: "02010205" },
            { title: "-Олівці", code: "000222", number: "02010206" },
            { title: "-Маркери", code: "000223", number: "02010207" },
            { title: ".Тінти", code: "000224", number: "02010300" },
            {
              title: ".Сироватки для росту брів і вій",
              code: "000225",
              number: "02010400",
            },
            { title: ".Пінцети", code: "000226", number: "02010500" },
            { title: "#ОБЛИЧЧЯ", code: "000227", number: "02020000" },
            {
              title: ".Бази/основи/праймери",
              code: "000228",
              number: "02020100",
            },
            { title: ".Тональні креми", code: "000229", number: "02020200" },
            { title: "-Зволожуючі", code: "000230", number: "02020201" },
            { title: "-Матуючі", code: "000231", number: "02020202" },
            { title: "-ВВ креми", code: "000232", number: "02020203" },
            { title: "-СС креми", code: "000233", number: "02020204" },
            { title: ".Тональні основи", code: "000234", number: "02020300" },
            {
              title: ".Корекція недоліків",
              code: "000235",
              number: "02020400",
            },
            { title: "-Консилери", code: "000236", number: "02020401" },
            { title: "-Коректори", code: "000237", number: "02020402" },
            { title: ".Контурінг", code: "000238", number: "02020500" },
            { title: "-Хайлайтери", code: "000239", number: "02020501" },
            { title: "-Скульптори", code: "000240", number: "02020502" },
            { title: "-Бронзери", code: "000241", number: "02020503" },
            { title: "-Рум'яна", code: "000242", number: "02020504" },
            { title: "-Палетки", code: "000243", number: "02020505" },

            { title: ".Пудри", code: "000244", number: "02020600" },
            { title: ".Фіксатори макіяжу", code: "000245", number: "02020700" },
            { title: ".Палетки", code: "000246", number: "02020800" },

            { title: "#ГУБИ", code: "000247", number: "02030000" },
            { title: ".Губна помада", code: "000248", number: "02030100" },
            { title: "-Глянцеві помади", code: "000249", number: "02030101" },
            { title: "-Матові помади", code: "000250", number: "02030102" },
            { title: "-Помади з блиском", code: "000251", number: "02030103" },
            { title: ".Блиски для губ", code: "000252", number: "02030200" },
            { title: ".Бальзами для губ", code: "000253", number: "02030300" },
            {
              title: ".Олівці контурні для губ",
              code: "000254",
              number: "02030400",
            },
            { title: "-Дерев'яні", code: "000255", number: "02030401" },
            { title: "-Автоматичні", code: "000256", number: "02030402" },
            { title: ".Палетки", code: "000257", number: "02030500" },
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fmakeupmakeup2.jpg?alt=media&token=c117ff15-e225-450e-b578-6b2c2b95eaa7",
              number: "99999996",
            },
            { title: "#ОЧІ", code: "000258", number: "02040000" },
            { title: ".Для вій", code: "000259", number: "02040100" },
            { title: "-Основа під туш", code: "000260", number: "02040101" },
            { title: "-Туш для вій", code: "000261", number: "02040102" },
            {
              title: "-Сироватки для росту і укріплення вій",
              code: "000262",
              number: "02040103",
            },
            { title: ".Для повік", code: "000263", number: "02040200" },
            { title: "-Олівці контурні", code: "000264", number: "02040201" },
            { title: "-Підводки", code: "000265", number: "02040202" },
            { title: "-База для тіней", code: "000266", number: "02040203" },
            { title: "-Тіні для повік", code: "000267", number: "02040204" },
            { title: "-палетки з тінями", code: "000268", number: "02040205" },

            { title: ".Накладні вії", code: "000269", number: "02040300" },
            { title: "-Пучкові вії", code: "000270", number: "02040301" },
            { title: "-Комплекти вій", code: "000271", number: "02040302" },
            { title: "-Клей для вій", code: "000272", number: "02040303" },
            { title: "-Ремувер", code: "000273", number: "02040304" },
            { title: "-Пінцети", code: "000274", number: "02040305" },

            { title: "#АКСЕСУАРИ", code: "000275", number: "02050000" },
            { title: ".Аплікатори", code: "000276", number: "02050100" },
            { title: ".Пензлики", code: "000277", number: "02050200" },
            { title: "-Для тіней", code: "000278", number: "02050201" },
            { title: "-Для брів", code: "000279", number: "02050202" },
            { title: "-Для вій", code: "000280", number: "02050203" },
            { title: "-Для підводки", code: "000281", number: "02050204" },
            {
              title: "-Для тональних основ",
              code: "000282",
              number: "02050205",
            },
            { title: "-Для контурінгу", code: "000283", number: "02050206" },
            {
              title: "-Для рідких скульпторів",
              code: "000284",
              number: "02050207",
            },
            { title: "-Для пудри", code: "000285", number: "02050208" },
            { title: "-Для рум'ян", code: "000286", number: "02050209" },
            { title: "-Для губ", code: "000287", number: "02050210" },
            { title: ".Спонжі", code: "000288", number: "02050300" },
            { title: ".Пуховки для пудри", code: "000289", number: "02050400" },
            { title: ".Набори пензлів", code: "000290", number: "02050500" },
            { title: ".Пінцети", code: "000291", number: "02050600" },
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fmakeupmakeup1.jpg?alt=media&token=66c02249-c53e-41f8-a952-f16693a1031a",
              number: "99999994",
            },
            { title: "#ЗНЯТТЯ МАКІЯЖУ", code: "000292", number: "02060000" },
            { title: ".Міцелярні води", code: "000293", number: "02060100" },
            { title: ".Демакіяжи", code: "000294", number: "02060200" },
            {
              title: ".Спонжі для демакіяжу",
              code: "000295",
              number: "02060300",
            },
            {
              title: ".Серветки для демакіяжу",
              code: "000296",
              number: "02060400",
            },
          ],
        },
        //********* */  "волосся"
        {
          title: "волосся",
          order: "03",
          code: "000001",

          number: "03000000",
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
        //********* */  "нiгтi"
        {
          title: "нiгтi",
          order: "04",
          code: "000207",

          number: "04000000",
          submenuItemsInColumn: {
            first: "1",
            second: "50",
            third: "75",
            forth: "90",
            fifth: "115",
            sixth: "130",
          },
          subMenu: [
            /*  {
              title: "#НІГТІ",
              code: "000171",
              number: "04010000",
              level: "2",
            }, */
            {
              title: ".Лікувальні та укріплюючі засоби",
              code: "000172",
              number: "04000100",
              level: "3",
            },

            {
              title: ".Догляд за кутикулою",
              code: "000173",
              number: "04000200",
              level: "3",
            },
            {
              title: "-Засоби для видалення кутикули",
              code: "000174",
              number: "04000201",
              level: "4",
            },
            {
              title: "-Засоби для змякчення кутикули",
              code: "000175",
              number: "04000202",
              level: "4",
            },
            {
              title: ".Засоби для покриття нігтів лаком",
              code: "000176",
              number: "04000300",
              level: "3",
            },
            {
              title: "-Знежирювачі",
              code: "000177",
              number: "04000301",
              level: "4",
            },
            {
              title: "-Основи",
              code: "000178",
              number: "04000302",
              level: "4",
            },
            {
              title: "-Лаки для нігтів",
              code: "000179",
              number: "04000303",
              level: "4",
            },
            {
              title: "-Закріплювачі",
              code: "000180",
              number: "04000304",
              level: "4",
            },
            {
              title: "-Прискорювачі сушіння",
              code: "000181",
              number: "04000305",
              level: "4",
            },
            {
              title: "-Засоби для зняття лаку",
              code: "000182",
              number: "04000306",
              level: "4",
            },
            {
              title: ".Нарощування і покриття нігтів гелем",
              code: "000183",
              number: "04000400",
              level: "3",
            },
            {
              title: "-Лампи",
              code: "000184",
              number: "04000401",
              level: "4",
            },
            {
              title: "-Гелі-архітектори",
              code: "000185",
              number: "04000402",
              level: "4",
            },
            {
              title: "-Знежирювачі",
              code: "000186",
              number: "04000403",
              level: "4",
            },
            {
              title: "-Підготовлювачі",
              code: "000187",
              number: "04000404",
              level: "4",
            },
            {
              title: "-Праймери",
              code: "000188",
              number: "04000405",
              level: "4",
            },
            {
              title: "-Бази",
              code: "000189",
              number: "04000406",
              level: "4",
            },
            {
              title: "-Гель-лаки",
              code: "000190",
              number: "04000407",
              level: "4",
            },
            {
              title: "-Топи",
              code: "000191",
              number: "04000408",
              level: "4",
            },
            {
              title: "-Засоби для зняття липкого шару",
              code: "000192",
              number: "04000409",
              level: "4",
            },
            {
              title: "-Засоби для зняття гель-лаку",
              code: "000193",
              number: "04000410",
              level: "4",
            },
            {
              title: "-Стартові набори",
              code: "000194",
              number: "04000411",
              level: "4",
            },
            {
              title: ".Інструменти для манікюру та педікюру",
              code: "000195",
              number: "04000500",
              level: "3",
            },
            {
              title: "-Пилочки",
              code: "000196",
              number: "04000501",
              level: "4",
            },
            {
              title: "-Кусачки",
              code: "000197",
              number: "04000502",
              level: "4",
            },
            {
              title: "-Ножиці",
              code: "000198",
              number: "04000503",
              level: "4",
            },
            {
              title: "-Кніпери",
              code: "000199",
              number: "04000504",
              level: "4",
            },
            {
              title: "-Лопатки і кюретки",
              code: "000200",
              number: "04000505",
              level: "4",
            },
            {
              title: "-Дерев'яні палички",
              code: "000201",
              number: "04000506",
              level: "4",
            },
            {
              title: "-Терки та пемзи",
              code: "000202",
              number: "04000507",
              level: "4",
            },
            {
              title: "-Щітки",
              code: "000203",
              number: "04000508",
              level: "4",
            },
            {
              title: "-Набори інструментів",
              code: "000204",
              number: "04000509",
              level: "4",
            },
            {
              title: "-Чохли для інструментів",
              code: "000205",
              number: "04000510",
              level: "4",
            },
            {
              title: "-Аксесуари",
              code: "000206",
              number: "04000511",
              level: "4",
            },
          ],
        },
        //********* */  "догляд за шкiрою",
        {
          title: "догляд за шкiрою",
          order: "05",
          code: "000209",
          number: "05000000",
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
              code: "99999993",
              number: "",
              level: "4",
            },
          ],
        },
        //********* */  "чоловiкам",
        {
          title: "чоловiкам",
          order: "06",
          number: "06000000",
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
        //********* */  "дiтям",
        {
          title: "дiтям",
          order: "07",
          number: "07000000",
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
        //********* */  "аксесуари",
        {
          title: "аксесуари",
          order: "08",
          number: "08000000",
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
        //********* */  "подарунки",
        {
          title: "подарунки",
          order: "09",
          number: "09000000",
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
      code: "000296",
      number: "99999994",*/
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
  } */

  //const navbarFBaseRef = firestore.collection("navbarTest").get();
  //navbarFBaseRef.map((element) => console.log(element.data()));
  //}
  /* componentDidMount() {
    const navbarFBaseRef = firebase.firestore().collection("navbar").get();
    navbarFBaseRef.map((element) => console.log(element.data()));
   */
  render() {
    // if (this.state.clearSubmenu === true) {
    /* const navbarMenuTest2 = this.state.navbarMenuTest.map((el) =>
      el.subMenu.map((ell) => ell.title)
    ); */
    //console.log(navbarMenuTest2, "navbarMenuTest2");
    return (
      <div>
        <nav>
          <div className="container1">
            <ul className="menu-main">
              {this.state.navbarMenuTest.map((element, index) => {
                return (
                  <li className="menu-main-link" key={index}>
                    <NavLink
                      to={`/shop/${element.code}`}
                      className="hover-border"
                      onClick={() => {
                        this.setState({ showSubmenu: false });
                        setTimeout(
                          () => this.setState({ showSubmenu: true }),
                          5000
                        );
                      }}
                    >
                      {element.title.toUpperCase()}
                    </NavLink>
                    {this.state.showSubmenu && (
                      <Submenu
                        navbarSubMenu={element.subMenu}
                        submenuItemsInColumn={element.submenuItemsInColumn}
                      />
                    )}
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

export default withRouter(Navbar);
