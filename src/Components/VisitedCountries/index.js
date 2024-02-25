import './index.css'

const VisitedCountries = props => {
  const {countryDetails, onClickRemove} = props
  const {id, name, imageUrl} = countryDetails
  const onRemove = () => {
    onClickRemove(id)
  }
  return (
    <li className="list-item2">
      <img className="img2" src={imageUrl} alt="thumbnail" />
      <div className="flexi2">
        <p className="par2">{name}</p>
        <button onClick={onRemove} type="button" className="button2">
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
