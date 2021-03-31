import React from 'react';
import { useDispatch } from 'react-redux';
import {
  add
} from '../cart/cartSlice';
// import styles from './Cart.module.css';
import goods from './goodsList';

function Goods() {
  // const cartIds = useSelector(state => state.cart);
  const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div className="">
      {goods.map(good => {
        return (
          <div className="">
            {`${good.title} ${good.price}$`}
            <button onClick={() => dispatch(add({ addId: good.id, sum: good.price }))}>add</button>
          </div>
        )
      })}
    </div>
    // <div>
    //   <div className={styles.row}>
    //     <button
    //       className={styles.button}
    //       aria-label="Increment value"
    //       onClick={() => dispatch(increment())}
    //     >
    //       +
    //     </button>
    //     <span className={styles.value}>{count}</span>
    //     <button
    //       className={styles.button}
    //       aria-label="Decrement value"
    //       onClick={() => dispatch(decrement())}
    //     >
    //       -
    //     </button>
    //   </div>
    //   <div className={styles.row}>
    //     <input
    //       className={styles.textbox}
    //       aria-label="Set increment amount"
    //       value={incrementAmount}
    //       onChange={e => setIncrementAmount(e.target.value)}
    //     />
    //     <button
    //       className={styles.button}
    //       onClick={() =>
    //         dispatch(incrementByAmount(Number(incrementAmount) || 0))
    //       }
    //     >
    //       Add Amount
    //     </button>
    //     <button
    //       className={styles.asyncButton}
    //       onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
    //     >
    //       Add Async
    //     </button>
    //   </div>
    // </div>
  );
}

export default Goods;