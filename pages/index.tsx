import type { NextPage } from 'next'
import Head from 'next/head'
import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import doctorImage from "../public/doctor.jpg";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PTMI - Transforming Transplantology</title>
        <meta
          name="description"
          content="The Personalized Transplant Medicine Institute (PTMI) is a NJ-based, non-profit entity created to ‘transform transplantology’ by conducting translational research in the areas of Transplant Diagnostics and Regenerative Medicine."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Transplant</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Regenerate</a>
            </Link>
          </li>
          <li>
            <label htmlFor="search" className={styles.search}>
              <input type="search" />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14V14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                  fill="#E4E4E4"
                />
              </svg>
            </label>
          </li>
        </ul>
      </header>
      <section className={styles.fullBanner}>
        <div>
          <div>
            <Image
              src="/ptmi-logo.png"
              width={339}
              height={148}
              alt="Logo PTMI"
            />
          </div>
          <div className={styles.textDestak}>
            <h1>
              To Save and Enhance
              <br />
              <span>Lives</span>
            </h1>
            <p>
              The Personalized Transplant Medicine Institute (PTMI) is a
              NJ-based, non-profit entity created to ‘transform transplantology’
              by conducting translational research in the areas of Transplant
              Diagnostics and Regenerative Medicine.
            </p>
            <div>
              <Link href="/">
                <a className={`${styles.btn} ${styles["btn-fill"]}`}>
                  Learn more
                </a>
              </Link>
             
            </div>
          </div>
        </div>
        <div className={styles.doctor}>
          <div className={styles.doctorImage1}>
            <Image
              src="/doctor-female.png"
              width={413}
              height={327}
              alt="Doctor"
            />
          </div>
          <div className={styles.doctorImage2}>
            <Image
              src="/doctor-male.png"
              width={403}
              height={327}
              alt="doctor"
            />
          </div>
        </div>
      </section>
      <main className={styles.main}>
        <div><Image
              src="/section-block.jpg"
              width={616}
              height={647}
              alt="doctor"
            /></div>
        <div>

           <div className={styles.textDestak}>
            <h1>
              Organ and tissue transplants 
              <br />
              <span>faster and safer</span>
            </h1>
            <p>
              In order to develop innovations that will have the maximum impact on the number of successful organ and tissue transplants, The PTMI has prioritized our research efforts in the following areas:

              <ul>
                <li>Development of individualized transplant diagnostic testing procedures to provide more accurate predictions of organ transplant safety and tolerance indications</li>
                <li>Development of regenerative medicine procedures using organs, tissues, and stem cells from research-consented deceased donors that will address unmet needs in transplantation</li>
                <li>Collaboration with OPOs, including the NJ Sharing Network, local/regional/national transplant programs, academic medical centers, and other nonprofit and public benefit organizations to explore additional applications of PTMI’s proprietary assay and regenerative medicine technologies  </li>
                <li>Development of a bank of cryopreserved cells and extracellular matrix (secretome) from different organ/tissue sources </li>
                <li>Development of organoids and organs-on-a-chip</li>
              </ul>
            </p>
             <Link href="/">
                <a className={`${styles.btn} ${styles["btn-fill"]}`}>
                  Learn More
                </a>
              </Link>
            </div>
        </div>

      </main>

      <section className={styles.features}>
        <div  className={styles.featuresBlock}>
          <h2>Improve the quality of life<br/><span> for transplant recipients</span></h2>
          <div className={styles.row}>
            <div className={styles.card}>
              <strong>Icon - Title</strong>
              <strong>Service1</strong>
               <Link href="/">
                <a className={`${styles.btn} ${styles["btn-stroke"]} ${styles["btn-small"]}`}>
                 Read more
                </a>
              </Link>

              </div>
            <div className={styles.card}>
              <strong>Icon - Title</strong>
              <strong>Service2</strong>
              <Link href="/">
                <a className={`${styles.btn} ${styles["btn-stroke"]} ${styles["btn-small"]}`}>
                 Read more
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.card}>
              <strong>Icon - Title</strong>
              <strong>Service3</strong>
              <Link href="/">
                <a className={`${styles.btn} ${styles["btn-stroke"]} ${styles["btn-small"]}`}>
                 Read more
                </a>
              </Link>
            </div>
            <div className={styles.card}>
              <strong>Icon - Title</strong>
              <strong>Service4</strong>
              <Link href="/">
                <a className={`${styles.btn} ${styles["btn-stroke"]} ${styles["btn-small"]}`}>
                 Read more
                </a>
              </Link>
            </div>
            <div className={styles.card}>
              <strong>Icon - Title</strong>
              <strong>Service5</strong>
              <Link href="/">
                <a className={`${styles.btn} ${styles["btn-stroke"]} ${styles["btn-small"]}`}>
                 Read more
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.doctorPicture}>
          <Image
              src={doctorImage}
              alt="Doctor"
            />
        </div>

      </section>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/ptmi-logo-invert.png"
              alt="PTMI Logo"
              width={161}
              height={70}
            />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
