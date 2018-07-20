import React, { Component } from 'react'
import slackLogo from '../assets/Slack_Monochrome_Black.svg'
import addToMailchimp from 'gatsby-plugin-mailchimp'

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      emailError: false,
      emailSuccess: false,
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    try {
      addToMailchimp(this.state.email).then(response => {
        this.setState({
          emailSuccess: true,
          emailError: false,
        })
      })
    } catch (e) {
      this.setState({
        emailError: true,
        emailSuccess: false,
      })
    }
  }

  render() {
    const { emailSuccess, emailError, alreadySubscribed, email } = this.state
    return (
      <div className="landing-container">
        <h1>JOBCAMP</h1>
        <h2>WHERE BOOTCAMP GRADS GET JOBS</h2>
        <p>Join our community on</p>
        <a href="https://join.slack.com/t/jobcamp/shared_invite/enQtNDAxNDg1Mjg0NTQ4LTM2M2JlMWJlYjBjOTdhODkzZmVkNWVkOWU5MDA3Mzg4ZjQ1MzU4NTNkMjM4MjRkMTE2NmI5NGU3NGZhMDkyYzc">
          <img src={slackLogo} alt="slack logo" />
        </a>
        {!emailSuccess ? (
          <p>And enter your email to be notified when we launch</p>
        ) : (
          ''
        )}
        {!emailSuccess ? (
          <form>
            <input
              type="text"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <button type="submit" onClick={this.handleSubmit}>
              Subscribe!
            </button>
          </form>
        ) : (
          <h3>
            🎉 You'll be the first to know when we launch at
            {' ' + email}! 🎉
          </h3>
        )}
        {emailError ? <span>Please enter a valid email</span> : ''}
      </div>
    )
  }
}

export default IndexPage
