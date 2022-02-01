import React from "react";
import { useState } from "react";

import listImg from "../IMG/img-list-block-favorite.png";
import link from "../IMG/link.png";
import heartRed from "../IMG/heart.png";

const Favorite = React.createClass({
  // Этот компонент не содержит никакого состояния - он просто преобразует
  // то что было передано атрибутами в изображение.

  clickHandler: function () {
    // Когда компонент кликнут, вызываем обработчик onClick,
    // который был передан атрибутом при создании:
    this.props.onClick(this.props.ref);
  },

  render: function () {
    var cls = "picture " + (this.props.favorite ? "favorite" : "");

    return (
      <div className={cls} onClick={this.clickHandler}>
        <img src={this.props.src} width="200" title={this.props.title} />
      </div>
    );
  },
});

var PictureList = React.createClass({
  getInitialState: function () {
    // Массив изображений будет передан по AJAX, а
    // избранные когда, пользователь кликнет по изображению:

    return { jokes: [], favorites: [] };
  },

  componentDidMount: function () {
    // Когда компонент загружается,  отправляем jQuery AJAX запрос

    var self = this;

    // конечная точка API, для загрузки популярных изображений дня

    var url = "https://api.chucknorris.io/jokes/random";

    $.getJSON(url, function (result) {
      if (!result || !result.data || !result.data.length) {
        return;
      }

      var jokes = result.data.map(function (p) {
        return {
          id: p.id,
          url: p.link,
          src: p.images.low_resolution.url,
          title: p.caption ? p.caption.text : "",
          favorite: false,
        };
      });

      // Обновляем состояние компонента. Это вызовет render.
      // Заметьте, что это обновляет только свойство jokes
      // и не удаляет массив избранных.

      self.setState({ jokes: jokes });
    });
  },

  pictureClick: function (id) {
    // id содержит ID кликнутого изображения.
    // Найдем в массиве jokes и добавим его в избранные

    var favorites = this.state.favorites,
      jokes = this.state.jokes;

    for (var i = 0; i < jokes.length; i++) {
      // Находим айди в массиве изображений

      if (jokes[i].id == id) {
        if (jokes[i].favorite) {
          return this.favoriteClick(id);
        }

        // Добавляем изображение в массив избранных,
        // и отмечаем, как избранное:

        favorites.push(jokes[i]);
        jokes[i].favorite = true;

        break;
      }
    }

    // Обновляем состояние, вызывая перерисовку
    this.setState({ jokes: jokes, favorites: favorites });
  },

  favoriteClick: function (id) {
    // Находим изображение в списке избранных и удалаяем его
    // После этого находим изображение в массиве всех изображений и отмечаем, как не-избранное.

    var favorites = this.state.favorites,
      jokes = this.state.jokes;

    for (var i = 0; i < favorites.length; i++) {
      if (favorites[i].id == id) break;
    }

    // Удаляем из избранных
    favorites.splice(i, 1);

    for (i = 0; i < jokes.length; i++) {
      if (jokes[i].id == id) {
        jokes[i].favorite = false;
        break;
      }
    }

    // Обновляем состояние и перерисовываем
    this.setState({ jokes: jokes, favorites: favorites });
  },

  render: function () {
    var self = this;

    var jokes = this.state.jokes.map(function (p) {
      return (
        <Picture
          ref={p.id}
          title={p.value}
          favorite={p.favorite}
          onClick={self.pictureClick}
        />
      );
    });

    if (!jokes.length) {
      jokes = <p>Loading images..</p>;
    }

    var favorites = this.state.favorites.map(function (p) {
      return (
        <Picture
          ref={p.id}
          title={p.value}
          favorite={true}
          onClick={self.favoriteClick}
        />
      );
    });

    if (!favorites.length) {
      favorites = <p>Click an image to mark it as a favorite.</p>;
    }

    return (
      <div>
        <h1>Popular Instagram pics</h1>
        <div className="jokes"> {jokes} </div>

        <h1>Your favorites</h1>
        <div className="favorites"> {favorites} </div>
      </div>
    );
  },
});

// Отрисовываем компонент PictureList и добавлем его в body.
// я использую API ключ для тестового Instagram приложения.
// Пожалуйста, сгенерируйте и используйте свой собственный здесь http://instagram.com/developer/

// const Favorite = () => {
//   return (
//     <>
//       <div className="favoriteBlock">
//         <h2 className="favoriteTitle">Favorite</h2>
//         <div className="favoriteUnitBlock">
//           <div className="favoriteUnitBlockImg">
//             <img src={listImg} />
//           </div>
//           <div className="favoriteUnitBlockImg">
//             <div className="favoriteUnitBlockId">
//               ID: XNaAxUduSw6zANDaIEab7A <img className="linkImg" src={link} />
//             </div>
//             <div className="favoriteUnitBlockJoke">
//               No one truly knows who's Chuck Norris' real father. No one is
//               biologically strong enough for this. He must've conceived himself.
//             </div>
//             <div className="favoriteUnitBlockUpfate">
//               Last update: 1923 hours ago
//             </div>
//           </div>
//           <div className="favoriteUnitBlockImgHeart">
//             <img src={heartRed} />
//             {/* <StarButton
//               isFavorite={item.isFavorite}
//               disabled={disabled}
//               onClick={() => toggleFavorite(item)}
//             >
//               <Icon icon={item.isFavorite ? faFullStar : faStar} />
//             </StarButton> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
export default Favorite;
