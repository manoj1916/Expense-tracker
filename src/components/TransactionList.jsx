
import TransactionItem from "./TransactionItem";

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <section>
      <h2>Transactions</h2>

      {transactions.length === 0 ? (
        <p className="empty-message">
          No transactions yet. Add your first income or expense above.
        </p>
      ) : (
        <ul className="transaction-list">
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              deleteTransaction={deleteTransaction}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default TransactionList;
