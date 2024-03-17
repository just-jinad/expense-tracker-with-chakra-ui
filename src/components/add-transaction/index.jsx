import { FormControl, FormLabel, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

const TransactionForm = () => {
  return (
   <>
    <div>trans form</div>
    <Modal>
    <form>
    <ModalOverlay/>
    <ModalContent>
        <ModalHeader>Add new transaction</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
            <FormControl>
                <FormLabel>Enter description</FormLabel>
            </FormControl>
        </ModalBody>
    </ModalContent>
    </form>
    </Modal>
   </>
  )
}

export default TransactionForm