import './App.css';
import { useState } from "react";
import Loader from "./loader1.gif";
import Array from './Array.jsx';

function App() {
  const data = Array[0].suggested_searches;
  const [search, setSearch] = useState(null);

  function copyClipboard() {
    const element = document.getElementsByClassName("card_item");
    for (var j = 0; j < element.length; j++) {
      const cardClicked = (k) => {
        var copyText = document.getElementsByClassName("card_item")[k]
          .children[0].innerText;
        navigator.clipboard.writeText(copyText);
      };
      element[j].addEventListener("click", cardClicked.bind(this, j), false);
    }
  }

  return (
    <>
      <div className="container">
        <h1 className="title">Photo Gallery Search App</h1>
        <p className="app_desc">Photo Gallery app made in ReactJs.</p>
        <input type="search" id="inp_search" placeholder="Search for a photo" onChange={(e) => setSearch(e.target.value)} />
        <p className="copy_icon">
          <i className="far fa-clone"></i> Click on Photo To Copy.
        </p>
        {/* <div id="loading_div">
          <img src={Loader} alt="Loading" className="load_class" />
        </div> */}
        <div className="card_container" id="card_container_id">
          {data &&
            data.map((ele) => {
              {/* document.getElementById("loading_div").style.display = "none"; */}
              if (search === null || ele.name.toLowerCase().includes(search.toLowerCase()))
                return (
                  <div className="card_item" onClick={copyClipboard} title="Click to Copy">
                    <img src={ele.thumbnail} alt="images" className="images_item" />
                    <p className="emoji_name">{ele.name}</p>
                  </div>
                );
              return null;
            })}
        </div>
        <p className="copyright">&copy; 2021 Anant Kumawat.</p>
      </div>
    </>
  );
}

export default App;