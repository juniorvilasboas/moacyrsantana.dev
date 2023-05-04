import React from 'react'

import { useGet } from 'hooks/api'

import Header from 'components/Header'
import Container from 'components/Container'
import Table from 'components/Table'
import ImageList from 'components/Image/imageList'

const Index = () => {
  const { data: portifolios, mutate } = useGet('/api/portifolio')

  return (
    <>
      <Header>
        <Header.Title name='portifolio' />
      </Header>

      <Container>
        <Table data={portifolios} title='portifolio'>
          <Table.Head>
            <Table.Th>Layout</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Category</Table.Th>
          </Table.Head>
          <Table.Body>
            {portifolios &&
              portifolios.map((portifolio: any) => (
                <Table.Tr
                  key={portifolio.id}
                  data={portifolio}
                  title={'portifolio'}
                  mutate={mutate}
                >
                  <Table.Td>
                    <ImageList srcImage={portifolio.layout} />
                  </Table.Td>
                  <Table.Td>{portifolio.name}</Table.Td>
                  <Table.Td>{portifolio.category}</Table.Td>
                </Table.Tr>
              ))}
          </Table.Body>
        </Table>
      </Container>
    </>
  )
}

export default Index
