import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LanguageFilterItem from '../LanguageFilterItem'

import './index.css'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    repositoryList: [],
    isLoader: true,
    selectedFilter: 'ALL',
  }

  componentDidMount() {
    this.getRepositoryItems(languageFiltersData[0].id)
  }

  getRepositoryItems = async selectedFilter => {
    const url = `https://apis.ccbp.in/popular-repos?language=${selectedFilter}`
    // const options = {
    //   method: 'GET',
    // }
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    const updatedItems = data.popular_repos.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      issuesCount: eachItem.issues_count,
      forksCount: eachItem.forks_count,
      starsCount: eachItem.stars_count,
      avatarUrl: eachItem.avatar_url,
    }))
    this.setState({repositoryList: updatedItems, isLoader: false})
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#0284c7" width={50} height={50} />
    </div>
  )

  updateSelectedFilterItem = newFilter => {
    this.setState({selectedFilter: newFilter})
    this.getRepositoryItems(newFilter)
  }

  renderLanguageFilterItems = () => (
    <div>
      <ul className="language-card-container">
        {languageFiltersData.map(eachFilter => (
          <LanguageFilterItem
            key={eachFilter.id}
            languageFiltersData={eachFilter}
            updateSelectedFilterItem={this.updateSelectedFilterItem}
          />
        ))}
      </ul>
    </div>
  )

  renderRepositoryItem = () => {
    const {repositoryList} = this.state

    return (
      <div>
        <ul className="repository-items-hold-container">
          {repositoryList.map(eachItem => (
            <RepositoryItem key={eachItem.id} repositoryList={eachItem} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoader} = this.state
    return (
      <div className="app-container">
        <h1 className="app-heading">Popular</h1>
        {this.renderLanguageFilterItems()}
        {isLoader ? this.renderLoader() : this.renderRepositoryItem()}
      </div>
    )
  }
}

export default GithubPopularRepos
