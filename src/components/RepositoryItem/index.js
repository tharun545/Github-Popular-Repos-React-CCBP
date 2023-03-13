// Write your code here
// import {}
import './index.css'

const RepositoryItem = props => {
  const {repositoryList} = props
  const {
    // id,
    name,
    issuesCount,
    forksCount,
    starsCount,
    avatarUrl,
  } = repositoryList

  return (
    <li className="repository-card">
      <img src={avatarUrl} alt={name} className="avatar-icon" />
      <h1 className="repository-name">{name}</h1>
      <div>
        <div className="para-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="image-icon"
          />
          <p className="para">{starsCount} stars</p>
        </div>
        <div className="para-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="image-icon"
          />
          <p className="para">{forksCount} forks</p>
        </div>
        <div className="para-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="image-icon"
          />
          <p className="para">{issuesCount} open issues</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
