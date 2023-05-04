import React from 'react'
import Link from 'next/link'
import { remove } from 'lib/fetch'
import Alert from 'components/Alert'
import { useGet } from 'hooks/api'
import Header from 'components/Header'
import Container from 'components/Container'
import Table from 'components/Table'

const Index = () => {
  const { data: languages, mutate } = useGet('/api/language')
  const onDelete = async (id: string) => {
    await remove({
      url: `/api/language/${id}`
    })
    await mutate()
  }

  return (
    <>
      <Header>
        <Header.Title name='language' />
      </Header>

      <Container>
        <Table data={languages} title='language'>
          <Table.Head>
            <Table.Th>language</Table.Th>
            <Table.Th>understand</Table.Th>
            <Table.Th>speak</Table.Th>
            <Table.Th>write</Table.Th>
          </Table.Head>
          <Table.Body>
            {languages &&
              languages.map((language: any) => (
                <Table.Tr data={language} title='language' key={language.id}>
                  <Table.Td>{language.name}</Table.Td>
                  <Table.Td>{language.levelUnderstand.value}</Table.Td>
                  <Table.Td>{language.levelSpeak.value}</Table.Td>
                  <Table.Td>{language.levelWrite.value}</Table.Td>
                </Table.Tr>
              ))}
          </Table.Body>
        </Table>
      </Container>
    </>
  )
}

export default Index
