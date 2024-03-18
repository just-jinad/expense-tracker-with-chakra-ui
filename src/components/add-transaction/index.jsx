import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import React from "react";

const TransactionForm = ({ onClose, isOpen }) => {
  return (
    <>
      <div>trans form</div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <form>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add new transaction</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Enter description</FormLabel>
                <Input  type="text"
                  placeholder="Enter description"
                  name="description"></Input>
              </FormControl>

              <FormControl>
                <FormLabel>Enter description</FormLabel>
        
                <Input type="number" placeholder="Enter Amount" name="amount" ></Input>
              </FormControl>

              <RadioGroup mt={"5"}>
                <Radio name="type" colorScheme="blue" value="income">
                  Income
                </Radio>
                <Radio name="type" colorScheme="red" value="expense">
                  Expense
                </Radio>
              </RadioGroup>
            </ModalBody>

            <ModalFooter>
            <Button mr={"5"} 
             bg={'red.400'}
             textColor={'white'}
             fontWeight={'bold'}
              onClick={onClose}>
                Cancel
                </Button>

        
              <Button>Add</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default TransactionForm;
