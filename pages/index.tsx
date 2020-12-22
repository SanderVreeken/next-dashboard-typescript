import Head from 'next/head'
import { IconContext } from 'react-icons'
import { AiOutlineCheckCircle, AiOutlineReconciliation, AiOutlineSelect } from 'react-icons/ai'
import { BiShieldQuarter } from 'react-icons/bi' 

import Card from '../components/Card'
import CardContact from '../components/CardContant'
import CardData from '../components/CardData'
import CardGraph from '../components/CardGraph'
import CardHeader from '../components/CardHeader'
import CardProject from '../components/CardProject'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import SubTitle from '../components/SubTitle'
import TaskBar from '../components/TaskBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  // Cards that will be rendered within the page.
  const cards = [{
    backgroundColor: '#ffaf2a',
    children: (
      <>
        <CardHeader buttonBackgroundColor='white' buttonBoxShadow='rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px' buttonWidth='fit-content' icon={<AiOutlineSelect />} subTitle='About Projects' title='Metrics' />
        <CardData number={3} percentage={30} status='In Progress' />
        <CardData number={2} percentage={20} status='Nearing Completion' />
      </>
    )
  }, {
    backgroundColor: 'white',
    borderColor: '#e7ecef',
    children: (
      <>
        <CardHeader buttonBackgroundColor='#ffaf2a' buttonBoxShadow='rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px' buttonWidth='fit-content' icon={<AiOutlineCheckCircle />} subTitle='By Days & Status' title='Tasks Statistics' />
        <CardGraph />
      </>
    )
  }, {
    backgroundColor: '#2561ee',
    children: (
      <>
        <CardHeader buttonBackgroundColor='#111' buttonBoxShadow='rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px' buttonWidth='fit-content' icon={<AiOutlineReconciliation />} iconColor='white' subTitle='About Finances' title='Invoices' titleColor='white' />
        <CardData color='white' number={4} percentage={30} status='Outstanding' />
        <CardData color='white' number={10} status='Total Amount' />
      </>
    )
  }]
  // Clients that will be rendered within the clients span.
  const clients = [{
    name: 'Mathew Versteng',
    company: 'HiLead Fenix LLC',
    updated: 1593914820000
  }, {
    name: 'Helken Gelekser',
    company: 'Helinger Big LLC',
    updated: 1591752180000
  }, {
    name: 'Ibragim Pushkov',
    company: 'Fintech Compancy LLC',
    updated: 1591074720000
  }, {
    name: 'Nikola Telko',
    company: 'DollarFlight LLC',
    updated: 1590778260000
  }]
  // Projects that will be rendered within the projects span.
  const projects = [{
    title: 'GMB Vault',
    description: 'Website Development',
    tasks: {
      completed: 5,
      inProgress: 3,
      toDo: 2
    }
  }, {
    title: 'Otundo',
    description: 'CRM for Projects',
    tasks: {
      completed: 10,
      inProgress: 5,
      toDo: 0
    }
  }, {
    title: 'Trading Company',
    description: 'Trading Area',
    tasks: {
      completed: 0,
      inProgress: 10,
      toDo: 10
    }
  }]
  // TODO: Refactor, as the entire secutiry block is now written in-line.
  const securityCard = (
    <>
      <header style={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.8rem'
      }}>
        <h3>Security</h3>
        <IconContext.Provider value={{ color: '#00b582' }}>
          <BiShieldQuarter />
        </IconContext.Provider>
      </header>
      <div role='body' style={{
        fontSize: '12px',
        padding: '0.8rem'
      }}>
        <span style={{
          alignItems: 'center',
          display: 'flex',
          marginBottom: '12px'
        }}>
          <p>Last login:</p>
          <p style={{
            fontWeight: 700,
            marginLeft: '8px'
          }}>5 July 2020</p>
          <p style={{
            color: 'silver',
            fontWeight: 700,
            marginLeft: '5px'
          }}>at 4:07 AM</p>
        </span>
        <span style={{
          alignItems: 'center',
          display: 'flex',
          marginBottom: '12px'
        }}>
          <p>IP:</p>
          <p style={{
            fontWeight: 700,
            marginLeft: '8px'
          }}>212.19.20.173</p>
          <p style={{
            margin: '0 8px'
          }}>·</p>
          <img src='/images/Netherlands.svg' style={{
            height: '12px',
          }}></img>
          <p style={{
            marginLeft: '4px'
          }}>NL</p>
        </span>
        <span style={{
          alignItems: 'center',
          display: 'flex',
          marginBottom: '12px'
        }}>
          <p>Mozilla/5.0 (Macintosh; Intel Mac OS X)</p>
        </span>
      </div>
    </>
  )

  return (
    <div className={styles.home}>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <TaskBar />
        <div className={styles.home__body}>
          <Header />
          <h1 className={styles.home__title}>Welcome back, Sander Vreeken</h1>
          <span className={styles.home__cards}>
            {cards.map((card, index) => <Card backgroundColor={card.backgroundColor} borderColor={card.borderColor} height='238px' key={index}>{card.children}</Card>)} 
            <Card backgroundColor='#f0f3fc' height='238px'>{securityCard}</Card>
          </span>
          <SubTitle text='Recently Updated Clients' />
          <span className={styles.home__clients}>
            {clients.map(client => (
              <Card borderColor='#e7ecef' height='fit-content' minWidth='234px' padding='1.8rem'>
                <CardContact company={client.company} name={client.name} updated={client.updated} />
              </Card>
            ))}
          </span>
          <SubTitle text='Current Projects' />
          <span className={styles.home__projects}>
              {projects.map(project => (
                <Card borderColor='#e7ecef' height='fit-content' minWidth='350px' padding='1.8rem'>
                  <CardProject description={project.description} statuses={project.tasks} title={project.title} />
                </Card>
              ))}
          </span>
        </div>
      </main>
    </div>
  )
}
