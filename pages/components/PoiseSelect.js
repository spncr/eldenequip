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
