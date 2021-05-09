import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Create,
  SimpleForm,
  TextInput,
  Edit,
  EditButton,
  DeleteButton,
  ShowButton,
} from 'react-admin';

export const HCList = (props) => (
  <List {...props} title="Danh sách - HC">
    <Datagrid rowClick="edit">
      <TextField source="buoisang" label="Buổi sáng" />
      <TextField source="tieuban" label="Tiêủ ban" />
      <ShowButton label="Xem" />
      <EditButton label="Sửa" redirect={true}/>
      <DeleteButton label="Xóa" redirect={false} />
    </Datagrid>
  </List>
);

export const HCCreate = (props) => (
  <Create {...props} title="Tạo - HC">
    <SimpleForm redirect="list">
      <TextInput source="buoisang" label="Buổi sáng" />
      <TextInput source="tieuban" label="Tiêủ ban" />
    </SimpleForm>
  </Create>
);

export const HCEdit = (props) => (
  <Edit {...props} title="Sửa - HC">
    <SimpleForm>
      <TextInput source="buoisang" label="Buổi sáng" />
      <TextInput source="tieuban" label="Tiêủ ban" />
    </SimpleForm>
  </Edit>
);
