import React from "react";
import {Item} from "semantic-ui-react";
import Repository from "../Repository/Repository";

const RepositoriesList = ({repositories}) => {
    return (
        <Item.Group divided>
            {repositories.map(repo => <Repository key={repo.id} repository={repo} />)}
        </Item.Group>
    );
};
export default RepositoriesList;

