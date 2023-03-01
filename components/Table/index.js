import Link from 'next/link'

const Table = ({ children }) => {
  return <table className='min-w-full'>{children}</table>
}

const TableHead = ({ children }) => {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  )
}

const TableTh = ({ children }) => {
  return (
    <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
      {children}
    </th>
  )
}

const TableBody = ({ children }) => {
  return <tbody className='bg-white'>{children}</tbody>
}

const TableTr = ({ children }) => <tr>{children}</tr>
const TableTd = ({ children }) => (
  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
    {children}
  </td>
)

const TableDataName = ({ name, slug, srcImage }) => {
  return (
    <div className='flex items-center'>
      {srcImage && (
        <div className='flex-shrink-0 h-10 w-10'>
          <img className='h-10 w-10 rounded-full' src={srcImage} alt='' />
        </div>
      )}
      <div>
        <div className='text-sm leading-5 font-medium text-gray-900'>
          {name}
        </div>
        <div className='text-sm leading-5 text-gray-500'>{slug}</div>
      </div>
    </div>
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
    <Link href={href}>
      <a className='text-indigo-600 hover:text-indigo-900' {...rest}>
        {children}
      </a>
    </Link>
  )
}

Table.Head = TableHead
Table.Th = TableTh
Table.Body = TableBody
Table.Tr = TableTr
Table.Td = TableTd
Table.DataName = TableDataName
Table.DataTitle = TableDataTitle
Table.Link = TableLink

export default Table
