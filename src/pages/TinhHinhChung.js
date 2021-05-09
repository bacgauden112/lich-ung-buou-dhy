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

export const TinhHinhChungList = (props) => (
  <List {...props} title="Danh sách - Tình hình Chung">
    <Datagrid rowClick="edit">
      <TextField source="bnvao" label="Bệnh nhân vào" />
      <TextField source="bncu" label="bệnh nhân cũ" />
      <TextField source="bnra" label="Bệnh nhân ra" />
      <TextField source="noitru" label="Nội trú" />
      <TextField source="ngoaitru" label="Ngoại trú" />
      <TextField source="chuyenden" label="Chuyển đến" />
      <TextField source="chuyendi" label="Chuyển đi" />
      <ShowButton label="Xem" />
      <EditButton label="Sửa" redirect={true}/>
      <DeleteButton label="Xóa" redirect={false} />
    </Datagrid>
  </List>
);

export const TinhHinhChungCreate = (props) => (
  <Create {...props} title="Tạo mới - Tình hình Chung">
    <SimpleForm redirect="list">
      <TextInput source="bnvao" label="Bệnh nhân vào" />
      <TextInput source="bncu" label="bệnh nhân cũ" />
      <TextInput source="bnra" label="Bệnh nhân ra" />
      <TextInput source="noitru" label="Nội trú" />
      <TextInput source="ngoaitru" label="Ngoại trú" />
      <TextInput source="chuyenden" label="Chuyển đến" />
      <TextInput source="chuyendi" label="Chuyển đi" />
    </SimpleForm>
  </Create>
);

export const TinhHinhChungEdit = (props) => (
  <Edit {...props} title="Sửa - Tình hình Chung">
    <SimpleForm>
      <TextInput source="bnvao" label="Bệnh nhân vào" />
      <TextInput source="bncu" label="bệnh nhân cũ" />
      <TextInput source="bnra" label="Bệnh nhân ra" />
      <TextInput source="noitru" label="Nội trú" />
      <TextInput source="ngoaitru" label="Ngoại trú" />
      <TextInput source="chuyenden" label="Chuyển đến" />
      <TextInput source="chuyendi" label="Chuyển đi" />
    </SimpleForm>
  </Edit>
);
