import { Table } from 'antd'

export default class OrderTable extends Table<{
  key: number,
  name: string,
  owner_name: string,
  owner_phone: string,
}> { }
