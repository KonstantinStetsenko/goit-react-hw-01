import css from "./TransactionHistory.module.css";

export default function transactions({ items }) {
  return (
    <table>
      <thead>
        <tr className={css.titleTable}>
          <th className={css.titleType}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr className={css.list} key={item.id}>
              <td className={css.tableDataType}>{item.type}</td>
              <td className={css.tableData}>{item.amount}</td>
              <td className={css.tableData}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>)

}