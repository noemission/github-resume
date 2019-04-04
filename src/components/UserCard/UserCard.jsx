import React from "react";
import {Grid, Image, Header} from "semantic-ui-react";
import moment from "moment";

const UserCard = ({user, languages}) => {
    const firstName = user.name.split(" ")[0];
    const userCreationDate = moment(user.created_at);
    const now = moment();
    const userDuration = moment.duration(now.diff(userCreationDate)).humanize();

    return (
        <Grid padded="vertically" columns={2} stackable>
            <Grid.Column width={4} >
                <Image centered size="medium" src={user.avatar_url} />
            </Grid.Column>
            <Grid.Column width={12}>
                <Header as="h2">
                    <Header.Content>
                        {user.name} ({user.login})
                        <Header.Subheader>{user.bio}</Header.Subheader>
                    </Header.Content>
                </Header>
                <p>{user.name} is a Github member for <b>{userDuration}</b>, has <b>{user.followers}</b> followers and follows <b>{user.following}</b>.</p>
                <p>{firstName} has <b>{user.public_repos}</b> public repositories and <b>{user.public_gists}</b> public gists.</p>
                <p>{firstName} mainly works with {languages.join(", ")}.</p>
            </Grid.Column>
        </Grid>
    );
};
export default UserCard;