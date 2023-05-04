import React from 'react'
import { useGet } from 'hooks/api'

import SkilImage from 'components/Skills/SkilImage'
import Header from 'components/Header'
import Container from 'components/Container'
import Table from 'components/Table'

const Index = () => {
  const { data: skills, mutate } = useGet('/api/skill')

  return (
    <>
      <Header>
        <Header.Title name='skill' />
      </Header>

      <Container>
        <Table data={skills} title='skill'>
          <Table.Head>
            <Table.Th>Skills</Table.Th>
            <Table.Th>Logos</Table.Th>
            <Table.Th>Categories</Table.Th>
          </Table.Head>
          <Table.Body>
            {skills &&
              skills.map((skill: any) => (
                <Table.Tr
                  data={skill}
                  title='skill'
                  key={skill.id}
                  mutate={mutate}
                >
                  <Table.Td>{skill.name}</Table.Td>
                  <Table.Td>
                    <SkilImage
                      key={skill.id}
                      item={skill}
                      css='h-6 md:h-8 inline-block mr-4'
                    />
                  </Table.Td>
                  <Table.Td>{skill.tipo}</Table.Td>
                </Table.Tr>
              ))}
          </Table.Body>
        </Table>
      </Container>
    </>
  )
}

export default Index
