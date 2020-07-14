import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.scss";
import {
  copartStates as states,
  iaaiStates as states1,
  ports as port,
  unlPorts as unloads,
} from "./data";

function App() {
  const [usStates, setStates] = useState([]); //площадки аукциона
  const [ports, setPorts] = useState(port); //порты загрузки
  const [firstC, setFirstc] = useState(); // перша координата для визначення відстані
  const [secondC, setSecondc] = useState(); // друга координата для визначення відстані
  const [a, setA] = useState(); //для визначення цифр
  const [dist, setDist] = useState(0); // відстань між координатами
  const [price, setPrice] = useState(0); // введена вартість користувачем
  const [insurence, setInsurence] = useState(0); // страховка
  const [sum, setSum] = useState(0); // сума аукціонного збору
  const [brokUs, setBrok] = useState(300); //вартість послуг брокера в америці
  const [exp, setExp] = useState(400); // експедування в Україні
  const [brokUa, setBrokUa] = useState(350); // вартість послуг брокера в Україні
  const [gocity, setGoCity] = useState(0); // якщо не Одеса то міняється на 450
  const [sumUa, setSumUa] = useState(0); // сума по україні
  const [ship, setShip] = useState(900); // доставка кораблем
  const [go, setGo] = useState(0); // якщо не на ходу
  const [big, setBig] = useState(0); // якщо джип
  const [cont, setCont] = useState(150); // погрузка в контейнер
  const [docs, setDocs] = useState(50); // документи
  const [shipInUs, setShipInUs] = useState(1000); // доставка по США (має мінятись, коли дадуть тарифи)
  const [allUs, setallUs] = useState(0); // вся доставка по США
  const [priceAll, setPriceAll] = useState(0); // вся доставка по США і Україні
  const [show, setShow] = useState(true); //

  let firstCoord = "";
  let secondCoord = "";
  let dis = 0;

  const handleChange = ({ target }) => {
    if (target.value === "copart") {
      setStates(states);
      setA(target.value);
    } else if (target.value === "iaai") {
      setStates(states1);
      setA(target.value);
    } else {
      setStates([]);
    }
  };

  function setSumAll() {
    setallUs(
      Number(price) +
        Number(big) +
        Number(shipInUs) +
        Number(docs) +
        Number(cont) +
        Number(insurence) +
        Number(ship) +
        Number(brokUs) +
        Number(sum) +
        Number(go)
    );
    setSumUa(Number(brokUa) + Number(exp) + Number(gocity));
    //AllSum();
  }
  function AllSum() {
    let a = allUs;
    let b = sumUa;
    setPriceAll(a + b);
  }
  function handleInUSA() {
    let a=document.getElementById("unloading")
    setShow(!show);
    AllSum();
    getCurs();
  }

  const handleGoCity = ({ target }) => {
    if (target.value !== "Odessa (Ukraine)") {
      setGoCity(450);
    } else if (
      target.value === "nothing" ||
      target.value === "Odessa (Ukraine)"
    ) {
      setGoCity(0);
    }
    if (target.value !== "nothing") {
      setSumAll();
    }
  };
  const handleSetInsurence = ({ target }) => {
    if (target.value === "yes") {
      let pr = price;
      let ins = Number(pr) * 0.03;
      if (ins < 150) {
        setInsurence(150);
      } else {
        setInsurence(ins);
      }
    } else if (target.value === "nothing" || target.value === "no") {
      setInsurence(0);
    }
  };
  const handlePriceSet = ({ target }) => {
    setPrice(target.value);
    let val = 0;
    let onval = 0;
    if (a === "copart") {
      if (target.value > 0 && target.value < 50) {
        val = 27.5;
      } else if (target.value >= 50 && target.value < 100) {
        val = 50;
      } else if (target.value >= 100 && target.value < 200) {
        val = 90;
      } else if (target.value >= 200 && target.value < 300) {
        val = 135;
      } else if (target.value >= 300 && target.value < 350) {
        val = 137.5;
      } else if (target.value >= 350 && target.value < 400) {
        val = 140;
      } else if (target.value >= 400 && target.value < 450) {
        val = 182.5;
      } else if (target.value >= 450 && target.value < 500) {
        val = 185;
      } else if (target.value >= 500 && target.value < 550) {
        val = 212.5;
      } else if (target.value >= 550 && target.value < 600) {
        val = 215;
      } else if (target.value >= 600 && target.value < 700) {
        val = 245;
      } else if (target.value >= 700 && target.value < 800) {
        val = 270;
      } else if (target.value >= 800 && target.value < 900) {
        val = 295;
      } else if (target.value >= 900 && target.value < 1000) {
        val = 325;
      } else if (target.value >= 1000 && target.value < 1200) {
        val = 385;
      } else if (target.value >= 1200 && target.value < 1300) {
        val = 415;
      } else if (target.value >= 1300 && target.value < 1400) {
        val = 435;
      } else if (target.value >= 1400 && target.value < 1500) {
        val = 455;
      } else if (target.value >= 1500 && target.value < 1600) {
        val = 470;
      } else if (target.value >= 1600 && target.value < 1700) {
        val = 495;
      } else if (target.value >= 1700 && target.value < 1800) {
        val = 510;
      } else if (target.value >= 1800 && target.value < 2000) {
        val = 540;
      } else if (target.value >= 2000 && target.value < 2400) {
        val = 590;
      } else if (target.value >= 2400 && target.value < 2500) {
        val = 605;
      } else if (target.value >= 2500 && target.value < 3000) {
        val = 650;
      } else if (target.value >= 3000 && target.value < 3500) {
        val = 775;
      } else if (target.value >= 3500 && target.value < 4000) {
        val = 850;
      } else if (target.value >= 4000 && target.value < 4500) {
        val = 900;
      } else if (target.value >= 4500 && target.value < 5000) {
        val = 950;
      } else if (target.value >= 5000) {
        val = target.value * 0.2;
      }

      if (target.value >= 0 && target.value < 100) {
        onval = 0;
      } else if (target.value >= 100 && target.value < 500) {
        onval = 39;
      } else if (target.value >= 500 && target.value < 1000) {
        onval = 49;
      } else if (target.value >= 1000 && target.value < 1500) {
        onval = 69;
      } else if (target.value >= 1500 && target.value < 2000) {
        onval = 79;
      } else if (target.value >= 2000 && target.value < 4000) {
        onval = 89;
      } else if (target.value >= 4000 && target.value < 6000) {
        onval = 99;
      } else if (target.value >= 6000 && target.value < 8000) {
        onval = 119;
      } else if (target.value >= 8000) {
        onval = 129;
      }
    } else if (a === "iaai") {
      if (target.value >= 0 && target.value < 100) {
        val = 1;
      } else if (target.value >= 100 && target.value < 200) {
        val = 40;
      } else if (target.value >= 200 && target.value < 300) {
        val = 60;
      } else if (target.value >= 300 && target.value < 350) {
        val = 75;
      } else if (target.value >= 350 && target.value < 400) {
        val = 90;
      } else if (target.value >= 400 && target.value < 500) {
        val = 100;
      } else if (target.value >= 500 && target.value < 600) {
        val = 130;
      } else if (target.value >= 600 && target.value < 700) {
        val = 145;
      } else if (target.value >= 700 && target.value < 800) {
        val = 160;
      } else if (target.value >= 800 && target.value < 900) {
        val = 175;
      } else if (target.value >= 900 && target.value < 1000) {
        val = 190;
      } else if (target.value >= 1000 && target.value < 1100) {
        val = 205;
      } else if (target.value >= 1100 && target.value < 1200) {
        val = 220;
      } else if (target.value >= 1200 && target.value < 1300) {
        val = 230;
      } else if (target.value >= 1300 && target.value < 1400) {
        val = 240;
      } else if (target.value >= 1400 && target.value < 1500) {
        val = 255;
      } else if (target.value >= 1500 && target.value < 1600) {
        val = 270;
      } else if (target.value >= 1600 && target.value < 1800) {
        val = 290;
      } else if (target.value >= 1800 && target.value < 2000) {
        val = 310;
      } else if (target.value >= 2000 && target.value < 2200) {
        val = 335;
      } else if (target.value >= 2200 && target.value < 2400) {
        val = 350;
      } else if (target.value >= 2400 && target.value < 2600) {
        val = 365;
      } else if (target.value >= 2600 && target.value < 2800) {
        val = 385;
      } else if (target.value >= 2800 && target.value < 3000) {
        val = 400;
      } else if (target.value >= 3000 && target.value < 3500) {
        val = 415;
      } else if (target.value >= 3500 && target.value < 4000) {
        val = 430;
      } else if (target.value >= 4000 && target.value < 5000) {
        val = 450;
      } else if (target.value >= 5000) {
        val = 450 + target.value * 0.01;
      }

      if (target.value >= 0 && target.value < 100) {
        onval = 0;
      } else if (target.value >= 100 && target.value < 500) {
        onval = 29;
      } else if (target.value >= 500 && target.value < 1000) {
        onval = 39;
      } else if (target.value >= 1000 && target.value < 1500) {
        onval = 49;
      } else if (target.value >= 1500 && target.value < 2000) {
        onval = 59;
      } else if (target.value >= 2000 && target.value < 3000) {
        onval = 69;
      } else if (target.value >= 3000 && target.value < 4000) {
        onval = 79;
      } else if (target.value >= 4000) {
        onval = 89;
      }
    }
    let equal = val + onval + 59;
    setSum(equal);
    console.log(equal);
  };

  const handleFirstCoord = ({ target }) => {
    const select = target.value;
    const sel = usStates.filter((e) => e.city === select);
    firstCoord = sel[0].coordinates;
    setFirstc(firstCoord);
  };

  const handleSetGo = ({ target }) => {
    if (target.value === "yes") {
      setGo(0);
    } else if (target.value === "no") {
      setGo(100);
    }
  };

  const handleSetBig = ({ target }) => {
    if (target.value === "big") {
      setBig(50);
    } else if (target.value === "small") {
      setBig(0);
    }
  };

  const handleSecondCoord = ({ target }) => {
    const select = target.value;
    const sel = ports.filter((e) => e.town === select);
    secondCoord = sel[0].coordinates;
    console.log(secondCoord);
    setSecondc(secondCoord);
    // getUsers();
  };

  async function getCurs() {
    const response = await fetch(
      "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
    );
    const data = await response.json();
    const dol = data.filter((f) => f.cc === "EUR");
    console.log(dol[0].rate);
  }

  async function getUsers() { // функція для визначення відстані між координатами AzureMaps API
    const response = await fetch(
      `https://atlas.microsoft.com/route/directions/json?subscription-key=0prE0fmokMgTu_9PNkoeCq2CUd5X13sOjLXQiL14PPM&api-version=1.0&query=${firstC}:${secondC}`
    );
    const data = await response.json();

    dis = Number.parseInt(
      data.routes.map((it) => it.summary.lengthInMeters * 0.000621371)
    );
    setDist(dis);
  }
  return (
    <div className="container">
      <div className="wrapper">
        <div className="calculator">
          <h2 className="calculator__title">Расчет стоимости авто из США</h2>
          <br />
          <label htmlFor="auction" className="calculator__label">
            Выберите аукцион
          </label>
          <br />
          <select
            className="calculator__select calculator__select-auction"
            name="auction"
            id="auction"
            onChange={handleChange}
          >
            <option
              className="calculator__option calculator__option-auction"
              value="nothing"
            >
              ---
            </option>
            <option
              className="calculator__option calculator__option-auction"
              value="copart"
            >
              Copart/USA
            </option>
            <option
              className="calculator__option calculator__option-auction"
              value="iaai"
            >
              IAAI/USA
            </option>
          </select>
          <br />
          <br />
          <label htmlFor="price" className="calculator__label">
            Укажите стоимость авто на аукционе в долларах США
          </label>
          <br />
          <input
            type="text"
            onChange={handlePriceSet}
            id="price"
            className="calculator__price"
          />
          <br />
          <br />
          <label htmlFor="insurence" className="calculator__label">
            Желаете застраховать авто (3% от стоимости, но не менее 150$)
          </label>
          <br />
          <select
            className="calculator__select calculator__select-auction"
            name="insurence"
            id="insurence"
            onChange={handleSetInsurence}
          >
            <option
              className="calculator__option calculator__option-auction"
              value="nothing"
            >
              ---
            </option>
            <option
              className="calculator__option calculator__option-auction"
              value="yes"
            >
              Да
            </option>
            <option
              className="calculator__option calculator__option-auction"
              value="no"
            >
              Нет
            </option>
          </select>
          <br />
          <br />
          <label htmlFor="go" className="calculator__label">
            Машина на ходу?
          </label>
          <br />
          <select
            className="calculator__select calculator__select-auction"
            name="go"
            id="go"
            onChange={handleSetGo}
          >
            <option
              className="calculator__option calculator__option-auction"
              value="nothing"
            >
              ---
            </option>
            <option
              className="calculator__option calculator__option-auction"
              value="yes"
            >
              Да
            </option>
            <option
              className="calculator__option calculator__option-auction"
              value="no"
            >
              Нет
            </option>
          </select>
          <br />
          <br />
          <label htmlFor="big" className="calculator__label">
            Выберите тип авто:
          </label>
          <br />
          <select
            className="calculator__select calculator__select-auction"
            name="big"
            id="big"
            onChange={handleSetBig}
          >
            <option
              className="calculator__option calculator__option-auction"
              value="nothing"
            >
              ---
            </option>
            <option
              className="calculator__option calculator__option-auction"
              value="big"
            >
              Джип, кроссовер
            </option>
            <option
              className="calculator__option calculator__option-auction"
              value="small"
            >
              Легковой автомобиль
            </option>
          </select>
          <br />
          <br />
          <label htmlFor="auction" className="calculator__label">
            Выберите площадку
          </label>
          <br />
          <select
            className="calculator__select calculator__select-playground"
            name="playground"
            id="playground"
            onChange={handleFirstCoord}
          >
            <option
              className="calculator__option calculator__option-playground"
              value="nothing"
            >
              ---
            </option>

            {usStates.map((stat) => (
              <option key={stat.id} value={stat.city}>
                {stat.state} - {stat.city}
              </option>
            ))}
          </select>
          <br />
          <br />
          <label htmlFor="loadingPort" className="calculator__label">
            Выберите порт погрузки
          </label>
          <br />
          <select
            className="calculator__select calculator__select-loading"
            name="loading"
            id="loadingPort"
            onChange={handleSecondCoord}
          >
            <option
              className="calculator__option calculator__option-loading"
              value="nothing"
            >
              ---
            </option>
            {ports.map((pr) => (
              <option key={pr.id} value={pr.town}>
                {pr.town}
              </option>
            ))}
          </select>
          <br />
          <br />
          <div className="calculator__distance">
            <button
              onClick={getUsers}
              className="calculator__button calculator__button-small"
            >
              Расчитать расстояние
            </button>
            <div className="calculator__distance calculator__distance-text">
              от площадки погрузки до порта погрузки {dist} миль.
            </div>
          </div>
          <br />
          <label htmlFor="unloading" className="calculator__label">
            Выберите порт разгрузки
          </label>
          <br />
          <select
            className="calculator__select calculator__select-unloading"
            name="unloading"
            id="unloading"
            onChange={handleGoCity}
          >
            <option
              className="calculator__option calculator__option-unloading"
              value="nothing"
            >
              ---
            </option>
            {unloads.map((unload) => (
              <option key={unload.id} value={unload.place}>
                {unload.place}
              </option>
            ))}
          </select>
          <br />
          <br />
          <label htmlFor="country" className="calculator__label">
            Выберите страну разтаможки
          </label>
          <br />
          <select
            name="country"
            id="country"
            className="calculator__select calculator__select-country"
          >
            <option
              className="calculator__option calculator__option-country"
              value="ukraine"
            >
              Ukraine
            </option>
          </select>
          <br />
          <div className="button">
            <button onClick={handleInUSA} className="calculator__button">
              Расчитать стоимость
            </button>
          </div>
          {/* <div className="button">
            <button onClick={AllSum} className="calculator__button">
              Показать результат
            </button>
          </div> */}
          {show ? (
            <div>Results</div>
          ) : (
            <div>
              <h2 className="calculator__title">Затраты в США</h2>

              <table className="table">
                <tbody>
                  <tr className="table__row">
                    <td className="table__txt">
                      Стоимость Вашего авто на аукционе
                    </td>
                    <td>{price} $</td>
                  </tr>
                  <tr className="table__row table__row-light">
                    <td className="table__txt">Страховка авто</td>
                    <td>{insurence} $</td>
                  </tr>
                  <tr className="table__row">
                    <td className="table__txt">Аукционный сбор</td>
                    <td>{sum} $</td>
                  </tr>
                  <tr className="table__row table__row-light">
                    <td className="table__txt">Брокерские услуги в Америке</td>
                    <td>{brokUs} $</td>
                  </tr>
                  <tr className="table__row">
                    <td className="table__txt">
                      Доставка с аукциона в порт погрузки
                    </td>
                    <td>{shipInUs} $</td>
                  </tr>
                  <tr className="table__row table__row-light">
                    <td className="table__txt">Погрузка в контейнер</td>
                    <td>{cont} $</td>
                  </tr>
                  <tr className="table__row">
                    <td className="table__txt">Отправка документов</td>
                    <td>{docs} $</td>
                  </tr>
                  <tr className="table__row table__row-light">
                    <td className="table__txt">Доставка кораблем в порт</td>
                    <td>{ship} $</td>
                  </tr>
                  <tr className="table__row">
                    <td className="table__txt">Оплата за размер авто</td>
                    <td>{big} $</td>
                  </tr>
                  <tr className="table__row table__row-light">
                    <td className="table__txt">Оплата на ходу или нет</td>
                    <td>{go} $</td>
                  </tr>
                  <tr className="table__row table__row-last">
                    <td>
                      <h2 className="calculator__title">Всего в США</h2>
                    </td>
                    <td className="calculator__title">{allUs} $</td>
                  </tr>
                </tbody>
              </table>
              <h2 className="calculator__title">Затраты в порту выгрузки</h2>

              <table className="table">
                <tbody>
                  <tr className="table__row">
                    <td className="table__txt">Экспедирование</td>
                    <td>{exp} $</td>
                  </tr>
                  <tr className="table__row table__row-light">
                    <td className="table__txt">Услуги брокера</td>
                    <td>{brokUa} $</td>
                  </tr>
                  <tr className="table__row">
                    <td className="table__txt">Доставка авто в город</td>
                    <td>{gocity} $</td>
                  </tr>
                  <tr className="table__row table__row-last">
                    <td>
                      <h2 className="calculator__title">
                        Всего в порту выгрузки
                      </h2>
                    </td>
                    <td className="calculator__title">{sumUa} $</td>
                  </tr>
                  <tr className="table__row table__row-all">
                    <td>
                      <h2 className="calculator__title">Всего доставка</h2>
                    </td>
                    <td className="calculator__title">{priceAll} $</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
