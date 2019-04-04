import React, {Component} from "react";
import {Container, Header} from "semantic-ui-react";
import UsernameForm from "./UsernameForm/UsernameForm";
import GithubUser from "../models/GithubUser";
import UserCard from "./UserCard/UserCard";
import RepositoriesList from "./RepositoriesList/RepositoriesList";
import "./App.scss";

class App extends Component {
  state = {
    formLoading: false,
    formError: ""
  };
  onSubmit = async (username) => {
    this.setState({formLoading: true, formError: ""});
    try {
      const [info, repos] = await Promise.all([
        GithubUser.getUserInfo(username),
        GithubUser.getRepositories(username)
      ]);
      const languages = GithubUser.getLanguages(repos);

      this.setState({
        user: {
          info,
          repos,
          languages
        }
      });
    } catch (error) {
      this.setState({formError: error.message});
    }
    this.setState({formLoading: false});
  };
  render() {
    const {user} = this.state;
    return (
      <Container className="main-container">
        <Header textAlign="center" as="h2">Github Resume <sup>2</sup> </Header>
        <UsernameForm error={this.state.formError} loading={this.state.formLoading} onSubmit={this.onSubmit} />
        {user && user.info && <UserCard user={user.info} languages={user.languages} />}
        {user && user.repos && <RepositoriesList repositories={user.repos} />}
      </Container>
    );
  }
}
export default App;
