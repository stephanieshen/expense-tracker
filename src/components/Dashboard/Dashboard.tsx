import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <div>
      <div className={styles.income}>
        <h5 className={styles.label}>
          Income
        </h5>
        <h2 className={styles.amount}>
          Php 1,200.00
        </h2>
      </div>

      <Container>
        <Row>
          <Col className={styles.col}>
            <div className={styles.card}>
              <h5 className={`${styles.label} ${styles.white}`}>
                Expense
              </h5>
              <h2 className={styles.amount}>
                Php 1,200.00
              </h2>
            </div>
          </Col>
          <Col className={styles.col}>
            <div className={styles.card}>
              <h5 className={`${styles.label} ${styles.white}`}>
                Balance
              </h5>
              <h2 className={styles.amount}>
                Php 1,200.00
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
