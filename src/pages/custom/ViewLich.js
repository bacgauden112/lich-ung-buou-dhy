import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { DataProviderContext, Loading } from 'react-admin';
import LichTab from '../../components/Lich/LichTab';

const ViewLich = () => {
  const dataProvider = useContext(DataProviderContext);
  const [lich, setLich] = useState();
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const getUser = async () => {
      const lich = await dataProvider.getList('lich', 
      { 
        pagination: { 
          page: 1, 
          perPage: 100 
        },
        sort: { field: 'id', order: 'ASC' },
        filter: {
        }
      });

      setLich(lich.data);
      setLoading(false);
    }
    getUser();
  }, []);
  
  if (loading) return <Loading />;
  return (
    <LichTab rows={lich}/>
  )
};
export default ViewLich;
