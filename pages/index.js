import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { useState } from 'react';
export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [imgs, setImgs] = useState();
  const [loading, setLoading] = useState(false);
  const generateImage = async () => {
    if (prompt) {
      try {
      setLoading(true);
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
      setImgs(data);
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
    }}
  }

  return (
      <div className={styles.main}>
          <h1 className={styles.title}>
              Mint NFTs in seconds with{" "}
              <span className={styles.Dalle}>DALL-E</span>
          </h1>
          <span className={styles.examples}>
              <img
                  className={styles.example3}
                  src="https://cdn.discordapp.com/attachments/666142372580556800/1076025257770631168/image.png"
              ></img>
              <img
                  className={styles.example}
                  src="https://cdn.discordapp.com/attachments/666142372580556800/1076019182002520094/image.png"
              ></img>
              <img
                  className={styles.example1}
                  src="https://cdn.discordapp.com/attachments/666142372580556800/1076021854193590312/image.png"
              ></img>
              <img
                  className={styles.example2}
                  src="https://cdn.discordapp.com/attachments/666142372580556800/1076022615489126401/image.png"
              ></img>
          </span>
          <div className={styles.field}>
              <input
                  value={prompt}
                  onChange={(e) => {
                      setPrompt(e.target.value);
                  }}
                  className={styles.input}
                  placeholder="An impressionist oil painting of an ape drinking a latte"
                  required
              ></input>
              <div onClick={generateImage} className={styles.button}>
                  GO
              </div>
          </div>
          {loading ? (
              <div className={styles.loading}>
                  <div className={styles.loadimg}></div>
                  <div className={styles.loadimg}></div>
                  <div className={styles.loadimg}></div>
                  <div className={styles.loadimg}></div>
                  <div className={styles.loadimg}></div>
              </div>
          ) : null}
          {imgs && !loading ? (
              <div className={styles.imgs}>
                  {imgs.map((img) => {
                      return <img className={styles.nft} src={img.url}></img>;
                  })}
              </div>
          ) : null}

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
