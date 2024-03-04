import './App.css'
import Header from './Header'
import MyCard from './MyCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Footer'

function App() {
  return (
    <>
      <div className="bodyPage">
        <Header className="header" titulo="Adopta un Perrito" />
        <div className="cards">
          <MyCard
            imagen="https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_1280.jpg"
            nombre="Benardo"
            descripcion="El es Benardo, un perrito muy cariñoso y juguetón, con solo mirarlo sabrás que él es el indicado."
            bg="primary"
            text="Benardo"
          />
          <MyCard
            imagen="https://cdn.pixabay.com/photo/2016/02/26/16/32/bulldog-1224267_1280.jpg"
            nombre="Patrocla"
            descripcion="Ella es Patrocla, una perrita muy tranquila, es amiga de todos los niños y de todas las mascotas, es tan adorable que todos querrán acariciarla."
            bg="success"
            text="Patroclo"
          />
          <MyCard
            imagen="https://cdn.pixabay.com/photo/2023/09/24/14/05/dog-8272860_1280.jpg"
            nombre="Vaquita"
            descripcion="Ella es Vaquita, una perrita muy educada y aventurera, si tu casa está ubicada fuera de la ciudad, Vaquita se convertiría en tu peludita ideal!."
            bg="warning"
            text="Amigo"
          />
          <MyCard
            imagen="https://cdn.pixabay.com/photo/2020/01/21/16/26/yorkshire-terrier-4783327_1280.jpg"
            nombre="Shoman"
            descripcion="El es Shoman, el perrito mas fiel que encontrarás, es capaz de estar a tu lado toda la eternidad comiendo pollito."
            bg="danger"
            text="Shoman"
          />
        </div>
        <Footer
          className="foot"
          footerText="Revisa toda nuestra galería de perritos para que encuentres un compañer@ peludito para poder jugar y dar mucho amor!!. Uno de estos perritos puede que te escoja a ti primero :)"
        />
      </div>
    </>
  )
}

export default App
