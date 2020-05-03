import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Submenu from "./Submenu";

import "./navbar.css";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      clearSubmenu: true,
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
            "#ФАРБУВАННЯ",
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
            "-Засоби для видалення фарби з шкіри",
            "-Захистні сироватки",
            "-Добавки до фарби",
            "",
            "",
            "#ДОГЛЯД ЗА ВОЛОССЯМ",
            ".Шампуні",
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
            "-Пілінги",
            "-Креми",
            "-Масло",
            "-Піни/муси",
            "",
            "",
            "",
            "",

            "#КАТЕГОРII ДЛЯ ДОГЛЯДУ",
            "-Для відновлення волосся",
            "-Лікувальні серії",
            "-Для зволоження",
            "-Для об'єму",
            "-Для фарбованого волосся",
            "-Для гладкості",
            "-Для кучерявого волосся",
            "-Для блонду",
            "-Фарбуючі та анти-жовті засоби",
            "-Захист волосся від сонця",
            "-Для довгого волосся",
            "-Для щоденного використання",
            "-Для чоловіків",
            "-Для дітей",

            "#КАТЕГОРИИ ДЛЯ СТАЙЛИНГА",
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
            "-Пудри",
            "-Клеї",
            "-Крем/молочко",
            "-Сухі шампуні",
            "-Сироватки/флюїди/емульсії",
            "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2Fimg34.jpg?alt=media&token=6ef63bc3-9636-4049-94d7-2f1ddfb7c52d",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
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
            ".Щітки і розчіски",
            "-Щітки для укладки",
            "-Масажні щітки",
            "-Гребінці",
            "-Чоловічі",
            "-Дитячі",
            "-Компактні",
            ".Бігуді і папілоти",
            ".Краби і зажими",
            ".Резинки та шпильки",
            ".Ножиці для стрижки",
            ".Фени, дифузори, праски",
            ".Ваги",
            ".Інше",
            "",
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
  render() {
    if (this.state.clearSubmenu === true) {
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

                {this.state.navbarMenu.map((element, index) => {
                  return (
                    <li className="menu-main-link" key={index}>
                      {" "}
                      <NavLink to="/" className="hover-border">
                        {element.title.toUpperCase()}
                        {/* {element.title} */}
                      </NavLink>
                      <Submenu navbarSubMenu={element.subMenu} />
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
    } else {
      return null;
    }
  }
}

export default Navbar;
