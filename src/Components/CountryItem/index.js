import './index.css'

const CountryItem = props => {
  const {itemDetails, onClickVisited} = props
  const {id, name, isVisited} = itemDetails
  const onVisit = () => {
    onClickVisited(id)
  }
  return (
    <li className="list-item1">
      <p className="item-heading1">{name}</p>
      {isVisited === false && (
        <button onClick={onVisit} type="button" className="button1">
          Visit
        </button>
      )}
      {isVisited && <p className="par1">Visited</p>}
    </li>
  )
}
export default CountryItem
