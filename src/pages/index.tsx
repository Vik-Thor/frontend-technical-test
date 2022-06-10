import { FC, useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Logo from '../assets/lbc-logo.webp'
import styles from '../styles/Home.module.css'

const Home: FC = () => {
  const [data, setData] = useState(null);
  const [isloading, setIloading] = useState(false);

  useEffect(() => {
    setIloading(true);
    const users = await fetch('http://localhost:3005/users')
    .then((res) => res.json())
    .then((data) => {
      setData(data)
    })
  }, [])

  console.log(data);
  if (isloading) return <p>en train de charger les conversations...</p>
  if (!data) return <p>Aucune conversation</p>


  return (
    <div>coucou</div>
  )
}

export default Home