import { remove } from 'lib/fetch'
import Alert from 'components/Alert'
import Link from 'next/link'

interface PropsTable {
  children: React.ReactNode
  data: any
  title: string
  mutate?: any
}

const Table = ({ children, data, title }: PropsTable) => {
  return (
    <>
      <div className='flex flex-row mb-1 mt-4 sm:mb-0 justify-between w-full'>
        <h2 className='text-xl sm:text-2xl ml-2 capitalize leading-tight'>
          {title}
        </h2>
      </div>
      {data && data?.length === 0 && <Alert>No registered {title}</Alert>}
      {data && data?.length > 0 && (
        <div className='-mx-8 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
            <table className='min-w-full leading-normal'>{children}</table>
          </div>
        </div>
      )}
    </>
  )
}

interface PropsHead {
  children: React.ReactNode
}

const TableHead = ({ children }: PropsHead) => {
  return (
    <thead>
      <tr>
        {children}
        <th
          className={`px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 capitalize tracking-wider w-10 md:w-32`}
        >
          Actions
        </th>
      </tr>
    </thead>
  )
}

interface Props1 {
  children: React.ReactNode
  css?: string
}

const TableTh = ({ children, css }: Props1) => {
  return (
    <th
      className={`px-5 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 capitalize tracking-wider ${css}`}
    >
      {children}
    </th>
  )
}

const TableBody = ({ children }: PropsHead) => {
  return <tbody className='bg-white'>{children}</tbody>
}

const TableTr = ({ children, data, title, mutate }: PropsTable) => {
  const onDelete = async (id: string) => {
    await remove({
      url: `/api/${title}/${id}`
    })
    await mutate()
  }

  return (
    <tr className='hover:bg-gray-100'>
      {children}
      <td className='px-5 py-5 border-b border-gray-200 text-sm'>
        <Link
          className='inline-block mx-1 text-indigo-600 hover:text-indigo-900'
          href={`/panel/${title}/${data.id}/edit`}
          passHref
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(data.id)}
          className='inline-block mx-1 text-indigo-600 hover:text-indigo-900'
        >
          Delete
        </button>
      </td>
    </tr>
  )
}
const TableTd = ({ children, css }: Props1) => {
  return (
    <td
      className={`px-5 py-3 border-b border-gray-200 text-xs md:text-sm capitalize ${css}`}
    >
      {children}
    </td>
  )
}

const TableDataTitle = ({ title, name }) => {
  return (
    <>
      <div className='text-sm leading-5 font-medium text-gray-900'>{title}</div>
      <div className='text-sm leading-5 text-gray-500'>{name}</div>
    </>
  )
}

const TableLink = ({ children, href, ...rest }) => {
  return (
    <Link
      className='inline-block mx-1 text-indigo-600 hover:text-indigo-900'
      {...rest}
      href={href}
    >
      {children}
    </Link>
  )
}

Table.Head = TableHead
Table.Th = TableTh
Table.Body = TableBody
Table.Tr = TableTr
Table.Td = TableTd
Table.DataTitle = TableDataTitle
Table.Link = TableLink

export default Table
