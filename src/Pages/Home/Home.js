// style import
import styles from './Home.module.css';

//component import
import TransactionForm from '../../Components/TransactionForm';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>transaction list</div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  );
};

export default Home;
