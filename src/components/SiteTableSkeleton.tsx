import { Skeleton } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export default function SiteTableSkeleton() {
  return (
    <TableContainer>
      <Table variant="simple" backgroundColor="white" borderRadius={8}>
        <Thead backgroundColor="gray.50">
          <Tr>
            <Th>Name</Th>
            <Th>Site Link</Th>
            <Th>Feedback Link</Th>
            <Th>Date Added</Th>
            <Th>{""}</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td width="75px">
              <Skeleton height="20px" m={1} />
              <Skeleton height="20px" m={1} />
              <Skeleton height="20px" m={1} />
              <Skeleton height="20px" m={1} />
            </Td>
            <Td width="125px">
              <Skeleton height="20px" m={1} />
              <Skeleton height="20px" m={1} />
              <Skeleton height="20px" m={1} />
              <Skeleton height="20px" m={1} />
            </Td>
            <Td width="50px">
              <Skeleton height="20px" m={1} />
              <Skeleton height="20px" m={1} />
              <Skeleton height="20px" m={1} />
              <Skeleton height="20px" m={1} />
            </Td>
            <Td width="100px">
              <Skeleton height="20px" m={1} />
              <Skeleton height="20px" m={1} />
              <Skeleton height="20px" m={1} />
              <Skeleton height="20px" m={1} />
            </Td>
            <Td width="75px">
              <Skeleton height="20px" m={1} />
              <Skeleton height="20px" m={1} />
              <Skeleton height="20px" m={1} />
              <Skeleton height="20px" m={1} />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
