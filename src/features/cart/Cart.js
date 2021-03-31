import { useSelector, useDispatch } from 'react-redux';
import {
  remove,
  clear
} from './cartSlice';
import styles from './Cart.module.css';
import goods from '../goods/goodsList';

function Cart() {
  const cartIds = useSelector(state => state.cart.ids);
  const qty = useSelector(state => state.cart.qty);
  const sum = useSelector(state => state.cart.sum);
  console.log(cartIds)
  const dispatch = useDispatch();

  return (
    <div className="">
      {cartIds.map(elem => {
        const good = goods.find(good => good.id ===  elem.id);
        return (
          <div className="">
            {`${good.title} ${elem.qty} x ${good.price}$ = ${elem.qty*good.price}`}
            <button onClick={() => dispatch(remove({ removeId: elem.id, sum: good.price }))}>remove</button>
          </div>
        )
      })}
      { sum !== 0 && (`Total: ${sum}$`)}
      { qty !== 0 && (<button onClick={() => dispatch(clear())}>clear</button>)}
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

export default Cart;
