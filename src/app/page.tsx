import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
     
        <Image
          className={styles.logo}
          src="/image/DSC.jpg"
          alt="Next.js logo"
          width={480}
          height={380}
          priority
        />
      <img src="/image/DSC.jpg" style={{width:"300px"}}/>
        <h1>kjbbbbbbbbbbbb</h1>
    </div>
  );
}
