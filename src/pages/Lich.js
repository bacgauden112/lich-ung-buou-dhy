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
  DateField,
  DateInput,
  SaveButton, 
  Toolbar
} from 'react-admin';
import ListActions from '../components/Lich/LichActions';

export const LichList = (props) => (
  <List {...props} title="Danh sách - Lịch" actions={<ListActions />} >
    <Datagrid rowClick="edit">
      <TextField source="tenbn" label="Tên bệnh nhân" />
      <TextField source="chandoan" label="Chẩn đoán" />
      <DateField source="ngayphauthuat" label="Ngày phẫu thuật" />
      <ShowButton label="Xem" />
      <EditButton label="Sửa"/>
      <DeleteButton label="Xóa"/>
    </Datagrid>
  </List>
);

export const LichCreate = (props) => (
  <Create {...props} title="Tạo - Lịch">
    <SimpleForm redirect="list">
      <TextInput source="tenbn" label="Tên bệnh nhân" />
      <TextInput source="chandoan" label="Chẩn đoán" />
      <DateInput translate='vi' source="ngayphauthuat" label="Ngày phẫu thuật" />
    </SimpleForm>
  </Create>
);

export const LichEdit = (props) => (
  <Edit {...props} title="Sửa - Lịch">
    <SimpleForm>
      <TextInput source="tenbn" label="Tên bệnh nhân" />
      <TextInput source="chandoan" label="Chẩn đoán" />
      <DateInput source="ngayphauthuat" label="Ngày phẫu thuật" />
    </SimpleForm>
  </Edit>
);
