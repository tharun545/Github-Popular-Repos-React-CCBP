// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageFiltersData, updateSelectedFilterItem} = props
  const {id, language} = languageFiltersData

  const onChangeId = () => {
    updateSelectedFilterItem(id)
  }

  return (
    <li>
      <button
        type="button"
        className={`lang-button ${id}`}
        onClick={onChangeId}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
