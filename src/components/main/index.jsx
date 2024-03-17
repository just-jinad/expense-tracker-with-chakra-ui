import { Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Summary from '../summary'
import Expenseview from '../expense-view/Expenseview'

const Main = () => {
  return (
   <>
    <Flex textAlign={'center'} flexDirection={'column'} pl={5} pr={5}>
      <Flex justifyContent={'space-between'} alignItems={'center'} mt={12}>
        <Heading color={'blue.400'} display={['none', 'block', 'block', 'block', 'block']}>  
            Expense Tracker
        </Heading>
        <Flex alignItems={'center'}>
          <Button
          bg={'blue.500'}
          color={'black'}
          ml={4}
          >
            Add new transaction 
          </Button>
        </Flex>
      </Flex>

      <Summary/>
    <Flex w='full' alignItems={'flex-start'} justifyContent={'space-evenly'} flexDirection={['column', 'column', 'column', 'row', 'row']}>
    <Expenseview/>
    <Expenseview/>
    </Flex>


    </Flex>
   </>
  )
}

export default Main