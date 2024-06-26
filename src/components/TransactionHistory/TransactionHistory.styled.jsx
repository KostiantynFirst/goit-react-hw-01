import styled from "styled-components";

export const TransactionHistoryList = styled.table`
    border-collapse: collapse;
    width: 100%;
`
export const TableHeader = styled.thead`
    background-color: #add8e6;
`
export const TableTr = styled.tr`
    border: 1px solid #ccc;
`
export const TableTh = styled.th`
    font-weight: bold;
    padding: 12px;
    text-align: center;
    border: 1px solid #fff;
  }
`
export const TableBody = styled.tbody`
    width: 100%;
    text-align: center;
`
export const TableBodyTr = styled.tr`

    &:nth-child(even) {
    background-color: #f2f2f2;
  }
`
export const TransactionHistoryTd = styled.td`
    padding: 10px;
    border: 1px solid #ccc;
    font-weight: bold;
`