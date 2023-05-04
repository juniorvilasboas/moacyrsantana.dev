import React from 'react'
import { useGet } from 'hooks/api'

import Table from 'components/Table'
import Header from 'components/Header'
import Container from 'components/Container'

const Index = () => {
  const { data: degrees, mutate } = useGet('/api/education')

  return (
    <>
      <Header>
        <Header.Title name='education' />
      </Header>

      <Container>
        <Table
          data={degrees?.filter((degree: any) => degree.tipo === 'Graduacao')}
          title='degree'
        >
          <Table.Head>
            <Table.Th>Institution</Table.Th>
            <Table.Th>Degree</Table.Th>
          </Table.Head>
          <Table.Body>
            {degrees &&
              degrees
                .filter((degree: any) => degree.tipo === 'Graduacao')
                .map((degree: any) => (
                  <Table.Tr
                    data={degree}
                    title='education'
                    mutate={mutate}
                    key={degree.id}
                  >
                    <Table.Td>{degree.institution}</Table.Td>
                    <Table.Td>{degree.subject}</Table.Td>
                  </Table.Tr>
                ))}
          </Table.Body>
        </Table>
        <Table
          data={degrees?.filter(
            (degree: any) => degree.tipo === 'Profissionalizante'
          )}
          title='course'
        >
          <Table.Head>
            <Table.Th>Institution</Table.Th>
            <Table.Th>Degree</Table.Th>
            <Table.Th>Course</Table.Th>
          </Table.Head>
          <Table.Body>
            {degrees &&
              degrees
                .filter((degree: any) => degree.tipo === 'Profissionalizante')
                .map((degree: any) => (
                  <Table.Tr
                    data={degree}
                    title='education'
                    mutate={mutate}
                    key={degree.id}
                  >
                    <Table.Td>{degree.institution}</Table.Td>
                    <Table.Td>{degree.subject}</Table.Td>
                    <Table.Td>{degree.courseload}</Table.Td>
                  </Table.Tr>
                ))}
          </Table.Body>
        </Table>
      </Container>
    </>
  )
}

export default Index
