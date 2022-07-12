import { useEffect, useState } from 'react'

import helmData from '../../data/helms.json'
import chestData from '../../data/chests.json'
import gauntletData from '../../data/gauntlets.json'
import pantData from '../../data/legs.json'

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
      <tbody>
        {rows ? rows : <tr></tr>}
      </tbody>
    </table>
  )
}

export default function AllNameRatioTables(props) {
  const [helms, setHelms] = useState([])
  const [chests, setChests] = useState([])
  const [gauntlets, setGauntlets] = useState([])
  const [pants, setPants] = useState([])

  useEffect(()=>setHelms(helmData))
  useEffect(()=>setChests(chestData))
  useEffect(()=>setGauntlets(gauntletData))
  useEffect(()=>setPants(pantData))


  return (
  <div className="allTables">
    <div>
        <h2>Helms</h2>
        <NameRatioTable items={helms} />
    </div>
    <div>
      <h2>Chests</h2>
      <NameRatioTable items={chests} />
    </div>
    <div>
      <h2>Gloves</h2>
      <NameRatioTable items={gauntlets} />
    </div>
    <div>
      <h2>Pants</h2>
      <NameRatioTable items={pants} />
    </div>
  </div> )
}
