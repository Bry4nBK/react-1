import MyCard from './components/MyCard';
import Header from './components/Header';
import Footer from './components/Footer';
import mateoDog from './assets/img/mateo.jpg';
import kibaDog from './assets/img/kiba.jpg';
import paulaDog from './assets/img/paula.jpg';
import lucasDog from './assets/img/lucas.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const title = "Adopta un perrito";

  const dogsDescription = [
    {
		imgDog: mateoDog,
		name:"Mateo",
		raza:"Bull Terrier",
		colorButton:"success",
		textButton:"Bull Terrier",
		description:"Lleno de energía y listo para jugar. ¡Dale a Mateo el hogar amoroso que se merece!"
  },
    {
		imgDog: kibaDog,
		name:"Kiba",
		raza:"Fox Terrier",
		colorButton:"info",
		textButton:"Fox Terrier",
		description:"Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz que Kiba sea parte de tu familia hoy mismo!"
	},
    {
		imgDog: paulaDog,  
		name:"Paula",
		raza:"Beagle",
		colorButton:"danger",
		textButton:"Beagle",
		description:"¡Una compañera leal y cariñosa. Hazte amigo de Paula y experimenta un amor incondicional!"
	},
	{
		imgDog: lucasDog,
		name:"Lucas",
		raza: "Golden Retriever",
		colorButton:"warning",
		textButton:"Golden Retriever",
		description:"¡Un perro de gran tamaño al igual que su corazón y ganas de jugar. Ayuda a Lucas a encontrar hogar y un final feliz!"
    },           
  ]


  return (
    <>
    <div className="App">
      <Header title="Adopta un perrito" />
      <div className="card-container">
        {dogsDescription.map((dogs) => (
          <MyCard
			      key={dogs.name}
            imgDog={dogs.imgDog}
            name={dogs.name}
            description={dogs.description}
            raza={dogs.raza}
            colorButton={dogs.colorButton}
            textButton={dogs.textButton}
          />
        ))}
      </div>
      <Footer/>
    </div>
    </>
  );
}
export default App;
