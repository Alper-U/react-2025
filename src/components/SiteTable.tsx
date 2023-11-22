import { Skeleton } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Link,
} from "@chakra-ui/react";
import { format, parseISO } from "date-fns";

export default function SiteTable(sites: any) {
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
          {sites.sites.map((site: sitesResponse) => (
            <Tr key={site.id}>
              <Td fontWeight="medium">{site.name}</Td>
              <Td>{site.url}</Td>
              <Td>
                <Link>View Feedback</Link>
              </Td>
              <Td>{format(parseISO(site.createdAt), "PPpp")}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
