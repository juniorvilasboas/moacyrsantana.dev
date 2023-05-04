import React from 'react'
import { useGet } from 'hooks/api'

import Header from 'components/Header'
import Container from 'components/Container'
import Table from 'components/Table'

const Index = () => {
  const { data: experiences, mutate } = useGet('/api/experience')

  return (
    <>
      <Header>
        <Header.Title name='experience' />
      </Header>

      <Container>
        <Table data={experiences} title='experience'>
          <Table.Head>
            <Table.Th>Role</Table.Th>
            <Table.Th>Company</Table.Th>
          </Table.Head>
          <Table.Body>
            {experiences &&
              experiences.map((experience: any) => (
                <Table.Tr
                  data={experience}
                  title='experience'
                  mutate={mutate}
                  key={experience.id}
                >
                  <Table.Td>{experience.role}</Table.Td>
                  <Table.Td>{experience.company}</Table.Td>
                </Table.Tr>
              ))}
          </Table.Body>
        </Table>
      </Container>
    </>
  )
}

export default Index
