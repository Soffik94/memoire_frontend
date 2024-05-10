import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import Icon from "@mdi/react";
import { mdiPencil } from "@mdi/js";
import { mdiDelete } from "@mdi/js";

function TableOfRecords() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr class="table-dark">
          ><th>#</th>
          <th>First Name</th>
          <td>
            <Button>
              <Icon path={mdiPencil} size={1} />
            </Button>
          </td>
          <td>
            <Button>
              <Icon path={mdiDelete} size={1} />
            </Button>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr class="table-dark">
          ><td>1</td>
          <td>Mark</td>
          <td>
            <Button>
              <Icon path={mdiPencil} size={1} />
            </Button>
          </td>
          <td>
            <Button>
              <Icon path={mdiDelete} size={1} />
            </Button>
          </td>
        </tr>
        <tr class="table-dark">
          ><td>2</td>
          <td>Jacob</td>
          <td>
            <Button>
              <Icon path={mdiPencil} size={1} />
            </Button>
          </td>
          <td>
            <Button>
              <Icon path={mdiDelete} size={1} />
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableOfRecords;
