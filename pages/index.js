import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { useState } from 'react';
export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [img, setImg] = useState();
  const generateImage = async () => {
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt
        })
      })
      const data = await response.json();
      setImg(data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
      <div className={styles.main}>
          <h1 className={styles.title}>
              Mint NFTs in seconds with{" "}
              <span className={styles.Dalle}>DALL-E</span>
          </h1>
          <div className={styles.field}>
              <input
                  value={prompt}
                  onChange={(e) => {setPrompt(e.target.value)}}
                  className={styles.input}
                  placeholder="Portrait of an ape drinking a latte"
              ></input>
              <div onClick={generateImage} className={styles.button}>GO</div>
          </div>
          { img ? <img src={img}></img> : null}
          <p className={styles.Replit}>
              Built by eefh1 on Replit for
              <span>
                  <Link href="https://www.alchemy.com/">
                      <img
                          className={styles.Alchemy}
                          src="https://files.readme.io/8a6f996-small-alchemy-logo-black.png"
                      ></img>
                  </Link>
              </span>
          </p>
      </div>
  );
}
