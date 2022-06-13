import Head from 'next/head'
import Image from 'next/image'
import Select from 'react-select'
import { useTable } from 'react-table'

import styles from '../styles/Home.module.css'
import helms from '../data/helms.json'
import chests from '../data/chests.json'
import gauntlets from '../data/gauntlets.json'
import legs from '../data/legs.json'

import Item from './item'

const helmNames = Object.keys(helms)

function HelmList(props) {
  const listHelms = helms.map((helm) =>
    <li>{helm['Name']} weights {helm['Wgt.']} </li>
  )
  return (
    <ul>{listHelms}</ul>
  )
}

const poiseOptions =  [
// 31 poise to endure a dagger light hit
// 34 poise to endure a dagger two handed light hit
// 51 poise to endure a standard light hit (endures most PvE enemy attacks without flinching)
// 56 poise to endure a standard two handed light hit
// 61 poise to endure 2 dagger light hits, and 1 curved sword running light hit
// 67 poise to endure 2 dagger two handed light hits
// 101 poise to endure 2 standard weapon light hits
// 111 poise to endure 2 standard weapon light hits
// 101 poise to endure a great weapon two handed light hit (note that some attacks in the chain may deal greater poise damage, strong attacks cannot be endured even with 133 poise)
// 111 poise to endure a "great weapon" two handed light hit
  { value: 'fashion', label: 'fashion'},
  { value: '31', label: '31'},
  { value: '34', label: '34'},
  { value: '51', label: '51'},
  { value: '56', label: '56'},
  { value: '61', label: '61'},
  { value: '67', label: '67'},
  { value: '101', label: '101'},
  { value: '111', label: '111'}
]

const PoiseSelect = () => (
  <Select options={poiseOptions} />
)

function NameRatioTable(props) {
  const item_ratios = props.items.map( item => {
    return [
      item["name"],
      (Number(item["poise"])/Number(item["weight"])).toFixed(2)
    ]
  })
  item_ratios.sort((a,b) => a[1] < b[1])
  const item_ratios_above_one = item_ratios.filter(item => item[1] > 1)
  const rows = []
  let key = 0
  for (let item of item_ratios_above_one) {
    rows.push(
      <tr key={key}>
        <td key={key + "name"}>
          {item[0]}
        </td>
        <td key={key + "weight"}>
          {item[1]}
        </td>
      </tr>
    )
    key++
  }

  return (
    <table>
    <tr>
      <th>Item</th>
      <th>Poise per weight</th>
    </tr>
    <tbody>
      {rows}
    </tbody>
  </table>
  )
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Elden Equip</title>
        <meta name="description" content="Elden Ring Equip Load Calculator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Equip
        </h1>
        <div>
          <div>
            <h2>Helms</h2>
            <NameRatioTable items={helms}  />
          </div>
          <div>
            <h2>Chests</h2>
            <NameRatioTable items={chests}  />
          </div>
          <div>
            <h2>Gloves</h2>
            <NameRatioTable items={gauntlets}  />
          </div>
          <div>
            <h2>Pants</h2>
            <NameRatioTable items={legs}  />
          </div>
        </div>
        {/*Poise:
         <PoiseSelect />
        <Item name='radio' wgt='1000' />*/}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://spncr.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          spncr made this
        </a>
      </footer>
    </div>
  )
}
