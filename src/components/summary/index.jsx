import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import TransactionForm from "../add-transaction";
import TransactionChartSummary from "../chart";

const Summary = ({onClose, isOpen}) => {
  return (
    <>
      {/* <div>User over view</div> */}
      <Box
        p="6"
        border={"1px soild"}
        borderColor={"gray.100"}
        borderRadius={"10"}
        overflow={"hidden"}
        bg={"white"}
      >
        <Flex
          w="full"
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={{
            base: "column",
            lg: "row",
            sm: "column",
            md: "column",
            xl: "row",
          }}
        >
          <Flex
            flex={1}
            w={"full"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            ml={"-20"}
            mr={"2"}
          >
            <Heading size={3} mb={3} textColor={"black.400"}>
              Balance is 100
            </Heading>

            <Flex
              justifyContent={"space-evenly"}
              alignItems={"center"}
              w={"full"}
              h={"100px"}
              border={"1px solid"}
              borderColor={"gray.100"}
            >
              <Flex flexDirection={"column"}>
                <Heading>$100</Heading>
                <div>Total Income</div>
              </Flex>

              <Flex flexDirection={"column"}>
                <Heading>$100</Heading>
                <div>Total Expense</div>
              </Flex>
            </Flex>
          </Flex>
          <Box
            flex={1}
            ml={"-90px"}
            mt={"10px"}
            mr={"5"}
            height={"300px"}
            w={"300px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Heading>
              <TransactionChartSummary expense={100} income={1000} />
            </Heading>
          </Box>
        </Flex>
        <TransactionForm onClose={onClose} isOpen={isOpen} />
      </Box>
    </>
  );
};

export default Summary;
