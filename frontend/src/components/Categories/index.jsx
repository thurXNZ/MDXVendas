import './Categories.css'
import Celular from '../../assets/img/aplicativo-movel.png';
import Carro from '../../assets/img/carro.png';
import Decoracao from '../../assets/img/decoracao-da-casa.png';
import Eletro from '../../assets/img/eletrodomestico.png';
import Esporte from '../../assets/img/esporte.png';
import Habitacao from '../../assets/img/habitacao.png';

const categories = [
    {name: 'Celular', img: Celular},
    {name: 'Carro', img: Carro},
    {name: 'Decoracao', img: Decoracao},
    {name: 'Eletro', img: Eletro},
    {name: 'Esporte', img: Esporte},
    {name: 'Habitacao', img: Habitacao},
];

export default function Categories ({ selectedBtn, onSelect }) {
    return (
        <section className="categories">
            {categories.map((cat) => (
                <button
                    key={cat.name}
                    onClick={() => onSelect(cat.name)}
                    className={`btn ${selectedBtn === cat.name ? 'selectedBtn' : ''}`}
                >
                    <img src={cat.img} alt={cat.name} />
                    <span>{cat.name}</span>
                </button>
            ))}
        </section>
    )
}
