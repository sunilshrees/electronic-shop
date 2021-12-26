import Input from '../components/Input';
import '../styles/item.css';
import { useRef, useContext } from 'react';
import CartContext from '../store/cart-context';

function Item(match) {
    const item = match.location.myObj;
    const cartCtx = useContext(CartContext);

    const price = Number(item.price.slice(1, item.price.length)) * 122;

    // const price = new Intl.NumberFormat('en-IN', {
    //     maximumSignificantDigits: 3,
    // }).format(Number(item.price.slice(1, item.price.length)) * 122);

    const amountInputRef = useRef();
    const clickHandler = () => {
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            return;
        }

        cartCtx.addItem({
            id: item.id,
            name: item.name,
            amount: enteredAmountNumber,
            price: price,
            image: item.image,
        });
    };
    return (
        <div className='item__container'>
            <div className='item__img'>
                <img
                    src={`https://electronic-ecommerce.herokuapp.com/${item.image}`}
                    alt={item.name}
                />
            </div>
            <div className='item-details'>
                <h1 className='item-details__name'>{item.name}</h1>
                <div className='item-details__category'>
                    {item.category.map((cat, i) => {
                        return (
                            <h4 key={i}>{`${
                                cat[0].toUpperCase() + cat.substring(1)
                            }`}</h4>
                        );
                    })}
                </div>
                <hr />
                <h1 className='item-details__price'>{`Rs. ${new Intl.NumberFormat(
                    'en-IN',
                    {
                        maximumSignificantDigits: 3,
                    }
                ).format(price)}`}</h1>
                <h1 className='item-details__stock'>
                    Available : {item.stock ? 'In Stock' : 'Out of Stock'}
                </h1>

                <Input
                    ref={amountInputRef}
                    label='Amount'
                    input={{
                        id: 'amount',
                        type: 'number',
                        min: '1',
                        max: '5',
                        step: '1',
                        defaultValue: '1',
                    }}
                />
                <button
                    className='atc-btn'
                    disabled={item.stock ? false : true}
                    onClick={clickHandler}>
                    Add to Cart
                </button>

                <h1 className='item-details__createdDate'>
                    Created Date :
                    {` ${new Date(item.createDate).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                    })}`}
                </h1>
            </div>
            <div className='item-body'>
                <h1>Item Details</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error molestiae aliquam omnis nam, voluptatibus nulla
                    ducimus sapiente fugit quia debitis voluptas quae similique
                    repudiandae? Quia alias odio commodi itaque velit a
                    necessitatibus. Consequatur, omnis? Suscipit sit facere, in,
                    eius deserunt vero laborum pariatur odit esse dolores, totam
                    laboriosam dignissimos sint. Nostrum suscipit quo,
                    voluptates nemo, necessitatibus neque itaque est blanditiis
                    velit qui dignissimos nesciunt molestias, numquam distinctio
                    nobis nulla perferendis ab ut? Consectetur adipisci enim
                    tenetur cum dolore excepturi blanditiis laudantium suscipit.
                    Accusamus dolor temporibus minima provident, nostrum
                    dignissimos atque id, sequi accusantium quidem quia
                    reiciendis at. Laboriosam expedita soluta ut molestiae ipsa
                    a harum. Minima alias, aspernatur repudiandae quo atque
                    necessitatibus autem nesciunt laudantium ab. Obcaecati iure
                    suscipit numquam dignissimos saepe officiis totam et, sint
                    tempora ad eligendi nobis ratione nemo ut doloribus hic
                    asperiores qui beatae id recusandae blanditiis laboriosam
                    veniam commodi! Ipsam, iusto natus! Sequi sint aliquam
                    quidem nihil nesciunt itaque a ex unde, exercitationem
                    corrupti eius necessitatibus mollitia est repudiandae nulla,
                    tempora esse alias vero labore totam maxime hic officia
                    aperiam aut? Animi, dignissimos cupiditate! Quod, <br />
                    <br />
                    voluptatum laboriosam possimus dolor incidunt voluptas?
                    Facilis voluptas tempora aliquid, saepe nobis optio
                    inventore, ratione vero nam iusto adipisci impedit minima
                    eius. Porro culpa voluptatem dolores numquam aut aliquam
                    asperiores architecto nisi sapiente maiores. Qui iure
                    debitis, saepe reiciendis error maiores aspernatur
                    exercitationem vitae! Voluptatem, itaque natus sed nulla
                    iusto, earum consectetur facilis culpa dicta laudantium
                    ullam, iure esse tenetur. Harum exercitationem, porro ullam,
                    consequatur voluptates praesentium, ipsum nihil quidem fugit
                    accusantium fugiat perspiciatis dolorem quod sed delectus
                    incidunt et. Ratione quam, molestias praesentium asperiores,
                    consequatur delectus et quis, corporis ullam cumque numquam
                    voluptatem! Rerum sed alias modi distinctio tempora illum
                    optio deleniti pariatur doloribus sunt libero culpa,
                    possimus non vero soluta earum voluptatem perspiciatis
                    numquam minus unde odio aspernatur. Esse vero explicabo
                    minima sequi. Ducimus, praesentium impedit. Molestias
                    accusamus sapiente ducimus nesciunt adipisci libero, porro
                    quis quam tempore vel, optio voluptate suscipit,
                    perspiciatis veniam. Libero ipsum ex distinctio, nam quas
                    incidunt iusto voluptatum suscipit harum explicabo, pariatur
                    provident nobis quidem esse ullam aspernatur, error eveniet
                    amet. Minima, esse laudantium sequi consequuntur
                    voluptatibus iste dolorem, obcaecati sint, eum eos in
                    dignissimos dicta. Minima consectetur optio quidem ea
                    architecto, veritatis placeat cumque hic praesentium
                    cupiditate fuga aliquid nulla delectus sapiente voluptas
                    quasi quam est, asperiores corrupti exercitationem
                    reprehenderit officiis numquam! Aperiam quia exercitationem
                    vitae similique rem aspernatur magnam reiciendis,
                    necessitatibus, deserunt possimus corporis hic. Explicabo
                    dolores accusantium rerum quia pariatur officia provident
                    qui assumenda vero quo? Doloremque, explicabo dignissimos
                    recusandae natus eveniet expedita magni eos unde id debitis
                    perferendis delectus maiores eum veritatis cum consequuntur
                    dolorum quae velit cupiditate eaque illo porro! Sunt quidem,
                    optio omnis ex, voluptatum inventore dicta cupiditate
                    explicabo alias nulla numquam voluptatem ea ullam animi quae
                    atque corporis corrupti neque error. Perferendis non iste
                    nihil deleniti expedita mollitia perspiciatis enim nisi!
                    Perferendis illum earum esse, nam animi cum. Assumenda
                    vitae, aliquam iusto iste voluptate quaerat odio sunt at,
                    saepe voluptatem error praesentium molestias, architecto cum
                    quasi quo!
                </p>
            </div>
        </div>
    );
}

export default Item;
