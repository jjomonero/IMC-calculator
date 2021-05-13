import Head from 'next/head'
import Image from 'next/image'
import react, { Component, useState } from 'react'
import {useRouter} from 'next/router'
import React from 'react'

import styles from './home.module.scss'
import { Button, Divider, Input, TextField } from '@material-ui/core'


type calculator = {
  altura: number;
  alturaMedia: number;
  peso: number;
  imc: number;
  value: number;
}

export default function Home(calculator) {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [imc, setImc] = useState();

  const calcIMC = () => {
    const alturaMedia = altura / 100
    setImc(peso/(alturaMedia*alturaMedia))
  }

  const reset = () => {
    setImc("");
    setPeso("");
    setAltura("");
  };

  function imcResult () {
    if (imc == 0) {
      return 
    }

    if (imc <= 18.5) {
      return 'Abaixo do peso'
    }

    if (imc <= 24.9) {
      return 'Peso normal'
    }

    if (imc <= 29.9) {
      return 'Sobrepeso normal'
    }

    if (imc <= 34.9) {
      return 'Obesidade tipo 1'
    }

    if (imc <= 39.9) {
      return 'Obesidade tipo 2'
    } 
    
    if (imc > 39.9) {
      return 'Obesidade alta, procure um médico!'
    }
  }
  return (
    <div className={styles.container} >
      <Head>
      <title>Calculadora IMC</title>
      <meta name="description" content="Pesando sua dieta" />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <label className={styles.label} htmlFor="peso">Peso</label>
      <TextField  className={styles.peso} value={peso} onChange={({target}) => setPeso(target.value)} variant="outlined" color="primary" id="peso" placeholder=" Informe seu peso..." autoFocus/>

      <label className={styles.label}htmlFor="altura">Altura</label>
      <TextField className={styles.altura} value={altura} onChange={({target}) => setAltura(target.value)} variant="outlined" color="primary" id="altura" placeholder=" Informe sua altura..."/>

      <Button  className={styles.button} onClick={() => calcIMC()} variant="text"> Calcular IMC</Button>
      <Button  className={styles.button} onClick={reset} variant="text"> Clear IMC</Button>

      <p>
        o seu IMC é : <br/> 
      <strong>{imc}</strong> 
      <br/>

        <span>_______________________________</span>

      <br/>
      <br/>

        kg/mc : <br/>
      <strong>{imcResult()}</strong> 
      </p>
    </div>
  )
}

