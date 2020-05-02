import React, { Component } from "react";
import "./sliderThree.css";
import TopUnit from "../../components/top-unit/TopUnit";

class SliderThree extends Component {
  constructor() {
    super();

    this.state = {
      slideChosen: false,
      sectionChosen: "",

      sect3items: {
        section1: [
          {
            title: "Schwarzkopf Professional Osis + Mess Up.",
            description:
              " Віск для волосся з матовим ефектом. Цей віск призначений для укладання і моделювання зачіски, забезпечуючи середню фіксацію і матовий ефект.",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-01.jpg?alt=media&token=b745b1aa-c594-4c5d-8b66-6518c2da63e1",
            //imageUrl: "images/homepage-images/hp1.png",
            id: 1,
            linkUrl: "shop/hats",
            size: "xxxl-img",
          },
          {
            title: "C:EHKO",
            description:
              "Лак-Спрей для волосся сильної фіксації (Діамант [3]) - C:EHKO 400ml",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-02.jpg?alt=media&token=3bf24535-99c0-439f-8940-5bcf5787f4c9",
            //imageUrl: "images/homepage-images/img18.jpg",
            id: 2,
            linkUrl: "shop/jackets",
            size: "xl-img",
          },
          {
            title: "Schwarzkopf Professional Osis+ Flatliner",
            description:
              "Спрей для термоукладки волосся Schwarzkopf Professional Osis+ Flatliner.Властивості: забезпечує захист волосся від температури до 200 °C, бореться з неслухняним волоссям, створює тривалий гладенький ефект, захищає волосся від надмірної вологості, зменшує його посічення, середній рівень інтенсивності фіксації зачіски.",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-03.jpg?alt=media&token=463c271f-a263-4d3e-bcfe-93bd21df1da2",
            //imageUrl: "images/homepage-images/img17.jpg",
            id: 3,
            linkUrl: "shop/sneakers",
            size: "s-img",
          },
        ],
        section2: [
          {
            title: "Schwarzkopf Bonacure pH 4.5 Color Freeze Silver Shampoo",
            description: "Шампунь придающий серебристый оттенок волосам ",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-04.jpg?alt=media&token=1a152ae2-4759-40ce-85b1-7fb3e0f8ab06",
            //imageUrl: "images/homepage-images/hp1.png",
            id: 1,
            linkUrl: "shop/hats",
            size: "xxxl-img",
          },
          {
            title: "Schwarzkopf  BC Color Sulfate-Free Shampoo",
            description:
              "Безсульфатний шампунь для фарбованого волосся 250ml, 1000ml",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-05.jpg?alt=media&token=c28e60a3-66d4-4ba3-a3ee-c94cc23b1f4f",
            //imageUrl: "images/homepage-images/img18.jpg",
            id: 2,
            linkUrl: "shop/jackets",
            size: "xl-img",
          },
          {
            title: "INDOLA Kera Restore Маска для волосся",
            description:
              "Маска з кератином для волосся kera restore treatment для інтенсивного кератинового відновлення волосся.",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-06.jpg?alt=media&token=386d19c6-9630-43e1-ae7a-3e6e70ae669d",
            //imageUrl: "images/homepage-images/img17.jpg",
            id: 3,
            linkUrl: "shop/sneakers",
            size: "s-img",
          },
        ],
        section3: [
          {
            title: "Schwarzkopf Professional BONACURE Moisture",
            description:
              "Зволожуючий двофазний спрей-кондиціонер містить гліцеринові амінокислоти, молочно-протеїновий комплекс і пантенол. Цей склад інгредієнтів сприяє збільшенню вмісту вологи у структурі волосся, розплутує волосся, роблячи його більш слухняними, і значно полегшує процес розчісування.200мл   400мл",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-07.jpg?alt=media&token=b91f98b8-c5f1-488a-bee8-90c00779dba8",
            //imageUrl: "images/homepage-images/hp1.png",
            id: 1,
            linkUrl: "shop/hats",
            size: "xxxl-img",
          },
          {
            title: "ING Styl-ING Multiaction Spray '10 в 1'",
            description:
              "Швидко діючий мультиспрей Містить олію аргани, олію макадамі, екстракт шовку, насіння льону, активні речовини MFP, морські водорості, протеїни пшениці та амінокислоти кератину. Протеїни зерна, масло макадамі та аргани живлять, відновлюють, і випрямляють зневоднене волосся. Насіння льону та амінокислоти кератину зміцнюють та попереджають формування посічених кінчиків. Екстракт шовку, активні речовини MFP та морські водорості підтримують об`єм, надають блиск та сяйво волоссю та локонам.",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-08.jpg?alt=media&token=414b8e73-2562-4205-ae25-aa0d3af27254",
            //imageUrl: "images/homepage-images/img18.jpg",
            id: 2,
            linkUrl: "shop/jackets",
            size: "xl-img",
          },
          {
            title:
              "CEHKO Зільбервайс сріблясто-білий ополіскувач Silberweiss                                                                                          ",
            description:
              "Концентрований косметичний засіб, який надає анти-жовтий ефект. Підкреслює натуральну елегантність сивого, натурального світлого і освітленого волосся. Завдяки спеціальним компонентам ополіскувач, дозволяє видалити жовтий відтінок з знебарвленого і сивого волосся. Ополіскувач володіє чудовими кондиціонуючими властивостями.",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-09.jpg?alt=media&token=f0a071d3-0fe1-44fc-9428-762e60e74789",
            //imageUrl: "images/homepage-images/img17.jpg",
            id: 3,
            linkUrl: "shop/sneakers",
            size: "s-img",
          },
        ],
        section4: [
          {
            title:
              "ESTEL KERATIN комплекс для догляду за пошкодженим волоссям з кератином",
            description:
              "Спеціально розроблена колекція домашнього догляду ESTEL KERATIN швидко відновлює пошкоджене волосся та насищає волосся кератином.Шампунь для волосся ESTEL KERATIN, 250 мл м'яко очищує. Маска для волосся ESTEL KERATIN, 250 мл глибоко проникає у волокно волосини і забезпечує інтенсивну регенерацію зсередини. Кератинова вода для волосся ESTEL KERATIN, 100 мл зволожує, кератинізує, ущільнює, закріплює колір, розгладжує, має антистатичний ефект, забезпечує термозахист та УФ захист, 'запаює кінчики'.",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-10.jpg?alt=media&token=c19e8aac-89da-4bfb-92b4-a993fd2f50de",
            //imageUrl: "images/homepage-images/hp1.png",
            id: 1,
            linkUrl: "shop/hats",
            size: "xxxl-img",
          },
          {
            title: "C:EHKO C:Color Permanent Coloration",
            description:
              "C:EHKO C:Color Крем-фарба для волосся. Аміачна. 100% покриття сивини. 50мл Німеччина.",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-11.jpg?alt=media&token=3497aab2-a7ed-47f9-9075-e5185cb2f739",
            //imageUrl: "images/homepage-images/img18.jpg",
            id: 2,
            linkUrl: "shop/jackets",
            size: "xl-img",
          },
          {
            title: "Краска для волос Colorianne Prestige Brelil 100 мл",
            description:
              "Brelil Colorianne Prestige Професійна крем-фарба для волосся. Малоаміачна. М'яке фарбування. 100 мл. Італія.",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-12.jpg?alt=media&token=a13101b8-305b-4d7b-90ec-a477e917be85",
            //imageUrl: "images/homepage-images/img17.jpg",
            id: 3,
            linkUrl: "shop/sneakers",
            size: "s-img",
          },
        ],
      },
    };
  }
  render() {
    const { section1 } = this.state.sect3items;
    const { section2 } = this.state.sect3items;
    const { section3 } = this.state.sect3items;
    const { section4 } = this.state.sect3items;

    if (!this.state.slideChosen) {
      return (
        <div className="grey-fon">
          <div className="container-slider-topsales">
            <div className="slider-top">
              <div className="figure">
                <div className="background-image-sl-top">
                  <div className="temp-3">
                    <TopUnit
                      key={section1[0].id}
                      imageUrl={section1[0].imageUrl}
                      title={section1[0].title}
                      description={section1[0].description}
                    />

                    <TopUnit
                      key={section1[1].id}
                      imageUrl={section1[1].imageUrl}
                      title={section1[1].title}
                      description={section1[1].description}
                    />
                    <TopUnit
                      key={section1[2].id}
                      imageUrl={section1[2].imageUrl}
                      title={section1[2].title}
                      description={section1[2].description}
                    />
                  </div>
                </div>
                <div className="background-image-sl-top">
                  <div className="temp-3">
                    <TopUnit
                      key={section2[0].id}
                      imageUrl={section2[0].imageUrl}
                      title={section2[0].title}
                      description={section2[0].description}
                    />
                    <TopUnit
                      key={section2[1].id}
                      imageUrl={section2[1].imageUrl}
                      title={section2[1].title}
                      description={section2[1].description}
                    />
                    <TopUnit
                      key={section2[2].id}
                      imageUrl={section2[2].imageUrl}
                      title={section2[2].title}
                      description={section2[2].description}
                    />
                  </div>
                </div>
                <div className="background-image-sl-top">
                  <div className="temp-3">
                    <TopUnit
                      key={section3[0].id}
                      imageUrl={section3[0].imageUrl}
                      title={section3[0].title}
                      description={section3[0].description}
                    />
                    <TopUnit
                      key={section3[1].id}
                      imageUrl={section3[1].imageUrl}
                      title={section3[1].title}
                      description={section3[1].description}
                    />
                    <TopUnit
                      key={section3[2].id}
                      imageUrl={section3[2].imageUrl}
                      title={section3[2].title}
                      description={section3[2].description}
                    />
                  </div>
                </div>
                <div className="background-image-sl-top">
                  <div className="temp-3">
                    <TopUnit
                      key={section4[0].id}
                      imageUrl={section4[0].imageUrl}
                      title={section4[0].title}
                      description={section4[0].description}
                    />
                    <TopUnit
                      key={section4[1].id}
                      imageUrl={section4[1].imageUrl}
                      title={section4[1].title}
                      description={section4[1].description}
                    />
                    <TopUnit
                      key={section4[2].id}
                      imageUrl={section4[2].imageUrl}
                      title={section4[2].title}
                      description={section4[2].description}
                    />
                  </div>
                </div>

                <div className="background-image-sl-top">
                  <div className="temp-3">
                    <TopUnit
                      key={section1[0].id}
                      imageUrl={section1[0].imageUrl}
                      title={section1[0].title}
                      description={section1[0].description}
                    />

                    <TopUnit
                      key={section1[1].id}
                      imageUrl={section1[1].imageUrl}
                      title={section1[1].title}
                      description={section1[1].description}
                    />
                    <TopUnit
                      key={section1[2].id}
                      imageUrl={section1[2].imageUrl}
                      title={section1[2].title}
                      description={section1[2].description}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="nnn">
              <input
                type="radio"
                onChange={() =>
                  this.setState({
                    slideChosen: true,
                    sectionChosen: "section1",
                  })
                }
              />
              <input
                onChange={() =>
                  this.setState({
                    slideChosen: true,
                    sectionChosen: "section2",
                  })
                }
                type="radio"
              />
              <input
                type="radio"
                onChange={() =>
                  this.setState({
                    slideChosen: true,
                    sectionChosen: "section3",
                  })
                }
              />
              <input
                type="radio"
                onChange={() =>
                  this.setState({
                    slideChosen: true,
                    sectionChosen: "section4",
                  })
                }
              />
              <div className="nnn2">
                <input
                  onChange={() => {
                    return null;
                  }}
                  type="radio"
                  checked
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      switch (this.state.sectionChosen) {
        case "section1":
          return (
            <div className="grey-fon">
              <div className="container-one-image">
                <div className="slider-one">
                  <div className="background-image-sl-top">
                    <div className="temp-3">
                      <TopUnit
                        key={section1[0].id}
                        imageUrl={section1[0].imageUrl}
                        title={section1[0].title}
                        description={section1[0].description}
                      />

                      <TopUnit
                        key={section1[1].id}
                        imageUrl={section1[1].imageUrl}
                        title={section1[1].title}
                        description={section1[1].description}
                      />
                      <TopUnit
                        key={section1[2].id}
                        imageUrl={section1[2].imageUrl}
                        title={section1[2].title}
                        description={section1[2].description}
                      />
                    </div>
                  </div>
                </div>

                <div className="nnn">
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section1",
                      })
                    }
                    checked
                  />
                  <input
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section2",
                      })
                    }
                    type="radio"
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section3",
                      })
                    }
                  />

                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section4",
                      })
                    }
                  />
                </div>
              </div>
            </div>
          );
        case "section2":
          return (
            <div className="grey-fon">
              {/*  <div className="container-slider-topsales"> */}
              <div className="container-one-image">
                <div className="slider-one">
                  <div className="background-image-sl-top">
                    <div className="temp-3">
                      <TopUnit
                        key={section2[0].id}
                        imageUrl={section2[0].imageUrl}
                        title={section2[0].title}
                        description={section2[0].description}
                      />
                      <TopUnit
                        key={section2[1].id}
                        imageUrl={section2[1].imageUrl}
                        title={section2[1].title}
                        description={section2[1].description}
                      />
                      <TopUnit
                        key={section2[2].id}
                        imageUrl={section2[2].imageUrl}
                        title={section2[2].title}
                        description={section2[2].description}
                      />
                    </div>
                  </div>
                </div>

                <div className="nnn">
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section1",
                      })
                    }
                  />
                  <input
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section2",
                      })
                    }
                    type="radio"
                    checked
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section3",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section4",
                      })
                    }
                  />
                </div>
              </div>
            </div>
          );
        case "section3":
          return (
            <div className="grey-fon">
              {/*  <div className="container-slider-topsales"> */}
              <div className="container-one-image">
                <div className="slider-one">
                  <div className="background-image-sl-top">
                    <div className="temp-3">
                      <TopUnit
                        key={section3[0].id}
                        imageUrl={section3[0].imageUrl}
                        title={section3[0].title}
                        description={section3[0].description}
                      />
                      <TopUnit
                        key={section3[1].id}
                        imageUrl={section3[1].imageUrl}
                        title={section3[1].title}
                        description={section3[1].description}
                      />
                      <TopUnit
                        key={section3[2].id}
                        imageUrl={section3[2].imageUrl}
                        title={section3[2].title}
                        description={section3[2].description}
                      />
                    </div>
                  </div>
                </div>
                <div className="nnn">
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section1",
                      })
                    }
                  />
                  <input
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section2",
                      })
                    }
                    type="radio"
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section3",
                      })
                    }
                    checked
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section4",
                      })
                    }
                  />
                </div>
              </div>
            </div>
          );
        case "section4":
          return (
            <div className="grey-fon">
              {/*  <div className="container-slider-topsales"> */}
              <div className="container-one-image">
                <div className="slider-one">
                  <div className="background-image-sl-top">
                    <div className="temp-3">
                      <TopUnit
                        key={section4[0].id}
                        imageUrl={section4[0].imageUrl}
                        title={section4[0].title}
                        description={section4[0].description}
                      />
                      <TopUnit
                        key={section4[1].id}
                        imageUrl={section4[1].imageUrl}
                        title={section4[1].title}
                        description={section4[1].description}
                      />
                      <TopUnit
                        key={section4[2].id}
                        imageUrl={section4[2].imageUrl}
                        title={section4[2].title}
                        description={section4[2].description}
                      />
                    </div>
                  </div>
                </div>
                <div className="nnn">
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section1",
                      })
                    }
                  />
                  <input
                    value="st"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section2",
                      })
                    }
                    type="radio"
                  />
                  <input
                    type="radio"
                    value="st1"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section3",
                      })
                    }
                  />
                  <input
                    type="radio"
                    value="st2"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section4",
                      })
                    }
                    checked
                  />
                </div>
              </div>
            </div>
          );
        default:
          console.log("hello");
          return null;
      }
    }
  }
}

export default SliderThree;
