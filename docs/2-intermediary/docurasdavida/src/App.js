/* eslint-disable jsx-a11y/anchor-has-content */
//import logo from './images/logo.jpeg'
import './styles/App.css';
import whatsappLogo from './images/whatsapp-circle.png'
//import Slider from './Slider'
import cupkake from './images/cupcakes.jpeg'
import sacoleNinho from './images/sacole-ninho.jpeg'
import boloPrestigio from './images/bolo-prestigio.jpeg'
import ballonCake from './images/ballon-cake.jpeg'
import boloTopper from './images/bolo-topper.jpeg'
import pirulitoDeCristal from './images/pirulitos-de-cristal.jpeg'
import boloTopper2 from './images/bolo-topper2.jpeg'
import palha from './images/palha-italiana.jpeg'
import brownie from './images/brownie.jpeg'
import uberEatsLogo from './images/uberEatsLogo.png'
import ifoodLogo from './images/ifoodLogo.png'

function App() {
  let slide = 0

  function nextSlide() {
    const conteiner = [
      document.getElementById('item1'),
      document.getElementById('item2'),
      document.getElementById('item3'),
      document.getElementById('item4'),
      document.getElementById('item5')
    ]
    if (slide < 4) {
      slide++
      for (let pos in conteiner) {
        conteiner[pos].style.display = 'none'
      }
      conteiner[slide].style.display = 'block'
    }
    else {
      slide = 0
      for (let pos in conteiner) {
        conteiner[pos].style.display = 'none'
      }
      conteiner[slide].style.display = 'block'
    }
  }

  function previousSlide() {
    const conteiner = [
      document.getElementById('item1'),
      document.getElementById('item2'),
      document.getElementById('item3'),
      document.getElementById('item4'),
      document.getElementById('item5')
    ]
    if (slide > 0) {
      slide--
      for (let pos in conteiner) {
        conteiner[pos].style.display = 'none'
      }
      conteiner[slide].style.display = 'block'
    }
    else {
      slide = 4
      for (let pos in conteiner) {
        conteiner[pos].style.display = 'none'
      }
      conteiner[slide].style.display = 'block'
    }

  }

  return (
    <main>
      <h1>Quem somos?</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eius corrupti quia cupiditate enim porro explicabo officia excepturi eaque distinctio fugiat, laudantium repellat vel minima voluptate labore, debitis mollitia repudiandae!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut modi aperiam sint? Ullam dolore ipsa pariatur, suscipit id non fugit. Repudiandae exercitationem adipisci ullam animi dolorem illo et delectus dignissimos.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero laudantium repudiandae quibusdam soluta nulla provident similique. Voluptate facilis dolore earum voluptatem perferendis facere, necessitatibus illum expedita voluptatibus praesentium ratione magni.
      </p>

      <a href="https://api.whatsapp.com/send?phone=5521966054301"><img src={whatsappLogo} alt="logo do whatsapp png" className="socialMediaLogo" /></a>
      <h1>Conheça nosso trabalho</h1>
      <div className="flex">
        
        <div className="slider">
          <button className="rightArrow" onClick={nextSlide}></button>
          <button className="leftArrow" onClick={previousSlide}></button>
          <div className="item" id="item1">
            <img src={sacoleNinho} alt="" />
            <div>
              <h2>item 1</h2>
              <p>a bit of text</p>
            </div>
          </div>
          <div className="item" id="item2">
            <img src={boloPrestigio} alt="" />
            <div>
              <h2>item 2</h2>
              <p>a bit of text</p>
            </div>
          </div>
          <div className="item" id="item3">
            <img src={cupkake} alt="" />
            <div>
              <h2>item 3</h2>
              <p>a bit of text</p>
            </div>
          </div>
          <div className="item" id="item4">
            <img src={ballonCake} alt="" />
            <div>
              <h2>item 4</h2>
              <p>a bit of text</p>
            </div>
          </div>
          <div className="item" id="item5">
            <img src={boloTopper} alt="" />
            <div>
              <h2>item 5</h2>
              <p>a bit of text</p>
            </div>
          </div>
        </div>
        <div>
          <h2>Atenção à cada detalhe</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque doloribus reprehenderit consequatur repellat quia! Obcaecati repellendus vero pariatur sint natus quisquam quo! A tempore reiciendis amet. Ab ad nesciunt commodi!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo in facilis veritatis laudantium quae accusamus quis incidunt, aliquam similique! Aspernatur repellat adipisci maxime veniam incidunt accusantium commodi provident officia eveniet.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis, incidunt consectetur accusamus facilis amet corporis, aperiam vero magni deserunt asperiores maiores nulla libero consequuntur dicta quae dolorem ratione odio.
          </p>
        </div>
      </div>
      
      <h1>Sua festa, ainda mais especial</h1>
      <div className="flex">
        <div>
          <div className="flex">
            <img className="circleImg" src={pirulitoDeCristal} alt="imagem de pirulito de cristal " />
            <div>
              <h2>Pirulitos de cristal</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi asperiores, iste minus placeat omnis voluptatibus ea veniam, similique tempora sed distinctio temporibus accusamus! Numquam repellat dolorum, inventore vitae culpa error.</p>
            </div>
          </div>
          <div className="flex">
            <img className="circleImg" src={boloTopper2} alt="imagem de " />
            <div>
              <h2>Bolos com topper</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi asperiores, iste minus placeat omnis voluptatibus ea veniam, similique tempora sed distinctio temporibus accusamus! Numquam repellat dolorum, inventore vitae culpa error.</p>
            </div>
          </div>
          <div className="flex">
            <img className="circleImg" src={palha} alt="imagem de " />
            <div>
              <h2>Palhas italianas</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi asperiores, iste minus placeat omnis voluptatibus ea veniam, similique tempora sed distinctio temporibus accusamus! Numquam repellat dolorum, inventore vitae culpa error.</p>
            </div>
          </div>
          <div className="flex">
            <img className="circleImg" src={brownie} alt="imagem de " />
            <div>
              <h2>Brownies</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi asperiores, iste minus placeat omnis voluptatibus ea veniam, similique tempora sed distinctio temporibus accusamus! Numquam repellat dolorum, inventore vitae culpa error.</p>
            </div>
          </div>
        </div>
      </div>
      <h1>Trabalhamos com aplicativos de delivery</h1>
      <p>Encomende doces maravilhosos direto de seus aplicativos de entega favoritos! </p>
      <div className="flex deliveryLogo">
        <div>
          <img src={uberEatsLogo} className="deliveryLogo" alt="" />
          <img src={ifoodLogo} className="deliveryLogo" alt="" />
        </div>
      </div>
    </main>
  )


}

export default App;



