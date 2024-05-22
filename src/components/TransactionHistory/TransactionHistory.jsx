import PropTypes from 'prop-types'; 
import { TransactionHistoryList, TableHeader, TableTr, TableTh, TableBody, TableBodyTr, TransactionHistoryTd  } from "./TransactionHistory.styled"

const TransactionHistory = ({items}) => {
  return <TransactionHistoryList>
  <TableHeader>
    <TableTr>
      <TableTh>Type</TableTh>
      <TableTh>Amount</TableTh>
      <TableTh>Currency</TableTh>
    </TableTr>
  </TableHeader>

  <TableBody>
    {items.map(({id, type, amount, currency}) => {
        return (
        <TableBodyTr key={id}>
            <TransactionHistoryTd>{type}</TransactionHistoryTd>
            <TransactionHistoryTd>{amount}</TransactionHistoryTd>
            <TransactionHistoryTd>{currency}</TransactionHistoryTd>
        </TableBodyTr>
        )
    })
}
    </TableBody>
</TransactionHistoryList>

}

TransactionHistoryList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
  )
}

export default TransactionHistory