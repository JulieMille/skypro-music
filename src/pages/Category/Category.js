import { Bar } from '../../components/Bar/Bar';
import { Nav } from '../../components/Nav/Nav';
import { CenterBlock } from '../../components/CenterBlock/CenterBlock';
import { useEffect, useState } from 'react';
import { Main } from '../../App.styles';
import { useParams } from 'react-router-dom';


export const Category = () => {
    const heading = ['Плейлист дня', '100 танцевальных хитов', 'Инди заряд']
    const { id } = useParams();
    console.log(id);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000) 
  }, []);
  return (
    <>
    <Main>
        <Nav/>
        <CenterBlock title={heading[id - 1]} isLoading={isLoading}/>
    </Main>
    <Bar isLoading={isLoading}/>
    </>
  );
}