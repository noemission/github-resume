import React from "react";
import {Item, Label} from "semantic-ui-react";

const Repository = ({repository}) => {
    return (
        <Item>
            <Item.Content>
                <Item.Header as="a" href={repository.html_url} target="_blank">
                    {repository.name}
                </Item.Header>
                <Item.Meta>{repository.description}</Item.Meta>
                <Item.Extra >
                    <Label title="Number of stars" icon="star" content={repository.stargazers_count} />
                    <Label title="Number of watchers" icon="find" content={repository.watchers_count} />
                    <Label title="Number of issues" icon="bug" content={repository.open_issues_count} />
                    {repository.license && <Label title="License" content={repository.license.spdx_id} />}
                </Item.Extra>
            </Item.Content>
        </Item>
    );
};
export default Repository;

